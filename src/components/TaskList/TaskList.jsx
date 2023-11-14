import './TaskList.css';
import Task from '../Task/Task';
import React from 'react';

export default class TaskList extends React.Component {


  
  render() {
    const {todoList, onDeleted, onComplited, dateUpdate} = this.props

    return (
      <ul className="todo-list" >

      {todoList.map((elem)=>{
        return <Task key={elem.id} 
          text={elem.text}
          complited={elem.complited}
          onDeleted={onDeleted} 
          id={elem.id}
          createdAt = {elem.createdAt}
          onComplited={onComplited}
          dateUpdate = {dateUpdate}
        />
      })}

    </ul>
    )
  }
}
