import './App.css';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import React from 'react';

export default class App extends React.Component {

  state = {
    todoList : [
      {
        id: 1,
        text: 'some text 1',
        complited: false
      },
      {
        id: 2,
        text: 'some text 2',
        complited: false
      },
      {
        id: 3,
        text: 'some text 3',
        complited: false
      },
    ]
  }

  onDeleted = (id)=> {
    this.setState(({todoList})=>{
      const idx = todoList.findIndex((el)=>el.id === id)

      const before = todoList.slice(0, idx);
      const after = todoList.slice(idx + 1);

      const newArr = [...before, ...after];

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

      return {
        todoList : newArr
      }
    })
  }

  addItem = (text) => {
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
       <Footer/>
      </section>
    </section>
    )
  }
}

