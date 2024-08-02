import React, { useState } from 'react';

const TaskDesc = ({ tasks, moveTask, deleteTask, editTask, setPriority, currentStage }) => {
      const [editTaskId, setEditTaskId] = useState(null);
      const [editText, setEditText] = useState('');
      const [editingPriority, setEditingPriority] = useState(true);

      const handleEdit = (task, id) => {
      setEditTaskId(id);
      setEditText(task);
      setEditingPriority(true);
      };

      const cancelEdit = () => {
      setEditTaskId(null);
      setEditText('');
      setEditingPriority(false);
      };

      const saveEdit = (id) => {
      if (editText.trim() !== '') {
            editTask(id, editText);
            setEditTaskId(null);
            setEditText('');
      }
      setEditingPriority(false);
      };

      const handlePriorityChange = (taskId, priority) => {
      setPriority(taskId, priority);
      setEditingPriority(false);
      };

      const getNextStage = (stage) => {
      if (stage === 'todo') return 'inProgress';
      if (stage === 'inProgress') return 'completed';
      return 'completed';
      };

      const getPreviousStage = (stage) => {
      if (stage === 'completed') return 'inProgress';
      if (stage === 'inProgress') return 'todo';
      return 'todo';
      };

      return (
      <div className="desc">
            {tasks.length > 0 ? (
            <ul id="tasks">
            {tasks.map((taskObj) => (
                  <li
                  key={taskObj.id}
                  className={`task-item ${taskObj.priority === 'high' ? 'high-priority' : ''}`}
                  >
                  {editTaskId === taskObj.id ? (
                  <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onBlur={() => saveEdit(taskObj.id)}
                  />
                  ) : (
                  taskObj.stage === 'completed' ? (
                        <del>{taskObj.task}</del>
                  ) : (
                        taskObj.task
                  )
                  )}
                  <div className="priority">
                  {editTaskId === taskObj.id && editingPriority ? (
                        <>
                        <button
                        className="priority-button low"
                        onClick={() => handlePriorityChange(taskObj.id, 'low')}
                        >
                        Low
                        </button>
                        <button
                        className="priority-button medium"
                        onClick={() => handlePriorityChange(taskObj.id, 'medium')}
                        >
                        Medium
                        </button>
                        <button
                        className="priority-button high"
                        onClick={() => handlePriorityChange(taskObj.id, 'high')}
                        >
                        High
                        </button>
                        </>
                  ) : (
                        <button
                        className={`priority-button ${taskObj.priority || 'low'}`}
                        onClick={() => {
                        setEditTaskId(taskObj.id);
                        setEditingPriority(true);
                        }}
                        >
                        {(taskObj.priority || 'low').charAt(0).toUpperCase() + (taskObj.priority || 'low').slice(1)}
                        </button>
                  )}
                  </div>
                  <div className="control">
                  {currentStage !== 'todo' && (
                        <div
                        className="left"
                        onClick={() => moveTask(taskObj.id, getPreviousStage(currentStage))}
                        >
                        &lt;
                        </div>
                  )}
                  {currentStage === 'todo' && <div className="left disabled">&lt;</div>}

                  {currentStage === 'completed' ? (
                        <div
                        className="edit disabled"
                        style={{ opacity: 0.5, pointerEvents: 'none' }}
                        >
                        &#x270E;
                        </div>
                  ) : (
                        editTaskId === taskObj.id ? (
                        <div className="edit save" onClick={() => saveEdit(taskObj.id)}>
                        ✓
                        </div>
                        ) : (
                        <div className="edit" onClick={() => handleEdit(taskObj.task, taskObj.id)}>
                        &#x270E;
                        </div>
                        )
                  )}

                  <div className="bin" onClick={() => deleteTask(taskObj.id)}>
                        🗑
                  </div>

                  {currentStage !== 'completed' && (
                        <div
                        className="right"
                        onClick={() => moveTask(taskObj.id, getNextStage(currentStage))}
                        >
                        &gt;
                        </div>
                  )}
                  {currentStage === 'completed' && <div className="right disabled">&gt;</div>}
                  </div>
                  </li>
            ))}
            </ul>
            ) : null}
      </div>
      );
};

export default TaskDesc;


////taskbar not working
// import React, { useState } from 'react';

// const TaskDesc = ({ tasks, moveTask, deleteTask, editTask, setPriority, currentStage }) => {
//       const [editTaskId, setEditTaskId] = useState(null);
//       const [editText, setEditText] = useState('');
//       const [editingPriority, setEditingPriority] = useState(false);

//       const handleEdit = (task, id) => {
//       setEditTaskId(id);
//       setEditText(task);
//       setEditingPriority(false);
//       };

//       const cancelEdit = () => {
//       setEditTaskId(null);
//       setEditText('');
//       setEditingPriority(false);
//       };

//       const saveEdit = (id) => {
//       if (editText.trim() !== '') {
//             editTask(id, editText);  // Pass task ID for editing
//             setEditTaskId(null);
//             setEditText('');
//       }
//       setEditingPriority(false);
//       };

//       const handlePriorityChange = (taskId, priority) => {
//       setPriority(taskId, priority); // Update priority for the specific task ID
//       setEditingPriority(false);
//       };

//       const getNextStage = (stage) => {
//       if (stage === 'todo') return 'inProgress';
//       if (stage === 'inProgress') return 'completed';
//       return 'completed';
//       };

//       const getPreviousStage = (stage) => {
//       if (stage === 'completed') return 'inProgress';
//       if (stage === 'inProgress') return 'todo';
//       return 'todo';
//       };

//       return (
//       <div className="desc">
//             {tasks.length > 0 ? (
//             <ul id="tasks">
//             {tasks.map((taskObj) => (
//                   <li
//                   key={taskObj.id}
//                   className={`task-item ${taskObj.priority === 'high' ? 'high-priority' : ''}`}
//                   >
//                   {editTaskId === taskObj.id ? (
//                   <input
//                         type="text"
//                         value={editText}
//                         onChange={(e) => setEditText(e.target.value)}
//                         onBlur={() => saveEdit(taskObj.id)}
//                   />
//                   ) : (
//                   taskObj.stage === 'completed' ? (
//                         <del>{taskObj.task}</del>
//                   ) : (
//                         taskObj.task
//                   )
//                   )}
//                   <div className="priority">
//                   {editTaskId === taskObj.id && editingPriority ? (
//                         <>
//                         <button
//                         className="priority-button low"
//                         onClick={() => handlePriorityChange(taskObj.id, 'low')}
//                         >
//                         Low
//                         </button>
//                         <button
//                         className="priority-button medium"
//                         onClick={() => handlePriorityChange(taskObj.id, 'medium')}
//                         >
//                         Medium
//                         </button>
//                         <button
//                         className="priority-button high"
//                         onClick={() => handlePriorityChange(taskObj.id, 'high')}
//                         >
//                         High
//                         </button>
//                         </>
//                   ) : (
//                         <button
//                         className={`priority-button ${taskObj.priority || 'low'}`}
//                         onClick={() => {
//                         setEditTaskId(taskObj.id);
//                         setEditingPriority(true);
//                         }}
//                         >
//                         {(taskObj.priority || 'low').charAt(0).toUpperCase() + (taskObj.priority || 'low').slice(1)}
//                         </button>
//                   )}
//                   </div>
//                   <div className="control">
//                   {currentStage !== 'todo' && (
//                         <div
//                         className="left"
//                         onClick={() => moveTask(taskObj.id, getPreviousStage(currentStage))}
//                         >
//                         &lt;
//                         </div>
//                   )}
//                   {currentStage === 'todo' && <div className="left disabled">&lt;</div>}

//                   {currentStage === 'completed' ? (
//                         <div
//                         className="edit disabled"
//                         style={{ opacity: 0.5, pointerEvents: 'none' }}
//                         >
//                         &#x270E;
//                         </div>
//                   ) : (
//                         editTaskId === taskObj.id ? (
//                         <div className="edit save" onClick={() => saveEdit(taskObj.id)}>
//                         ✓
//                         </div>
//                         ) : (
//                         <div className="edit" onClick={() => handleEdit(taskObj.task, taskObj.id)}>
//                         &#x270E;
//                         </div>
//                         )
//                   )}

//                   <div className="bin" onClick={() => deleteTask(taskObj.id)}>
//                         🗑
//                   </div>

//                   {currentStage !== 'completed' && (
//                         <div
//                         className="right"
//                         onClick={() => moveTask(taskObj.id, getNextStage(currentStage))}
//                         >
//                         &gt;
//                         </div>
//                   )}
//                   {currentStage === 'completed' && <div className="right disabled">&gt;</div>}
//                   </div>
//                   </li>
//             ))}
//             </ul>
//             ) : null}
//       </div>
//       );
// };

// export default TaskDesc;


// import React, { useState } from 'react';

// const TaskDesc = ({ tasks = [], moveTask, deleteTask, editTask, setPriority, currentStage }) => {
//       const [editIndex, setEditIndex] = useState(-1);
//       const [editText, setEditText] = useState('');
//       const [editingPriority, setEditingPriority] = useState(true);

//       const handleEdit = (task, index) => {
//       if (task && index !== undefined) {
//             setEditIndex(index);
//             setEditText(task.task || ''); // Ensure editText is not null
//       }
//       };

//       const cancelEdit = () => {
//       setEditIndex(-1);
//       setEditText('');
//       };

//       const saveEdit = (index) => {
//       if (editText.trim() !== '') {
//             editTask(index, editText);
//             setEditIndex(-1);
//             setEditText('');
//       }
//       };

//       const getNextStage = (stage) => {
//       if (stage === 'todo') return 'inProgress';
//       if (stage === 'inProgress') return 'completed';
//       return 'completed';
//       };

//       const getPreviousStage = (stage) => {
//       if (stage === 'completed') return 'inProgress';
//       if (stage === 'inProgress') return 'todo';
//       return 'todo';
//       };

//       return (
//       <div className="desc">
//             {Array.isArray(tasks) && tasks.length > 0 ? (
//             <ul id="tasks">
//             {tasks.map((taskObj) => (
//                   taskObj ? (
//                   <li key={taskObj.index} className={`task-item ${taskObj.priority === 'high' ? 'high-priority' : ''}`}>
//                   {currentStage === 'completed' ? (
//                         <del>{taskObj.task}</del>
//                   ) : (
//                         <>
//                         {editIndex === taskObj.index ? (
//                         <input
//                               type="text"
//                               value={editText}
//                               onChange={(e) => setEditText(e.target.value)}
//                         />
//                         ) : (
//                         taskObj.task || 'No task' // Ensure there's a fallback if taskObj.task is null
//                         )}
//                         </>
//                   )}
//                   <div className="priority">
//                         {editIndex === taskObj.index && editingPriority ? (
//                         <>
//                         <button
//                               className="priority-button low"
//                               onClick={() => {
//                               setPriority(taskObj.index, 'low');
//                               setEditingPriority(false);
//                               }}
//                         >
//                               Low
//                         </button>
//                         <button
//                               className="priority-button medium"
//                               onClick={() => {
//                               setPriority(taskObj.index, 'medium');
//                               setEditingPriority(false);
//                               }}
//                         >
//                               Medium
//                         </button>
//                         <button
//                               className="priority-button high"
//                               onClick={() => {
//                               setPriority(taskObj.index, 'high');
//                               setEditingPriority(false);
//                               }}
//                         >
//                               High
//                         </button>
//                         </>
//                         ) : (
//                         <button
//                         className={`priority-button ${taskObj.priority || 'low'}`}
//                         onClick={() => {
//                               setEditIndex(taskObj.index);
//                               setEditingPriority(true);
//                         }}
//                         >
//                         {taskObj.priority ? taskObj.priority.charAt(0).toUpperCase() + taskObj.priority.slice(1) : 'Low'}
//                         </button>
//                         )}
//                   </div>
//                   <div className="control">
//                         {currentStage !== 'todo' && (
//                         <div
//                         className="left"
//                         onClick={() => moveTask(taskObj.index, getPreviousStage(currentStage))}
//                         >
//                         &lt;
//                         </div>
//                         )}
//                         {currentStage === 'todo' && <div className="left disabled">&lt;</div>}

//                         {currentStage === 'completed' ? (
//                         <div
//                         className="edit disabled"
//                         style={{ opacity: 0.5, pointerEvents: 'none' }}
//                         >
//                         &#x270E;
//                         </div>
//                         ) : (
//                         editIndex === taskObj.index ? (
//                         <div className="edit save" onClick={() => saveEdit(taskObj.index)}>
//                               &#x2714;
//                         </div>
//                         ) : (
//                         <div className="edit" onClick={() => handleEdit(taskObj, taskObj.index)}>
//                               &#x270E;
//                         </div>
//                         )
//                         )}

//                         <div className="delete" onClick={() => deleteTask(taskObj.index)}>
//                         🗑
//                         </div>

//                         {currentStage !== 'completed' && (
//                         <div
//                         className="right"
//                         onClick={() => moveTask(taskObj.index, getNextStage(currentStage))}
//                         >
//                         &gt;
//                         </div>
//                         )}
//                         {currentStage === 'completed' && <div className="right disabled">&gt;</div>}
//                   </div>
//                   </li>
//                   ) : null
//             ))}
//             </ul>
//             ) : (
//             <p></p> // Fallback message if tasks array is empty
//             )}
//       </div>
//       );
// };

// export default TaskDesc;

// import React, { useState } from 'react';

// const TaskDesc = ({ tasks, moveTask, deleteTask, editTask, setPriority, currentStage }) => {
//       const [editTaskId, setEditTaskId] = useState(null);
//       const [editText, setEditText] = useState('');
//       const [editingPriority, setEditingPriority] = useState(true);

//       const handleEdit = (task, id) => {
//       setEditTaskId(id);
//       setEditText(task);
//       setEditingPriority(true);
//       };

//       const cancelEdit = () => {
//       setEditTaskId(null);
//       setEditText('');
//       setEditingPriority(false);
//       };

//       const saveEdit = (id) => {
//       if (editText.trim() !== '') {
//             editTask(id, editText);  // Pass task ID for editing
//             setEditTaskId(null);
//             setEditText('');
//       }
//       setEditingPriority(false);
//       };

//       const handlePriorityChange = (taskId, priority) => {
//       setPriority(taskId, priority); // Update priority for the specific task ID
//       setEditingPriority(false);
//       };

//       const getNextStage = (stage) => {
//       if (stage === 'todo') return 'inProgress';
//       if (stage === 'inProgress') return 'completed';
//       return 'completed';
//       };

//       const getPreviousStage = (stage) => {
//       if (stage === 'completed') return 'inProgress';
//       if (stage === 'inProgress') return 'todo';
//       return 'todo';
//       };

//       return (
//       <div className="desc">
//             {tasks.length > 0 ? (
//             <ul id="tasks">
//             {tasks.map((taskObj) => (
//                   <li
//                   key={taskObj.id}
//                   className={`task-item ${taskObj.priority === 'high' ? 'high-priority' : ''}`}
//                   >
//                   {editTaskId === taskObj.id ? (
//                   <input
//                         type="text"
//                         value={editText}
//                         onChange={(e) => setEditText(e.target.value)}
//                         onBlur={() => saveEdit(taskObj.id)}
//                   />
//                   ) : (
//                   taskObj.stage === 'completed' ? (
//                         <del>{taskObj.task}</del>
//                   ) : (
//                         taskObj.task
//                   )
//                   )}
//                   <div className="priority">
//                   {editTaskId === taskObj.id && editingPriority ? (
//                         <>
//                         <button
//                         className="priority-button low"
//                         onClick={() => handlePriorityChange(taskObj.id, 'low')}
//                         >
//                         Low
//                         </button>
//                         <button
//                         className="priority-button medium"
//                         onClick={() => handlePriorityChange(taskObj.id, 'medium')}
//                         >
//                         Medium
//                         </button>
//                         <button
//                         className="priority-button high"
//                         onClick={() => handlePriorityChange(taskObj.id, 'high')}
//                         >
//                         High
//                         </button>
//                         </>
//                   ) : (
//                         <button
//                         className={`priority-button ${taskObj.priority || 'low'}`}
//                         onClick={() => {
//                         setEditTaskId(taskObj.id);
//                         setEditingPriority(true);
//                         }}
//                         >
//                         {(taskObj.priority || 'low').charAt(0).toUpperCase() + (taskObj.priority || 'low').slice(1)}
//                         </button>
//                   )}
//                   </div>
//                   <div className="control">
//                   {currentStage !== 'todo' && (
//                         <div
//                         className="left"
//                         onClick={() => moveTask(taskObj.id, getPreviousStage(currentStage))}
//                         >
//                         &lt;
//                         </div>
//                   )}
//                   {currentStage === 'todo' && <div className="left disabled">&lt;</div>}

//                   {currentStage === 'completed' ? (
//                         <div
//                         className="edit disabled"
//                         style={{ opacity: 0.5, pointerEvents: 'none' }}
//                         >
//                         &#x270E;
//                         </div>
//                   ) : (
//                         editTaskId === taskObj.id ? (
//                         <div className="edit save" onClick={() => saveEdit(taskObj.id)}>
//                         ✓
//                         </div>
//                         ) : (
//                         <div className="edit" onClick={() => handleEdit(taskObj.task, taskObj.id)}>
//                         &#x270E;
//                         </div>
//                         )
//                   )}

//                   <div className="bin" onClick={() => deleteTask(taskObj.id)}>
//                         🗑
//                   </div>

//                   {currentStage !== 'completed' && (
//                         <div
//                         className="right"
//                         onClick={() => moveTask(taskObj.id, getNextStage(currentStage))}
//                         >
//                         &gt;
//                         </div>
//                   )}
//                   {currentStage === 'completed' && <div className="right disabled">&gt;</div>}
//                   </div>
//                   </li>
//             ))}
//             </ul>
//             ) : null}
//       </div>
//       );
// };

// export default TaskDesc;



////////before css
// import React, { useState } from 'react';

// const TaskDesc = ({ tasks, moveTask, deleteTask, editTask, setPriority, currentStage }) => {
//       const [editTaskId, setEditTaskId] = useState(null);
//       const [editText, setEditText] = useState('');
//       const [editingPriority, setEditingPriority] = useState(false);

//       const handleEdit = (task, id) => {
//       setEditTaskId(id);
//       setEditText(task);
//       setEditingPriority(false);
//       };

//       const cancelEdit = () => {
//       setEditTaskId(null);
//       setEditText('');
//       setEditingPriority(null);
//       };

//       const saveEdit = (id) => {
//       if (editText.trim() !== '') {
//             editTask(id, editText);  // Pass task ID for editing
//             setEditTaskId(null);
//             setEditText('');
//       }
//       setEditingPriority(null);
//       };

//       const handlePriorityChange = (taskId, priority) => {
//       setPriority(taskId, priority); // Update priority for the specific task ID
//       setEditingPriority(null);
//       };

//       const getNextStage = (stage) => {
//       if (stage === 'todo') return 'inProgress';
//       if (stage === 'inProgress') return 'completed';
//       return 'completed';
//       };

//       const getPreviousStage = (stage) => {
//       if (stage === 'completed') return 'inProgress';
//       if (stage === 'inProgress') return 'todo';
//       return 'todo';
//       };

//       const sortedTasks = tasks.sort((a, b) => {
//       const priorityOrder = { low: 3, medium: 2, high: 1 };
//       return priorityOrder[a.priority || 'low'] - priorityOrder[b.priority || 'low'];
//       });

//       return (
//       <div className="desc">
//             {sortedTasks.length > 0 ? (
//             <ul id="tasks">
//             {sortedTasks.map((taskObj) => (
//                   <li key={taskObj.id} className="task-item">
//                   {editTaskId === taskObj.id ? (
//                   <input
//                         type="text"
//                         value={editText}
//                         onChange={(e) => setEditText(e.target.value)}
//                         onBlur={() => saveEdit(taskObj.id)}
//                   />
//                   ) : (
//                   taskObj.task
//                   )}
//                   <div className="priority">
//                   {editTaskId === taskObj.id && editingPriority ? (
//                         <>
//                         <button
//                         className="priority-button low"
//                         onClick={() => handlePriorityChange(taskObj.id, 'low')}
//                         >
//                         Low
//                         </button>
//                         <button
//                         className="priority-button medium"
//                         onClick={() => handlePriorityChange(taskObj.id, 'medium')}
//                         >
//                         Medium
//                         </button>
//                         <button
//                         className="priority-button high"
//                         onClick={() => handlePriorityChange(taskObj.id, 'high')}
//                         >
//                         High
//                         </button>
//                         </>
//                   ) : (
//                         <button
//                         className={`priority-button ${taskObj.priority || 'low'}`}
//                         onClick={() => {
//                         setEditTaskId(taskObj.id);
//                         setEditingPriority(true);
//                         }}
//                         >
//                         {(taskObj.priority || 'low').charAt(0).toUpperCase() + (taskObj.priority || 'low').slice(1)}
//                         </button>
//                   )}
//                   </div>
//                   <div className="control">
//                   {currentStage !== 'todo' && (
//                         <div
//                         className="left"
//                         onClick={() => moveTask(taskObj.id, getPreviousStage(currentStage))}
//                         >
//                         &lt;
//                         </div>
//                   )}
//                   {currentStage === 'todo' && <div className="left disabled">&lt;</div>}

//                   {currentStage === 'completed' ? (
//                         <div
//                         className="edit disabled"
//                         style={{ opacity: 0.5, pointerEvents: 'none' }}
//                         >
//                         &#x270E;
//                         </div>
//                   ) : (
//                         editTaskId === taskObj.id ? (
//                         <div className="edit save" onClick={() => saveEdit(taskObj.id)}>
//                         ✓
//                         </div>
//                         ) : (
//                         <div className="edit" onClick={() => handleEdit(taskObj.task, taskObj.id)}>
//                         &#x270E;
//                         </div>
//                         )
//                   )}

//                   <div className="bin" onClick={() => deleteTask(taskObj.id)}>
//                         🗑
//                   </div>

//                   {currentStage !== 'completed' && (
//                         <div
//                         className="right"
//                         onClick={() => moveTask(taskObj.id, getNextStage(currentStage))}
//                         >
//                         &gt;
//                         </div>
//                   )}
//                   {currentStage === 'completed' && <div className="right disabled">&gt;</div>}
//                   </div>
//                   </li>
//             ))}
//             </ul>
//             ) : null}
//       </div>
//       );
// };

// export default TaskDesc;

////////////before priority
// import React from 'react';

//       const TaskDesc = ({ tasks, moveTask, deleteTask, currentStage }) => {
//       const getNextStage = (stage) => {
//       if (stage === 'todo') return 'inProgress';
//       if (stage === 'inProgress') return 'completed';
//       return 'completed';
//       };

//       const getPreviousStage = (stage) => {
//       if (stage === 'completed') return 'inProgress';
//       if (stage === 'inProgress') return 'todo';
//       return 'todo';
//       };

//       return (
//       <div className="desc">
//             {tasks.length > 0 ? (
//             <ul id="tasks">
//             {tasks.map((taskObj, index) => (
//                   <li key={index} className="task-item">
//                   {taskObj.task}
//                   <div className="control">
//                   <div
//                         className={`left ${currentStage === 'todo' ? 'disabled' : ''}`}
//                         onClick={() => currentStage !== 'todo' && moveTask(taskObj.task, getPreviousStage(currentStage))}
//                   >
//                         &lt;
//                   </div>
//                   <div className="edit">&#x270E;</div>
//                   <div className="bin" onClick={() => deleteTask(taskObj.task)}>
//                         🗑
//                   </div>
//                   <div
//                         className={`right ${currentStage === 'completed' ? 'disabled' : ''}`}
//                         onClick={() => currentStage !== 'completed' && moveTask(taskObj.task, getNextStage(currentStage))}
//                   >
//                         &gt;
//                   </div>
//                   </div>
//                   </li>
//             ))}
//             </ul>
//             ) : null}
//       </div>
//       );
// };

// export default TaskDesc;
