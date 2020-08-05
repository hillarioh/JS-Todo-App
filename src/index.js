import '../styles/style.scss';
import Projects from './projects';

const showProject = document.getElementById('show-project');
const projectModal = document.getElementById('project-modal');
const taskModal = document.getElementById('task-modal');
const close = document.getElementById('close');
const projectForm = document.getElementById('project-form');
const name = document.getElementById('name');
const projectsList = document.getElementById('projects-list');
const newTask = document.getElementById('new-task');

const projects = new Projects();

const refresh = () => {
  const list = projects.getProjects();
  let contents = '';
  if (list) {
    list.forEach((item) => {
      contents += `
      <p id=${item.projectName}>${item.projectName}
      <button class='fas fa-trash-alt' data-name=${item.projectName
    .split(' ')
    .join('+')}></button>
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
  pname = pname.split('+').join(' ');
  projects.deleteProject(pname);
  refresh();
});

showProject.addEventListener('click', () => {
  projectModal.classList.add('show-modal');
});

newTask.addEventListener('click',()=>{
  taskModal.classList.add('show-modal');
})

close.addEventListener('click', () => {
  if (projectModal.classList.contains('show-modal')) {
    projectModal.classList.remove('show-modal');
  } else {
    taskModal.classList.remove('show-modal');
  }
});

projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const { value } = name;
  projects.addProject(value);
  refresh();
  projectModal.classList.remove('show-modal');
  projectForm.reset();
});
