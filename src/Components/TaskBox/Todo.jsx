import React from 'react';
import TaskDesc from './TaskDesc';

const Todo = ({ tasks, moveTask, deleteTask, editTask, setPriority }) => {
      return (
      <div className="todo">
            <p>To Do</p>
            <TaskDesc
            tasks={tasks}
            moveTask={moveTask}
            deleteTask={deleteTask}
            editTask={editTask}
            setPriority={setPriority}
            currentStage="todo"
            />
      </div>
      );
};

export default Todo;


///////////before priority
// import React from 'react';
// import TaskDesc from './TaskDesc';

// const Todo = ({ tasks, moveTask, deleteTask }) => {
//       return (
//       <div className="todo">
//             <p>To Do</p>
//             <TaskDesc tasks={tasks} moveTask={moveTask} deleteTask={deleteTask} currentStage="todo" />
//       </div>
//       );
// };

// export default Todo;
