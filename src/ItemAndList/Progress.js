import React from 'react';
import ProgressBar from 'react-progressbar';
import '../css/style.css';

class Progress extends React.Component {
  render() {
    const { toDos } = this.props;
    const completedPercentage = this.calculateCompletedPercentage(toDos);

    return (
      <ProgressBar completed={completedPercentage} />
    );
  }

  calculateCompletedPercentage = (toDos) => {
    if (!toDos || toDos.length === 0) {
      return 0;
    }

    const completedTasks = toDos.filter((toDo) => toDo.completed);
    return (completedTasks.length / toDos.length) * 100;
  };
}

export default Progress;
