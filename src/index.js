import '../styles/style.scss';
import Projects from './projects';
import Tasks from './tasks';

const showProject = document.getElementById('show-project');
const projectModal = document.getElementById('project-modal');
const taskModal = document.getElementById('task-modal');
const closeProject = document.getElementById('close-project');
const closeTask = document.getElementById('close-task');
const projectForm = document.getElementById('project-form');
const name = document.getElementById('name');
const projectsList = document.getElementById('projects-list');
const newTask = document.getElementById('new-task');
const taskForm = document.getElementById('task-form');
const taskTitle = document.getElementById('title');
const taskDescription = document.getElementById('description');
const taskDueDate = document.getElementById('duedate');
const taskPriority = document.getElementById('priority');
const titleText = document.getElementById('task-title');
const tasksList = document.getElementById('tasks-list');

const projects = new Projects();

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

  projectsList.innerHTML = contents;
};

refresh();

projectsList.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  let pname = e.target.dataset.name;
  pname = decode(pname);
  projects.deleteProject(pname);
  refresh();
});

showProject.addEventListener('click', () => {
  projectModal.classList.add('show-modal');
});

newTask.addEventListener('click', () => {
  taskModal.classList.add('show-modal');
});

closeProject.addEventListener('click', () => {
  projectModal.classList.remove('show-modal');
});

closeTask.addEventListener('click', () => {
  taskModal.classList.remove('show-modal');
});

projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const { value } = name;
  projects.addProject(value);
  refresh();
  projectModal.classList.remove('show-modal');
  projectForm.reset();
});

const listTasks = (tasks) => {
  let list = '';
  tasks.map((item) => {
    list += `<div class="task-item d-flex justify-content-between">
    <p class="m-0">${item.title}</p>
    <p class="m-0">${item.duedate}</p>
    <p class="m-0">${item.priority}</p>
    </div>
    `;
  });
  tasksList.innerHTML = list;
};

projectsList.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'P') {
    return;
  }
  let pname = e.target.dataset.project;
  pname = decode(pname);

  titleText.innerText = pname;
  const project = projects.singleProject(pname);
  listTasks(project.tasks);
  newTask.dataset.project = nameEncode(pname);
});

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = taskTitle.value;
  const description = taskDescription.value;
  const duedate = taskDueDate.value;
  const priority = taskPriority.value;
  let { project } = newTask.dataset;
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
  taskModal.classList.remove('show-modal');
});
