import React from 'react';
import TaskDesc from './TaskDesc';

const Inprogress = ({ tasks, moveTask, deleteTask, editTask, setPriority }) => {
      return (
      <div className="in-progress">
            <p>In Progress</p>
            <TaskDesc
            tasks={tasks}
            moveTask={moveTask}
            deleteTask={deleteTask}
            editTask={editTask}
            setPriority={setPriority}
            currentStage="inProgress"
            />
      </div>
      );
};

export default Inprogress;


/////////before priority
// import React from 'react';
// import TaskDesc from './TaskDesc';

//       const Inprogress = ({ tasks, moveTask, deleteTask }) => {
//       return (
//       <div className="inprogress">
//             <p>In Progress</p>
//             <TaskDesc tasks={tasks} moveTask={moveTask} deleteTask={deleteTask} currentStage="inProgress" />
//       </div>
//       );
// };

// export default Inprogress;
