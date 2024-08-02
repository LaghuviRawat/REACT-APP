import React from 'react';
import Taskbar from './Taskbar';
import Scheduler from './Scheduler';

const Taskbox = ({ tasks, setTasks, moveTask, deleteTask, editTask, setPriority }) => {
      const addTask = (task) => {
      setTasks((prevTasks) => [...prevTasks, { ...task, stage: 'todo', id: Date.now() }]);
      };

      return (
      <div className="Taskbox">
            <Taskbar addTask={addTask} />
            <Scheduler
            tasks={tasks}
            moveTask={moveTask}
            deleteTask={deleteTask}
            editTask={editTask}
            setPriority={setPriority}
            />
      </div>
      );
};

export default Taskbox;


// import React from 'react';
// import Taskbar from './Taskbar';
// import Scheduler from './Scheduler';

// const Taskbox = ({ tasks, moveTask, deleteTask, editTask, setPriority }) => {
//       return (
//       <div className="Taskbox">
//             <Taskbar addTask={(task) => {
//             // Pass the function to App to manage tasks
//             }} />
//             <Scheduler
//             tasks={tasks}
//             moveTask={moveTask}
//             deleteTask={deleteTask}
//             editTask={editTask}
//             setPriority={setPriority}
//             />
//       </div>
//       );
// };

// export default Taskbox;


/////taskbar not working
// import React, { useEffect } from 'react';
// import Taskbar from './Taskbar';
// import Scheduler from './Scheduler';

// const Taskbox = ({ tasks, setTasks }) => {
//       useEffect(() => {
//       localStorage.setItem('tasks', JSON.stringify(tasks));
//       }, [tasks]);

//       const addTask = (task) => {
//       setTasks((prevTasks) => [...prevTasks, { ...task, stage: 'todo', id: Date.now() }]);
//       };

//       const moveTask = (id, to) => {
//       setTasks((prevTasks) =>
//             prevTasks.map((t) => (t.id === id ? { ...t, stage: to } : t))
//       );
//       };

//       const deleteTask = (id) => {
//       setTasks((prevTasks) =>
//             prevTasks.filter((t) => t.id !== id)
//       );
//       };

//       const editTask = (id, newText) => {
//       const updatedTasks = tasks.map((t) => (t.id === id ? { ...t, task: newText } : t));
//       setTasks(updatedTasks);
//       };

//       const setPriority = (id, priority) => {
//       const updatedTasks = tasks.map((t) => (t.id === id ? { ...t, priority } : t));
//       setTasks(updatedTasks);
//       };

//       return (
//       <div className="Taskbox">
//             <Taskbar addTask={addTask} />
//             <Scheduler
//             tasks={tasks}
//             moveTask={moveTask}
//             deleteTask={deleteTask}
//             editTask={editTask}
//             setPriority={setPriority}
//             />
//       </div>
//       );
// };

// export default Taskbox;

// import React, { useEffect } from 'react';
// import Taskbar from './Taskbar';
// import Scheduler from './Scheduler';

// const Taskbox = ({ tasks, setTasks, deleteTask }) => {
//       useEffect(() => {
//       localStorage.setItem('tasks', JSON.stringify(tasks));
//       }, [tasks]);

//       const addTask = (task) => {
//       setTasks((prevTasks) => [...prevTasks, { ...task, stage: 'todo', id: Date.now() }]);
//       };

//       const moveTask = (id, to) => {
//       setTasks((prevTasks) =>
//             prevTasks.map((t) => (t.id === id ? { ...t, stage: to } : t))
//       );
//       };

//       const editTask = (id, newText) => {
//       const updatedTasks = tasks.map((t) => (t.id === id ? { ...t, task: newText } : t));
//       setTasks(updatedTasks);
//       };

//       const setPriority = (id, priority) => {
//       const updatedTasks = tasks.map((t) => (t.id === id ? { ...t, priority } : t));
//       setTasks(updatedTasks);
//       };

//       return (
//       <div className="Taskbox">
//             <Taskbar addTask={addTask} />
//             <Scheduler
//             tasks={tasks}
//             moveTask={moveTask}
//             deleteTask={deleteTask}
//             editTask={editTask}
//             setPriority={setPriority}
//             />
//       </div>
//       );
// };

// export default Taskbox;



///////one refresh
// import React, { useState, useEffect } from 'react';
// import Taskbar from './Taskbar';
// import Scheduler from './Scheduler';

// const Taskbox = () => {
//       const [tasks, setTasks] = useState([]);

//       useEffect(() => {
//       const savedTasks = JSON.parse(localStorage.getItem('tasks'));
//       if (savedTasks) {
//             setTasks(savedTasks);
//       }
//       }, []);

//       useEffect(() => {
//       localStorage.setItem('tasks', JSON.stringify(tasks));
//       }, [tasks]);

//       const addTask = (task) => {
//       setTasks((prevTasks) => [...prevTasks, task]);
//       };

//       const moveTask = (id, to) => {
//       setTasks((prevTasks) =>
//             prevTasks.map((t) => (t.id === id ? { ...t, stage: to } : t))
//       );
//       };

//       const deleteTask = (id) => {
//       setTasks((prevTasks) =>
//             prevTasks.filter((t) => t.id !== id)
//       );
//       };

//       const editTask = (id, newText) => {
//       const updatedTasks = tasks.map((t) => (t.id === id ? { ...t, task: newText } : t));
//       setTasks(updatedTasks);
//       };

//       const setPriority = (id, priority) => {
//       const updatedTasks = tasks.map((t) => (t.id === id ? { ...t, priority } : t));
//       setTasks(updatedTasks);
//       };

//       return (
//       <div className="Taskbox">
//             <Taskbar addTask={addTask} />
//             <Scheduler
//             tasks={tasks}
//             moveTask={moveTask}
//             deleteTask={deleteTask}
//             editTask={editTask}
//             setPriority={setPriority}
//             />
//       </div>
//       );
// };

// export default Taskbox;


//////before priority
// import React, { useState, useEffect } from 'react';
// import Taskbar from './Taskbar';
// import Scheduler from './Scheduler';

// const Taskbox = () => {
//       const [tasks, setTasks] = useState([]);

//       useEffect(() => {
//       const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//       setTasks(savedTasks);
//       }, []);

//       useEffect(() => {
//       localStorage.setItem('tasks', JSON.stringify(tasks));
//       }, [tasks]);

//       const addTask = (task) => {
//       setTasks((prevTasks) => [...prevTasks, { task, currentStage: 'todo' }]);
//       };

//       const moveTask = (task, to) => {
//       setTasks((prevTasks) =>
//             prevTasks.map((t) =>
//             t.task === task ? { ...t, currentStage: to } : t
//             )
//       );
//       };

//       const deleteTask = (task) => {
//       setTasks((prevTasks) =>
//             prevTasks.filter((t) => t.task !== task)
//       );
//       };

//       return (
//       <div className="Taskbox">
//             <Taskbar addTask={addTask} />
//             <Scheduler tasks={tasks} moveTask={moveTask} deleteTask={deleteTask} />
//       </div>
//       );
// };

// export default Taskbox;
