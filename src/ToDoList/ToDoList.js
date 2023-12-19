import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import '../css/style.css'
import { type } from '@testing-library/user-event/dist/type';

class ToDoList extends React.Component {
  render() {
    const { toDos } = this.props;

    return (
      <div className='toDoListContainer'>
        {toDos.map((_toDo, _index) => (
          <ToDoItem updateToDoFn={this.updateToDo} key={_index} toDo={_toDo}></ToDoItem>
        ))}
      </div>
    );
  }

  updateToDo = (toDo) => {
    this.props.updateToDoFn(toDo);
  };
}

export default ToDoList;
