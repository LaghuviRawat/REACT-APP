import React from 'react';
import TaskDesc from './TaskDesc';

const Scheduler = ({ tasks, moveTask, deleteTask, editTask, setPriority }) => {
      const stages = ['todo', 'inProgress', 'completed'];

      return (
      <div className="scheduler">
            {stages.map((currentStage) => (
            <div key={currentStage} className="stage">
            <h2>{currentStage.charAt(0).toUpperCase() + currentStage.slice(1)}</h2>
            <TaskDesc
                  tasks={tasks.filter(task => task.stage === currentStage)}
                  moveTask={moveTask}
                  deleteTask={deleteTask}
                  editTask={editTask}
                  setPriority={setPriority}
                  currentStage={currentStage}
            />
            </div>
            ))}
      </div>
      );
};

export default Scheduler;

/////taskbar not woeking
// import React from 'react';
// import TaskDesc from './TaskDesc';

// const Scheduler = ({ tasks, moveTask, deleteTask, editTask, setPriority , currentStage}) => {
//       const stages = ['todo', 'inProgress', 'completed'];

//       return (
//       <div className="scheduler">
//             {stages.map((currentStage) => (
//             <div key={currentStage} className="stage">
//             <h2>{currentStage.charAt(0).toUpperCase() + currentStage.slice(1)}</h2>
//             <TaskDesc
//                   tasks={tasks.filter(task => task && task.currentStage === currentStage)}
//                   moveTask={moveTask}
//                   deleteTask={deleteTask}
//                   editTask={editTask}
//                   setPriority={setPriority}
//                   currentStage={currentStage}
//             />
//             </div>
//             ))}
//       </div>
//       );
// };

// export default Scheduler;


///////before delete
// import React from 'react';
// import Todo from './Todo';
// import Inprogress from './Inprogress';
// import Completed from './Completed';

// const Scheduler = ({ tasks, moveTask, deleteTask, editTask, setPriority }) => {
//       const todoTasks = tasks.filter((t) => t.stage === 'todo');
//       const inProgressTasks = tasks.filter((t) => t.stage === 'inProgress');
//       const completedTasks = tasks.filter((t) => t.stage === 'completed');

//       return (
//       <div className="scheduler">
//             <Todo
//             tasks={todoTasks}
//             moveTask={moveTask}
//             deleteTask={deleteTask}
//             editTask={editTask}
//             setPriority={setPriority}
//             />
//             <Inprogress
//             tasks={inProgressTasks}
//             moveTask={moveTask}
//             deleteTask={deleteTask}
//             editTask={editTask}
//             setPriority={setPriority}
//             />
//             <Completed
//             tasks={completedTasks}
//             moveTask={moveTask}
//             deleteTask={deleteTask}
//             editTask={editTask}
//             setPriority={setPriority}
//             />
//       </div>
//       );
// };

// export default Scheduler;



