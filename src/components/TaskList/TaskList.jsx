import './TaskList.css';
import Task from '../Task/Task';
import React from 'react';

export default class TaskList extends React.Component {


  
  render() {
    const {todoList, onDeleted} = this.props

    return (
      <ul className="todo-list" >

      {todoList.map((elem)=>{
        return <Task key={elem.id} text={elem.text} active={elem.active} onDeleted={onDeleted} id={elem.id}/>
      })}

    </ul>
    )
  }
}
