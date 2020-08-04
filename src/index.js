import '../styles/style.scss';
import Projects from './projects';

const showProject = document.getElementById('show-project');
const projectModal = document.getElementById('project-modal');
const close = document.getElementById('close');
const projectForm = document.getElementById('project-form');
const name = document.getElementById('name');
const projectsList = document.getElementById('projects-list');

const projects = new Projects();

const refresh = () => {
  const list = projects.getProjects();
  let contents = '';
  if (list) {
    list.forEach((item) => {
      contents += `<h2 id=${item.projectName}>${item.projectName}</h2>`;
    });
  }

  projectsList.innerHTML = contents;
};

refresh();

showProject.addEventListener('click', () => {
  projectModal.classList.add('show-modal');
});

close.addEventListener('click', () => {
  if (projectModal.classList.contains('show-modal')) {
    projectModal.classList.remove('show-modal');
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
