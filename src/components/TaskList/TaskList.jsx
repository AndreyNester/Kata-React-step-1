import './TaskList.css';
import Task from '../Task/Task';

function TaskList() {
  return ( 
    
    <ul className="todo-list">
      <Task/>
      <Task/>
      <Task/> 
      <Task/>
      <Task/>
    </ul>
   );
}

export default TaskList;