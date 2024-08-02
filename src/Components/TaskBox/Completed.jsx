import React from 'react';
import TaskDesc from './TaskDesc';

const Completed = ({ tasks, moveTask, deleteTask, editTask, setPriority }) => {
      return (
      <div className="completed">
            <p>Completed</p>
            <TaskDesc
            tasks={tasks}
            moveTask={moveTask}
            deleteTask={deleteTask}
            editTask={editTask}
            setPriority={setPriority}
            currentStage="completed"
            />
      </div>
      );
};

export default Completed;


///////before priority
// import React from 'react';
// import TaskDesc from './TaskDesc';

// const Completed = ({ tasks, moveTask, deleteTask }) => {
//       return (
//       <div className="completed">
//             <p>Completed</p>
//             <TaskDesc tasks={tasks} moveTask={moveTask} deleteTask={deleteTask} currentStage="completed" />
//       </div>
//       );
// };

// export default Completed;
