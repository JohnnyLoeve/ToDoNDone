import React from 'react';
import '../css/style.css'

class ToDoItem extends React.Component {
    render() {
      const { toDo } = this.props;
  
      return (
        <div className={'toDoItem' + (toDo.completed ? ' completed' : '')} onClick={this.toggleToDo}>
          <div>Task: { toDo.text } </div>  
          <div>Type: { toDo.type } </div>
        </div>
      );
    }
  
    toggleToDo = () => {
      this.props.updateToDoFn(this.props.toDo);
    };
  }
  

export default ToDoItem;
