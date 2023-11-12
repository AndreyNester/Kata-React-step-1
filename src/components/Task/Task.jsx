import './Task.css';

function Task() {
  return ( 
    <li className="">
    <div className="view">
      <input type="checkbox" className="toggle" />
      <label>
        <span className="description">Active task</span>
        <span className="created">created 5 minutes ago</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>
  </li>
   );
}

export default Task;