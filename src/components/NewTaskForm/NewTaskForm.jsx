import React from 'react';
import './NewTaskForm.css';

export default class NewTaskForm extends React.Component {

  state = {
    text : ''
  }


  onTextChanged = (e) => {
    this.setState({
      text : e.target.value
    })
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text) {
      this.props.addItem(this.state.text)

      this.setState({
        text : ''
      })
    }
  }

  render(){

    return ( 
      <form onSubmit={(e)=>{this.onSubmit(e)}}>
        <input className="new-todo" placeholder="What needs to be done?" value={this.state.text} autoFocus onChange={(e)=>{this.onTextChanged(e)}}></input>
      </form>
      
     );
  }
}