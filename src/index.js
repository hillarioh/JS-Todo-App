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
    <p class="m-0" data-task=${nameEncode(item.title)} >${item.title}</p>
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
  const createdTask = task.createTask({
    title,
    description,
    duedate,
    priority,
  });
  projects.updateProject(createdTask);
  listTasks(createdTask.tasks);
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
});
