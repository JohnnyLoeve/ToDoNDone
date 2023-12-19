import React from 'react'

class AddToDo extends React.Component {

    constructor() {
        super();
        this.state = {
            toDo: ''
        };
    }

    render() {
        return(
        <div className='addToDoContainer'>
            <form onSubmit={(e)=> this.submitToDo(e)}>
                <input id='addToDoInput' onChange={(e)=> this.updateInput(e)} type='text'></input>
                <button type='submit'>Add ToDo</button>
            </form>
        </div>
        )
    }
updateInput = (e) => {
    this.setState({toDo: e.target.value})

}
submitToDo = (e)=> {
    e.preventDefault()
    console.log('this.state: ', this.state)
    this.props.addToDoFn(this.state.toDo)
    document.getElementById('addToDoInput').value=''
}
}

export default AddToDo;