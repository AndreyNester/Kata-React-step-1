import React from 'react';
import './Task.css';

export default class Task extends React.Component {

  onClickSpan = () => {
    this.setState((oldState)=>{
      return {
        ...oldState,
        completed : !oldState.completed
      }
    })
  }
  
  state = {
    completed: false
  }

  render(){

    const {text, onDeleted, id} = this.props;
    const {completed} = this.state;



    return (
      <li className={completed ? 'completed' : ''} >
      <div className="view">
        <input type="checkbox" className="toggle" onChange={this.onClickSpan} checked={completed}/>
        <label>
          <span className="description" onClick={this.onClickSpan}>{text}</span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={()=>{ onDeleted(id) }}></button>
      </div>
    </li>
    )
  }
}