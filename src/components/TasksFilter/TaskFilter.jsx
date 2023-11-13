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

  onClickFilter = (key) => {

    const {onFilter} = this.props
    onFilter(key);

    switch (key) {

      case 'All':
        this.setState({
          buttons : {
            all : true,
            active : false,
            completed : false
          }
        })
        break;

        case 'Active':
          this.setState({
            buttons : {
              all : false,
              active : true,
              completed : false
            }
          })
        break;

        case 'Completed':
          this.setState({
            buttons : {
              all : false,
              active : false,
              completed : true
            }
          })
        break;
    
      default:
        break;
    }
    
  }


  render(){

    const {buttons} = this.state;

    return ( 
      <ul className="filters" >
        <li>
          <button className={buttons.all ? 'selected' : ''} onClick={()=>{this.onClickFilter('All')}} >All</button>
        </li>
        <li>
          <button className={buttons.active ? 'selected' : '' } onClick={()=>{this.onClickFilter('Active')}} >Active</button>
        </li>
        <li>
          <button className={buttons.completed ? 'selected' : ''} onClick={()=>{this.onClickFilter('Completed')}} >Completed</button>
        </li>
      </ul>
     );

  }
}
