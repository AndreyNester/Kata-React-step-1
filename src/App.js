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
      },
      {
        id: 2,
        text: 'some text 2',
      },
      {
        id: 3,
        text: 'some text 3'
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



  render () {
    const {todoList} = this.state;

    return (
      <section className='todoapp'>
      <header className='header'>
        <h1>todos</h1>
        <NewTaskForm/>
      </header>
      <section className='main'>
       <TaskList todoList={todoList} onDeleted={this.onDeleted} />
       <Footer/>
      </section>
    </section>
    )
  }
}

