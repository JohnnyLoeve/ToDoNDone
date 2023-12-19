import React from 'react';
import '../css/style.css';

class AddToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: '',
      type: 'Kitchen'
    };
  }

  render() {
    return (
      <div className='addToDoContainer'>
        <form onSubmit={(e) => this.submitToDo(e)}>
          <input
            className='submitField'
            placeholder='Enter task'
            id='addToDoInput'
            onChange={(e) => this.updateInput(e)}
            type='text'
          ></input>

          <select
            className='typeField'
            id='type'
            onChange={(e) => this.updateType(e)}
            value={this.state.type}
          >
            <option value='Kitchen'>Kitchen</option>
            <option value='Health'>Health</option>
            <option value='House'>House</option>
            <option value='Generel'>Generel</option>
          </select>

          <button className='submitbtn' type='submit'>
            Add ToDo
          </button>
        </form>
      </div>
    );
  }

  updateInput = (e) => {
    this.setState({ toDo: e.target.value });
  };

  updateType = (e) => {
    this.setState({ type: e.target.value });
  };

  submitToDo = (e) => {
    e.preventDefault();
    console.log('this.state: ', this.state);

    this.props.addToDoFn(this.state.toDo, this.state.type);
    document.getElementById('addToDoInput').value = '';
  };
}

export default AddToDo;
