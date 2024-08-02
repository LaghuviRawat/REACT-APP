import React, { useState } from 'react';

const Taskbar = ({ addTask }) => {
      const [task, setTask] = useState('');

      const handleSubmit = (e) => {
      e.preventDefault();
      if (task) {
            addTask({ task }); // Pass task object with task text
            setTask('');
      }
      };

      return (
      <div className="taskbar">
            <form id="task-form" onSubmit={handleSubmit}>
            <input
            type="text"
            id="task"
            placeholder="Add a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />
            <input type="submit" value="Add Task" />
            </form>
      </div>
      );
};

export default Taskbar;



// import React, { useState } from 'react';

// const Taskbar = ({ addTask }) => {
//       const [task, setTask] = useState('');

//       const handleSubmit = (e) => {
//       e.preventDefault();
//       if (task) {
//             addTask(task);
//             setTask('');
//       }
//       };

//       return (
//       <div className="taskbar">
//             <form id="task-form" onSubmit={handleSubmit}>
//             <input
//             type="text"
//             id="task"
//             placeholder="Add a new task..."
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//             />
//             <input type="submit" value="Add Task" />
//             </form>
//       </div>
//       );
// };

// export default Taskbar;

// import React, { useState } from 'react';

// const Taskbar = ({ addTask }) => {
//       const [task, setTask] = useState('');

//       const handleSubmit = (e) => {
//       e.preventDefault();
//       if (task.trim() !== '') {
//             addTask({ task, stage: 'todo', priority: 'low', id: Date.now() });
//             setTask('');
//       }
//       };

//       return (
//       <div className="taskbar">
//             <form id="task-form" onSubmit={handleSubmit}>
//             <input
//             type="text"
//             id="task"
//             placeholder="Add a new task..."
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//             />
//             <input type="submit" value="Add Task" />
//             </form>
//       </div>
//       );
// };

// export default Taskbar;



/////before priority
// import React, { useState } from 'react';

// const Taskbar = ({ addTask }) => {
//       const [task, setTask] = useState('');

      // const handleSubmit = (e) => {
      // e.preventDefault();
      // if (task.trim() !== '') {
      //       addTask(task);
      //       setTask('');
      // }
      // };

//       return (
//       <div className="taskbar">
//             <form id="task-form" onSubmit={handleSubmit}>
//             <input
//             type="text"
//             id="task"
//             placeholder="Add a new task..."
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//             />
//             <input type="submit" value="Add Task" />
//             </form>
//       </div>
//       );
// };

// export default Taskbar;

