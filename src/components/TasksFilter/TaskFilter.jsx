import React from 'react';
import './TaskFilter.css';

export default class TaskFilter extends React.Component{

  state = {
    buttons : {
      all : true,
      active : false,
      completed : false
    }
  }


  render(){

    const {buttons} = this.state;

    const {onFilter} = this.props;

    return ( 
      <ul className="filters" >
        <li>
          <button className={buttons.all ? 'selected' : ''} onClick={()=>{onFilter('All')}} >All</button>
        </li>
        <li>
          <button className={buttons.active ? 'selected' : '' } onClick={()=>{onFilter('Active')}} >Active</button>
        </li>
        <li>
          <button className={buttons.completed ? 'selected' : ''} onClick={()=>{onFilter('Completed')}} >Completed</button>
        </li>
      </ul>
     );

  }
}
