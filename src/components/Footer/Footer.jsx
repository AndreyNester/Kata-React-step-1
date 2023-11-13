import './Footer.css';
import TaskFilter from '../TasksFilter/TaskFilter';
import React from 'react';


export default class Footer extends React.Component {

  render(){

    const {onFilter, itemsCount, onClearCompleted} = this.props;

    return ( 
      <footer className="footer">
        <span className="todo-count">{itemsCount} items left </span>
        <TaskFilter onFilter={onFilter} />
        <button onClick={onClearCompleted} className="clear-completed">Clear completed</button>
      </footer>
     );
  }
}