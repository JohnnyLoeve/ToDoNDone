import React from 'react'
import ToDoList from './ItemAndList/ToDoList';
import AddToDo from './ItemAndList/AddToDo';
import Progress from './ItemAndList/Progress';
import './css/style.css'



class App extends React.Component {
  
constructor() {
  super();
  this.state = {
    toDos: []
  }
}

  render() {
    return(
    <div>
      <div>
        <h1> Create your ToDo-List right here</h1>
      </div>
        <div className='toDoListArea'>
          <AddToDo addToDoFn= {this.addToDo}></AddToDo>
          <ToDoList updateToDoFn= {this.updateToDo} toDos={this.state.toDos}></ToDoList>
          <Progress toDos={this.state.toDos}></Progress>
        </div>
    </div>
      )
  }
  componentDidMount = () => {
    const toDos = localStorage.getItem('toDos');
    if(toDos){
      const savedToDos = JSON.parse(toDos);
      this.setState({ toDos: savedToDos})

    }else {
      console.log('No toDos')
    }
  }

  addToDo = async (toDo, type) => {
    await this.setState({toDos: [...this.state.toDos, {
      text: toDo,
      completed: false,
      type: type
    }] })
    localStorage.setItem('toDos', JSON.stringify(this.state.toDos))
    console.log(localStorage.getItem('toDos'))
  }

  updateToDo = async (toDo) => {
    const newToDos = this.state.toDos.map((_toDo) => {
      if (toDo === _toDo) {
        return {
          text: toDo.text,
          completed: !toDo.completed,
          type: toDo.type, 
        };
      } else {
        return _toDo;
      }
    });
  
    await this.setState({ toDos: newToDos });
    localStorage.setItem('toDos', JSON.stringify(newToDos));
    console.log(newToDos);
  };


}

export default App;