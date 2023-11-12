import './App.css';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <section className='todoapp'>
      <header className='header'>
        <h1>todos</h1>
        <NewTaskForm/>
      </header>
      <section className='main'>
       <TaskList/>
       <Footer/>
      </section>
    </section>
  );
}

export default App;
