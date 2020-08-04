/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */
class Projects {
  getProjects() {
    const projectList = JSON.parse(localStorage.getItem('projects'));
    return projectList;
  }

  saveProject(project) {
    return localStorage.setItem('projects', JSON.stringify(project));
  }

  addProject(name) {
    if (!name) {
      alert('Project name is required!');
    }
    const list = this.getProjects() || [];
    const names = list.map((item) => item.projectName);
    if (names.includes(name)) {
      alert('Project already exists!');
    } else {
      list.push({ projectName: name });
      this.saveProject(list);
    }
  }

  singleProject(project) {
    const list = this.getProjects();
    const single = list.filter((item) => project === item.projectName);
    return single[0];
  }

  deleteProject(project) {
    const single = this.singleProject(project);
    const list = this.getProjects();
    const removed = list.filter(
      (item) => item.projectName !== single.projectName,
    );
    return this.saveProject(removed);
  }
}

export default Projects;
