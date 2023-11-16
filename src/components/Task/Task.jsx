import React from 'react';
import './Task.css';

import { formatDistanceToNow} from 'date-fns'

export default class Task extends React.Component {

  static defaultProps = {
    updateInterval : 1000
  };

  static propTypes = {
    updateInterval : (props, propName, componentName) => {
      const value = props[propName];
      if (typeof value == 'number' && !isNaN (value)) return null
      return new TypeError (`${componentName}: ${propName} must be number!`)
    },

    id : (props, propName, componentName) => {
      const value = props[propName];
      if (typeof value == 'number' && !isNaN (value)) return null
      return new TypeError (`${componentName}: ${propName} must be number!`)
    },


  };

  state = {
    text: this.props.text,
    created : 'less than 5 seconds',
  }

  componentDidMount () {
    const { updateInterval } = this.props
    this.timerId = setInterval(()=>{
      console.log('hela');
      this.setState({
        created : formatDistanceToNow(new Date(this.props.createdAt), {includeSeconds: true}
        )
      })
    }, updateInterval)
  }

  componentWillUnmount () {
    clearInterval(this.timerId)
  }

  onTextChanged = (e) => {
    this.setState({
      text : e.target.value
    })
  }

  onKeyUp = (e, id) => {
    const {onEditTask} = this.props
      if (e.code === 'Enter' ) {
        
        onEditTask(id, e.target.value)
      }

      if (e.code === 'Escape') {

        onEditTask(id, this.props.text)

      }
  }




  render(){

    const {text,onDeleted, id, onComplited, complited, onEdit,  editing} = this.props;

    return (
      <li className={ editing ? 'editing' : complited ? 'completed' : null} >
      <div className="view">
        <input type="checkbox" className="toggle" onChange={()=>onComplited(id)} checked={complited}/>
        <label>
          <span className="description" onClick={()=>{onComplited(id)}}>{text}</span>
          <span className="created">Created {this.state.created} ago</span>
        </label>
        <button className="icon icon-edit" onClick={(e)=>{onEdit(id)}}></button>
        <button className="icon icon-destroy" onClick={()=>{ onDeleted(id) }}></button>
      </div>
      {editing ? <input type="text" className="edit" value={this.state.text} onChange={(e)=>{this.onTextChanged(e)}} onKeyUp={(e)=>{this.onKeyUp(e, id)}}></input> : null} 
    </li>
    )
  }
}
