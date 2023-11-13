import React from 'react';
import './Task.css';

export default class Task extends React.Component {

  render(){

    const {text, onDeleted, id, onComplited, complited} = this.props;

    return (
      <li className={complited ? 'completed' : ''} >
      <div className="view">
        <input type="checkbox" className="toggle" onChange={()=>onComplited(id)} checked={complited}/>
        <label>
          <span className="description" onClick={()=>{onComplited(id)}}>{text}</span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={()=>{ onDeleted(id) }}></button>
      </div>
    </li>
    )
  }
}