import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DateDisplay from './DateDisplay';
import Navbar from './Components/Navbar/Navbar';
import Factbox from './Factbox';
import './App.css'; // Ensure this is imported
import Taskbox from './Components/TaskBox/Taskbox';
import Footer from './Components/Footer';
import Mode from './Components/Navbar/Mode';
import DeletedTasks from './Components/Navbar/DeletedTasks';
import About from './Components/Navbar/About';
import { ModeProvider } from './Components/Navbar/ModeContext';

// To get data from local storage
const getLocalItems = (key) => {
  const list = localStorage.getItem(key);
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [tasks, setTasks] = useState(() => getLocalItems('tasks'));
  const [deletedTasks, setDeletedTasks] = useState(() => getLocalItems('deletedTasks'));
  const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
    localStorage.setItem('mode', mode);
  }, [tasks, deletedTasks, mode]);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', mode === 'dark');
  }, [mode]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, { ...task, stage: 'todo', id: Date.now() }]);
  };

  const moveTask = (id, to) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === id ? { ...t, stage: to } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((t) => t.id !== id)
    );
    const taskToDelete = tasks.find((t) => t.id === id);
    if (taskToDelete) {
      setDeletedTasks((prevDeleted) => [...prevDeleted, taskToDelete]);
    }
  };

  const restoreTask = (id) => {
    const taskToRestore = deletedTasks.find((t) => t.id === id);
    if (taskToRestore) {
      setDeletedTasks((prevDeleted) => prevDeleted.filter((t) => t.id !== id));
      setTasks((prevTasks) => [...prevTasks, taskToRestore]);
    }
  };

  const clearDeletedTasks = () => {
    setDeletedTasks([]);
  };

  const editTask = (id, newText) => {
    const updatedTasks = tasks.map((t) => (t.id === id ? { ...t, task: newText } : t));
    setTasks(updatedTasks);
  };

  const setPriority = (id, priority) => {
    const updatedTasks = tasks.map((t) => (t.id === id ? { ...t, priority } : t));
    setTasks(updatedTasks);
  };

  const searchTasks = (term) => {
    setSearchTerm(term);
    if (term) {
      setFilteredTasks(tasks.filter(task => task.task.toLowerCase().includes(term.toLowerCase())));
    } else {
      setFilteredTasks(tasks);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setFilteredTasks(tasks);
  };

  return (
    <ModeProvider>
      <Router>
        <Navbar searchTasks={searchTasks} clearSearch={clearSearch} searchTerm={searchTerm} />
        <Routes>
          <Route path="/" element={
            <>
              <DateDisplay />
              <Factbox />
              <Taskbox
                tasks={filteredTasks}
                setTasks={setTasks}
                moveTask={moveTask}
                deleteTask={deleteTask}
                editTask={editTask}
                setPriority={setPriority}
              />
              <br />
              <br />
              <br />
              <Footer />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/deleted-tasks" element={
            <DeletedTasks
              deletedTasks={deletedTasks}
              restoreTask={restoreTask}
              clearDeletedTasks={clearDeletedTasks}
            />
          } />
          <Route path="/mode" element={<Mode />} />
        </Routes>
      </Router>
    </ModeProvider>
  );
}

export default App;

////////only mode left
///almost correct
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import DateDisplay from './DateDisplay';
// import Navbar from './Components/Navbar/Navbar';
// import Factbox from './Factbox';
// import './App.css';
// import Taskbox from './Components/TaskBox/Taskbox';
// import Footer from './Components/Footer';
// import Mode from './Components/Navbar/Mode';
// import DeletedTasks from './Components/Navbar/DeletedTasks';
// import About from './Components/Navbar/About';
// import { ModeProvider } from './Components/Navbar/ModeContext';

// // To get data from local storage
// const getLocalItems = (key) => {
//   const list = localStorage.getItem(key);
//   if (list) {
//     return JSON.parse(list);
//   } else {
//     return [];
//   }
// };

// function App() {
//   const [tasks, setTasks] = useState(() => getLocalItems('tasks'));
//   const [deletedTasks, setDeletedTasks] = useState(() => getLocalItems('deletedTasks'));
//   const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');
//   const [filteredTasks, setFilteredTasks] = useState(tasks);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     localStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
//     localStorage.setItem('mode', mode);
//   }, [tasks, deletedTasks, mode]);

//   useEffect(() => {
//     document.body.classList.toggle('dark-mode', mode === 'dark');
//   }, [mode]);

//   const addTask = (task) => {
//     setTasks((prevTasks) => [...prevTasks, { ...task, stage: 'todo', id: Date.now() }]);
//   };

//   const moveTask = (id, to) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((t) => (t.id === id ? { ...t, stage: to } : t))
//     );
//   };

//   const deleteTask = (id) => {
//     setTasks((prevTasks) =>
//       prevTasks.filter((t) => t.id !== id)
//     );
//     const taskToDelete = tasks.find((t) => t.id === id);
//     if (taskToDelete) {
//       setDeletedTasks((prevDeleted) => [...prevDeleted, taskToDelete]);
//     }
//   };

//   const restoreTask = (id) => {
//     const taskToRestore = deletedTasks.find((t) => t.id === id);
//     if (taskToRestore) {
//       setDeletedTasks((prevDeleted) => prevDeleted.filter((t) => t.id !== id));
//       setTasks((prevTasks) => [...prevTasks, taskToRestore]);
//     }
//   };

//   const clearDeletedTasks = () => {
//     setDeletedTasks([]);
//   };

//   const editTask = (id, newText) => {
//     const updatedTasks = tasks.map((t) => (t.id === id ? { ...t, task: newText } : t));
//     setTasks(updatedTasks);
//   };

//   const setPriority = (id, priority) => {
//     const updatedTasks = tasks.map((t) => (t.id === id ? { ...t, priority } : t));
//     setTasks(updatedTasks);
//   };

//   const searchTasks = (term) => {
//     setSearchTerm(term);
//     if (term) {
//       setFilteredTasks(tasks.filter(task => task.task.toLowerCase().includes(term.toLowerCase())));
//     } else {
//       setFilteredTasks(tasks);
//     }
//   };

//   const clearSearch = () => {
//     setSearchTerm('');
//     setFilteredTasks(tasks);
//   };

//   return (
//     <ModeProvider>
//       <Router>
//         <Navbar searchTasks={searchTasks} clearSearch={clearSearch} searchTerm={searchTerm} />
//         <Routes>
//           <Route path="/" element={
//             <>
//               <DateDisplay />
//               <Factbox />
//               <Taskbox
//                 tasks={filteredTasks}
//                 setTasks={setTasks}
//                 moveTask={moveTask}
//                 deleteTask={deleteTask}
//                 editTask={editTask}
//                 setPriority={setPriority}
//               />
//               <br />
//               <br />
//               <br />
//               <Footer />
//             </>
//           } />
//           <Route path="/about" element={<About />} />
//           <Route path="/deleted-tasks" element={
//             <DeletedTasks
//               deletedTasks={deletedTasks}
//               restoreTask={restoreTask}
//               clearDeletedTasks={clearDeletedTasks}
//             />
//           } />
//           <Route path="/mode" element={<Mode />} />
//         </Routes>
//       </Router>
//     </ModeProvider>
//   );
// }

// export default App;

///////only searchbar not working
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import DateDisplay from './DateDisplay';
// import Navbar from './Components/Navbar/Navbar';
// import Factbox from './Factbox';
// import './App.css';
// import Taskbox from './Components/TaskBox/Taskbox';
// import Footer from './Components/Footer';
// import Mode from './Components/Navbar/Mode';
// import DeletedTasks from './Components/Navbar/DeletedTasks';
// import About from './Components/Navbar/About';
// import { ModeProvider } from './Components/Navbar/ModeContext';

// // To get data from local storage
// const getLocalItems = (key) => {
//   const list = localStorage.getItem(key);
//   if (list) {
//     return JSON.parse(list);
//   } else {
//     return [];
//   }
// };

// function App() {
//   const [tasks, setTasks] = useState(() => getLocalItems('tasks'));
//   const [deletedTasks, setDeletedTasks] = useState(() => getLocalItems('deletedTasks'));
//   const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     localStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
//     localStorage.setItem('mode', mode);
//   }, [tasks, deletedTasks, mode]);

//   useEffect(() => {
//     document.body.classList.toggle('dark-mode', mode === 'dark');
//   }, [mode]);

//   const addTask = (task) => {
//     setTasks((prevTasks) => [...prevTasks, { ...task, stage: 'todo', id: Date.now() }]);
//   };

//   const moveTask = (id, to) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((t) => (t.id === id ? { ...t, stage: to } : t))
//     );
//   };

//   const deleteTask = (id) => {
//     setTasks((prevTasks) =>
//       prevTasks.filter((t) => t.id !== id)
//     );
//     const taskToDelete = tasks.find((t) => t.id === id);
//     if (taskToDelete) {
//       setDeletedTasks((prevDeleted) => [...prevDeleted, taskToDelete]);
//     }
//   };

//   const restoreTask = (id) => {
//     const taskToRestore = deletedTasks.find((t) => t.id === id);
//     if (taskToRestore) {
//       setDeletedTasks((prevDeleted) => prevDeleted.filter((t) => t.id !== id));
//       setTasks((prevTasks) => [...prevTasks, taskToRestore]);
//     }
//   };

//   const clearDeletedTasks = () => {
//     setDeletedTasks([]);
//   };

//   const editTask = (id, newText) => {
//     const updatedTasks = tasks.map((t) => (t.id === id ? { ...t, task: newText } : t));
//     setTasks(updatedTasks);
//   };

//   const setPriority = (id, priority) => {
//     const updatedTasks = tasks.map((t) => (t.id === id ? { ...t, priority } : t));
//     setTasks(updatedTasks);
//   };

//   return (
//     <ModeProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={
//             <>
//               <DateDisplay />
//               <Factbox />
//               <Taskbox
//                 tasks={tasks}
//                 setTasks={setTasks}
//                 moveTask={moveTask}
//                 deleteTask={deleteTask}
//                 editTask={editTask}
//                 setPriority={setPriority}
//               />
//               <br />
//               <br />
//               <br />
//               <Footer />
//             </>
//           } />
//           <Route path="/about" element={<About />} />
//           <Route path="/deleted-tasks" element={
//             <DeletedTasks
//               deletedTasks={deletedTasks}
//               restoreTask={restoreTask}
//               clearDeletedTasks={clearDeletedTasks}
//             />
//           } />
//           <Route path="/mode" element={<Mode />} />
//         </Routes>
//       </Router>
//     </ModeProvider>
//   );
// }

// export default App;



// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import DateDisplay from './DateDisplay';
// import Navbar from './Components/Navbar/Navbar';
// import Factbox from './Factbox';
// import './App.css';
// import Taskbox from './Components/TaskBox/Taskbox';
// import Footer from './Components/Footer';
// import Mode from './Components/Navbar/Mode';
// import DeletedTasks from './Components/Navbar/DeletedTasks';
// import About from './Components/Navbar/About';
// import { ModeProvider } from './Components/Navbar/ModeContext';

// // To get data from local storage
// const getLocalItems = (key) => {
//   const list = localStorage.getItem(key);
//   if (list) {
//     return JSON.parse(list);
//   } else {
//     return [];
//   }
// };

// function App() {
//   const [tasks, setTasks] = useState(() => getLocalItems('tasks'));
//   const [deletedTasks, setDeletedTasks] = useState(() => getLocalItems('deletedTasks'));
//   const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     localStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
//     localStorage.setItem('mode', mode);
//   }, [tasks, deletedTasks, mode]);

//   useEffect(() => {
//     document.body.classList.toggle('dark-mode', mode === 'dark');
//   }, [mode]);

//   const addTask = (task) => {
//     setTasks((prevTasks) => [...prevTasks, { ...task, stage: 'todo', id: Date.now() }]);
//   };

//   const moveTask = (id, to) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((t) => (t.id === id ? { ...t, stage: to } : t))
//     );
//   };

//   const deleteTask = (id) => {
//     setTasks((prevTasks) =>
//       prevTasks.filter((t) => t.id !== id)
//     );
//     const taskToDelete = tasks.find((t) => t.id === id);
//     if (taskToDelete) {
//       setDeletedTasks((prevDeleted) => [...prevDeleted, taskToDelete]);
//     }
//   };

//   const restoreTask = (id) => {
//     const taskToRestore = deletedTasks.find((t) => t.id === id);
//     if (taskToRestore) {
//       setDeletedTasks((prevDeleted) => prevDeleted.filter((t) => t.id !== id));
//       setTasks((prevTasks) => [...prevTasks, taskToRestore]);
//     }
//   };

//   const clearDeletedTasks = () => {
//     setDeletedTasks([]);
//   };

//   const editTask = (id, newText) => {
//     const updatedTasks = tasks.map((t) => (t.id === id ? { ...t, task: newText } : t));
//     setTasks(updatedTasks);
//   };

//   const setPriority = (id, priority) => {
//     const updatedTasks = tasks.map((t) => (t.id === id ? { ...t, priority } : t));
//     setTasks(updatedTasks);
//   };

//   return (
//     <ModeProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={
//             <>
//               <DateDisplay />
//               <Factbox />
//               <Taskbox
//                 tasks={tasks}
//                 setTasks={setTasks}
//                 addTask={addTask}
//                 moveTask={moveTask}
//                 deleteTask={deleteTask}
//                 editTask={editTask}
//                 setPriority={setPriority}
//               />
//               <br />
//               <br />
//               <br />
//               <Footer />
//             </>
//           } />
//           <Route path="/about" element={<About />} />
//           <Route path="/deleted-tasks" element={
//             <DeletedTasks
//               deletedTasks={deletedTasks}
//               restoreTask={restoreTask}
//               clearDeletedTasks={clearDeletedTasks}
//             />
//           } />
//           <Route path="/mode" element={<Mode />} />
//         </Routes>
//       </Router>
//     </ModeProvider>
//   );
// }

// export default App;


// //////before deleted tasks
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import DateDisplay from './DateDisplay';
// import Navbar from './Components/Navbar/Navbar';
// import Factbox from './Factbox';
// import './App.css';
// import Taskbox from './Components/TaskBox/Taskbox';
// import Footer from './Components/Footer';
// import Mode from './Components/Navbar/Mode';
// import DeletedTasks from './Components/Navbar/DeletedTasks';
// import About from './Components/Navbar/About';
// import { ModeProvider } from './Components/Navbar/ModeContext';

// // To get data from local storage
// const getLocalItems = (key) => {
//   const list = localStorage.getItem(key);
//   if (list) {
//     return JSON.parse(list);
//   } else {
//     return [];
//   }
// };

// function App() {
//   const [tasks, setTasks] = useState(() => getLocalItems('tasks'));
//   const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     localStorage.setItem('mode', mode);
//   }, [tasks, mode]);

//   useEffect(() => {
//     document.body.classList.toggle('dark-mode', mode === 'dark');
//   }, [mode]);

//   return (
//     <ModeProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={
//             <>
//               <DateDisplay />
//               <Factbox />
//               <Taskbox tasks={tasks} setTasks={setTasks} />
//               <br />
//               <br />
//               <br />
//               <Footer />
//             </>
//           } />
//           <Route path="/about" element={<About />} />
//           <Route path="/deleted-tasks" element={<DeletedTasks />} />
//           <Route path="/mode" element={<Mode />} />
//         </Routes>
//       </Router>
//     </ModeProvider>
//   );
// }

// export default App;



//////before router
// import React, { useState, useEffect } from 'react';
// import DateDisplay from './DateDisplay';
// import Navbar from './Components/Navbar/Navbar';
// import Factbox from './Factbox';
// import './App.css';
// import Taskbox from './Components/TaskBox/Taskbox';
// import Footer from './Components/Footer';

// // To get data from local storage
// const getLocalItems = (key) => {
//   const list = localStorage.getItem(key);
//   if (list) {
//     return JSON.parse(list);
//   } else {
//     return [];
//   }
// };

// function App() {
//   const [tasks, setTasks] = useState(() => getLocalItems('tasks'));
//   const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     localStorage.setItem('mode', mode);
//   }, [tasks, mode]);

//   return (
//     <>
//       <Navbar />
//       <DateDisplay />
//       <Factbox />
//       <Taskbox tasks={tasks} setTasks={setTasks} />
//       <br/>
//       <br/>
//       <br/>
//       <Footer />
//     </>
//   );
// }

// export default App;



////////only one refresh
// import React, { useState, useEffect } from 'react';
// import DateDisplay from './DateDisplay';
// import Navbar from './Components/Navbar/Navbar';
// import Factbox from './Factbox';
// import './App.css';
// import Taskbox from './Components/TaskBox/Taskbox';


// // To get data from local storage
// const getLocalItems = (key) => {
//   const list = localStorage.getItem(key);
//   if (list) {
//     return JSON.parse(list);
//   } else {
//     return [];
//   }
// };

// function App() {
//   const [tasks, setTasks] = useState(() => getLocalItems('tasks'));
//   const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');

//   useEffect(() => {
//         const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         //const savedDeletedTasks = JSON.parse(localStorage.getItem('deletedTasks')) || [];
//         const savedMode = localStorage.getItem('mode') || 'light';
//         setTasks(savedTasks);
//         //setDeletedTasks(savedDeletedTasks);
//         setMode(savedMode);
//       }, []);

//       useEffect(() => {
//             localStorage.setItem('tasks', JSON.stringify(tasks));
//             //localStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
//             localStorage.setItem('mode', mode);
//           }, [tasks, mode]);

//   return (
//     <>
//       <Navbar />
//       <DateDisplay />
//       <Factbox />
//       <Taskbox />
//     </>
//   );
// }

// export default App;


