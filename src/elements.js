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
const taskDetails = document.getElementById('task-details');
const icon = document.createElement('i');
const deleteIcon = document.createElement('i');
icon.className = 'fas fa-pen';
deleteIcon.className = 'fas fa-trash-alt';

export {
  showProject,
  projectModal,
  taskModal,
  closeProject,
  closeTask,
  projectForm,
  name,
  projectsList,
  newTask,
  taskForm,
  taskTitle,
  taskDescription,
  taskDueDate,
  taskPriority,
  titleText,
  tasksList,
  taskDetails,
  icon,
  deleteIcon,
};
