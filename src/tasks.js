/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */
class Tasks {
  constructor(project) {
    this.project = project;
  }

  // eslint-disable-next-line consistent-return
  createTask(task) {
    const {
      title, description, duedate, priority,
    } = task;
    const titles = this.project.tasks.map((item) => item.title);
    if (!title || !description || !duedate || !priority) {
      alert('Please fill all fields');
    } else if (titles.includes(title)) {
      alert('Similar task exists!');
    } else {
      this.project.tasks.push(task);
      return this.project;
    }
  }

  singleTask(task) {
    const tasksList = this.project.tasks;
    const single = tasksList.filter((item) => item.title === task.title);
    return single[0];
  }

  deleteTask(task) {
    const single = this.singleTask(task);
    const removed = this.project.tasks.filter(
      (item) => item.title !== single.title,
    );
    return removed;
  }

  updateTask(task) {
    const removed = this.deleteTask(task);
    removed.push(task);
    return removed;
  }
}

export default Tasks;
