import './TaskList.css';
import Task from '../Task/Task';
import React from 'react';


const TaskList = ({todoList, onDeleted, onComplited, onEddit}) =>{

  return (
    <ul className="todo-list" >

    {todoList.map((elem)=>{
      return <Task 
        key={elem.id} 
        text={elem.text}
        complited={elem.complited}
        onDeleted={onDeleted} 
        id={elem.id}
        createdAt = {elem.createdAt}
        onComplited={onComplited}
      />
    })}
  </ul>
  )
}

export default TaskList;

