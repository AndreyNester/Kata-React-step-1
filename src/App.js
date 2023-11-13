import './App.css';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import React from 'react';

export default class App extends React.Component {

  todoList = []

  state = {
    todoList : this.todoList
  }

  onDeleted = (id)=> {
    this.setState(({todoList})=>{
      const idx = todoList.findIndex((el)=>el.id === id)

      const before = todoList.slice(0, idx);
      const after = todoList.slice(idx + 1);

      const newArr = [...before, ...after];

      this.todoList = newArr;

      return {
        todoList: newArr
      }

    })
  }

  onComplited = (id) => {



    this.setState(({todoList})=>{

      const idx = todoList.findIndex((el)=>el.id === id)
      const newArr = [...todoList];
      newArr[idx] = {
        ...todoList[idx],
        complited : !todoList[idx].complited
      }

      this.todoList = newArr;

      return {
        todoList : newArr
      }
    })
  }

  addItem = (text) => {

    this.todoList = [...this.todoList, {
      id :  this.todoList.length === 0 ? 1 : Math.max(...this.todoList.map((el)=>el.id)) + 1,
      text : text,
      complited : false
    }]

    this.setState(({todoList})=>{


      
      return {
        todoList : [...todoList, {
          id :  todoList.length === 0 ? 1 : Math.max(...todoList.map((el)=>el.id)) + 1,
          text : text,
          complited : false
        }]
      }
    })
  }

  onFilter = (key) => {
    switch (key) {

      case 'All':

        this.setState({
          todoList: this.todoList.filter(el => true)
        })
        break;

        case 'Active':
          this.setState({
            todoList: this.todoList.filter(el => !el.complited)
          })
        break;

        case 'Completed':
          this.setState({
            todoList: this.todoList.filter(el => el.complited)
          })
        break;
    


      default:
        break;
    }
  }

  render () {
    const {todoList} = this.state;

    return (
      <section className='todoapp'>
      <header className='header'>
        <h1>todos</h1>
        <NewTaskForm addItem={this.addItem}/>
      </header>
      <section className='main'>
       <TaskList todoList={todoList} onDeleted={this.onDeleted} onComplited={this.onComplited}/>
       <Footer onFilter={this.onFilter} itemsCount = {todoList.length}/>
      </section>
    </section>
    )
  }
}

