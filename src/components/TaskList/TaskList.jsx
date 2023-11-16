import './TaskList.css';
import Task from '../Task/Task';
import React from 'react';


const TaskList = ({todoList, onDeleted, onComplited, onEdit, onEditTask}) =>{

  return (
    <ul className="todo-list" >

    {todoList.map((elem)=>{
      return <Task 
        key={elem.id} 
        text={elem.text}
        complited={elem.complited}
        id={elem.id}
        createdAt = {elem.createdAt}
        editing = {elem.editing}

        onDeleted={onDeleted}
        onComplited={onComplited}
        onEdit = {onEdit}
        onEditTask={onEditTask}
      />
    })}
  </ul>
  )
}

export default TaskList;

