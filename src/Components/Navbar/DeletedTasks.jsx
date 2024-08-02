import React from 'react';

const DeletedTasks = ({ deletedTasks, restoreTask, clearDeletedTasks }) => {
      return (
      <div className="deleted-tasks">
            <h2>Deleted Tasks</h2>
            {deletedTasks.length > 0 ? (
            <ul>
            {deletedTasks.map((task) => (
                  <li key={task.id}>
                  {task.task}
                  <button onClick={() => restoreTask(task.id)}>Restore</button>
                  </li>
            ))}
            </ul>
            ) : (
            <p>No tasks to display</p>
            )}
            <button onClick={clearDeletedTasks}>Clear All</button>
      </div>
      );
};

export default DeletedTasks;
