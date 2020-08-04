import '../styles/style.scss';
import Projects from './projects';

const projects = new Projects();

// console.log(projects.addProject('library'));
console.log(projects.deleteProject('library'));
console.log(projects.getProjects());

// const proJect = [
//   {
//     prjectName: 'library',
//     tasks: [
//       {
//         taskName: 'cleaning',
//         date: new Date(),
//       },
//     ],
//   },
// ];
