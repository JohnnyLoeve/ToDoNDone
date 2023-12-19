import React from 'react';
import './style.css'

class ToDoItem extends React.Component {
    render() {
      const { toDo } = this.props;
  
      return (
        <div className={'toDoItem' + (toDo.completed ? ' completed' : '')} onClick={this.toggleToDo}>
          {toDo.text}
        </div>
      );
    }
  
    toggleToDo = () => {
      this.props.updateToDoFn(this.props.toDo);
    };
  }
  

export default ToDoItem;
