import React from 'react';
import '../css/style.css';



class Progress extends React.Component {

    render() {
       
        const completedPercentage = this.calculateCompletedPercentage()

        return (
            <progressBar completed={completedPercentage}></progressBar>
        )
    }

    calculateCompletedPercentage = () => {
        const { toDos } = this.state;
        if (toDos.length === 0) {
          return 0;
        }
    
        const completedTasks = toDos.filter((toDo) => toDo.completed);
        return (completedTasks.length / toDos.length) * 100;
      };

}