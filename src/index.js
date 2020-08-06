import '../styles/style.scss';
import Projects from './projects';
import Tasks from './tasks';
import * as Element from './elements';

const projects = new Projects();

let gproject = '';

const nameEncode = (name) => name.split(' ').join('+');

const decode = (name) => name.split('+').join(' ');

const refresh = () => {
  const list = projects.getProjects();
  let contents = '';
  if (list) {
    list.forEach((item) => {
      const dataName = nameEncode(item.projectName);
      contents += `
      <p data-project=${dataName}>${item.projectName}
      <button class='fas fa-trash-alt' data-name=${dataName}></button>
      </p>`;
    });
  }

  Element.projectsList.innerHTML = contents;
};

refresh();

Element.projectsList.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  let pname = e.target.dataset.name;
  pname = decode(pname);
  projects.deleteProject(pname);
  refresh();
});

Element.showProject.addEventListener('click', () => {
  Element.projectModal.classList.add('show-modal');
});

Element.newTask.addEventListener('click', () => {
  Element.taskModal.classList.add('show-modal');
});

Element.closeProject.addEventListener('click', () => {
  Element.projectModal.classList.remove('show-modal');
});

Element.closeTask.addEventListener('click', () => {
  Element.taskModal.classList.remove('show-modal');
});

Element.projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const { value } = Element.name;
  projects.addProject(value);
  refresh();
  Element.projectModal.classList.remove('show-modal');
  Element.projectForm.reset();
});

const listTasks = (tasks) => {
  let list = '';
  tasks.forEach((item) => {
    list += `<div class="task-item d-flex justify-content-between">
    <p id="first-task" class="m-0" data-task=${nameEncode(item.title)} >${item.title}</p>
    <p class="m-0">${item.duedate}</p>
    <p class="m-0">${item.priority}</p>
    </div>
    `;
  });
  Element.tasksList.innerHTML = list;
};

Element.projectsList.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'P') {
    return;
  }
  let pname = e.target.dataset.project;
  pname = decode(pname);

  Element.titleText.innerText = pname;
  const project = projects.singleProject(pname);
  gproject = project;
  listTasks(project.tasks);
  Element.newTask.dataset.project = nameEncode(pname);
});

Element.taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = Element.taskTitle.value;
  const description = Element.taskDescription.value;
  const duedate = Element.taskDueDate.value;
  const priority = Element.taskPriority.value;
  let { project } = Element.newTask.dataset;
  project = projects.singleProject(decode(project));
  const task = new Tasks(project);
  const tList = project.tasks.map((item) => item.title);
  const taskDetails = {
    title,
    description,
    duedate,
    priority,
  };
  if (tList.includes(title)) {
    const updated = task.updateTask(taskDetails);
    project.tasks = updated;
    projects.updateProject(project);
    const newData = updated.filter((item) => item.title === title)[0];
    Element.icon.dataset.task = nameEncode(newData.title);
    listTasks(project.tasks);
  } else {
    const createdTask = task.createTask(taskDetails);
    projects.updateProject(createdTask);
    listTasks(createdTask.tasks);
  }

  Element.taskModal.classList.remove('show-modal');
  Element.taskForm.reset();
});

Element.tasksList.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'P') return;
  const value = decode(e.target.dataset.task);
  const findTask = gproject.tasks.filter((item) => item.title === value)[0];
  Element.taskDetails.innerHTML = `
  <h3>${findTask.title} <span><small>
  ${findTask.priority} priority</small></span></h3>
  <p>${findTask.description}</p>
  <small>${findTask.duedate}</small>
  `;

  Element.icon.dataset.task = nameEncode(findTask.title);
  Element.deleteIcon.dataset.task = nameEncode(findTask.title);
  Element.taskDetails.appendChild(Element.icon);
  Element.taskDetails.appendChild(Element.deleteIcon);
});

Element.icon.addEventListener('click', (e) => {
  Element.taskModal.classList.add('show-modal');
  const taskName = decode(e.target.dataset.task);
  const taskDetails = gproject.tasks.filter(
    (item) => item.title === taskName,
  )[0];
  const {
    title, description, duedate, priority,
  } = taskDetails;
  Element.taskTitle.value = title;
  Element.taskTitle.disabled = true;
  Element.taskDescription.value = description;
  Element.taskDueDate.value = duedate;
  Element.taskPriority.value = priority;
});

Element.deleteIcon.addEventListener('click', (e) => {
  const data = decode(e.target.dataset.task);
  const tList = gproject.tasks.filter((item) => item.title === data)[0];
  const task = new Tasks(gproject);
  const deleted = task.deleteTask(tList);
  gproject.tasks = deleted;
  projects.updateProject(gproject);
  listTasks(gproject.tasks);
  Element.taskDetails.innerHTML = '';
});
