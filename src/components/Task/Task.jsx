import React from 'react';
import './Task.css';

import { formatDistanceToNow} from 'date-fns'

export default class Task extends React.Component {

  static defaultProps = {
    updateInterval : 5000
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
    created : 'just now'
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

  render(){

    const {text, onDeleted, id, onComplited, complited} = this.props;

    return (
      <li className={complited ? 'completed' : ''} >
      <div className="view">
        <input type="checkbox" className="toggle" onChange={()=>onComplited(id)} checked={complited}/>
        <label>
          <span className="description" onClick={()=>{onComplited(id)}}>{text}</span>
          <span className="created">{this.state.created}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={()=>{ onDeleted(id) }}></button>
        
      </div>
    </li>
    )
  }
}
