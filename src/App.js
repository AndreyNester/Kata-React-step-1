import './App.css';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import React from 'react';

import { formatDistanceToNow} from 'date-fns'

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

    this.setState(({todoList})=>{

      const createTime = new Date()

      this.todoList = [...todoList, {
        id :  this.todoList.length === 0 ? 1 : Math.max(...this.todoList.map((el)=>el.id)) + 1,
        text : text,
        complited : false,
        createdAt: `${createTime.getMonth() + 1}.${createTime.getDate()}.${createTime.getFullYear()} ${createTime.getHours()}:${createTime.getMinutes()}:${createTime.getSeconds()}`
      }]

      return {
        todoList : this.todoList
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

  onClearCompleted = () => {

    this.todoList = this.todoList.filter(el => !el.complited)
    this.onFilter('Active')
  }

  activeCounter = () => {
    return this.todoList.filter(el => !el.complited).length
  }

  dateUpdate = () => {
    if (this.todoList.length){
      console.log('inter');

      this.setState(()=>{
        
        return {
          todoList : this.todoList.map( (el) => {
            return {
              ...el,
              createdAt : formatDistanceToNow(new Date('06.05.2000 00:00:00'), {includeSeconds: true})
            }
          })
        }
      })
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
       <TaskList dateUpdate={this.dateUpdate} todoList={todoList} onDeleted={this.onDeleted} onComplited={this.onComplited}/>
       <Footer onClearCompleted={this.onClearCompleted} onFilter={this.onFilter} itemsCount = {this.activeCounter()}/>
      </section>
    </section>
    )
  }
}

