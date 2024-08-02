import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMode } from './ModeContext';


const Navbar = ({ searchTasks, restoreOriginalTasks }) => {
      const [searchTerm, setSearchTerm] = useState('');
      const { mode } = useMode();
      const location = useLocation();

      useEffect(() => {
      // Whenever the search term changes, filter tasks
      searchTasks(searchTerm);
      }, [searchTerm, searchTasks]);

      const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
      };

      const handleSearchClick = () => {
      searchTasks(searchTerm); // Trigger search with current term
      };

      const handleClearSearch = () => {
      setSearchTerm('');
      restoreOriginalTasks(); // Restore the original tasks
      };

      return (
      <nav className={`navbar navbar-expand-lg ${mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">Personal Task Manager</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/deleted-tasks' ? 'active' : ''}`} to="/deleted-tasks">Deleted Tasks</Link>
                  </li>
                  <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/mode' ? 'active' : ''}`} to="/mode">Mode</Link>
                  </li>
            </ul>
            <form className="d-flex" role="search">
                  <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  // Type "search" provides a clear button in some browsers
                  // The button can be clicked to clear the input
                  />
                  <button className="btn btn-outline-success" type="button" onClick={handleSearchClick}>Search</button>
            </form>
            </div>
            </div>
      </nav>
      );
};

export default Navbar;


////////search with type
//////////99%
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useMode } from './ModeContext';

// const Navbar = ({ searchTasks, restoreOriginalTasks }) => {
//       const [searchTerm, setSearchTerm] = useState('');
//       const { mode } = useMode();

//       useEffect(() => {
//       // Whenever the search term changes, filter tasks
//       searchTasks(searchTerm);
//       }, [searchTerm, searchTasks]);

//       const handleSearchChange = (event) => {
//       setSearchTerm(event.target.value);
//       };

//       const handleSearchClick = () => {
//       searchTasks(searchTerm); // Trigger search with current term
//       };

//       const handleClearSearch = () => {
//       setSearchTerm('');
//       restoreOriginalTasks(); // Restore the original tasks
//       };

//       return (
//       <nav className={`navbar navbar-expand-lg ${mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
//             <div className="container-fluid">
//             <Link className="navbar-brand" to="/">Personal Task Manager</Link>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon" />
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                   <li className="nav-item">
//                   <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//                   </li>
//                   <li className="nav-item">
//                   <Link className="nav-link" to="/about">About</Link>
//                   </li>
//                   <li className="nav-item">
//                   <Link className="nav-link" to="/deleted-tasks">Deleted Tasks</Link>
//                   </li>
//                   <li className="nav-item">
//                   <Link className="nav-link" to="/mode">Mode</Link>
//                   </li>
//             </ul>
//             <form className="d-flex" role="search">
//                   <input
//                   className="form-control me-2"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                   value={searchTerm}
//                   onChange={handleSearchChange}
//                   // Type "search" provides a clear button in some browsers
//                   // The button can be clicked to clear the input
//                   />
//                   <button className="btn btn-outline-success" type="button" onClick={handleSearchClick}>Search</button>
//             </form>
//             </div>
//             </div>
//       </nav>
//       );
// };

// export default Navbar;


////////almost perfect
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMode } from './ModeContext';

// const Navbar = ({ searchTasks, clearSearch }) => {
//       const [searchTerm, setSearchTerm] = useState('');
//       const { mode } = useMode();

//       const handleSearchChange = (event) => {
//       setSearchTerm(event.target.value);
//       };

//       const handleSearchClick = () => {
//       searchTasks(searchTerm); // Trigger search with current term
//       };

//       const handleClearSearch = () => {
//       setSearchTerm('');
//       clearSearch(); // Clear search results
//       };

//       return (
//       <nav className={`navbar navbar-expand-lg ${mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
//             <div className="container-fluid">
//             <Link className="navbar-brand" to="/">Personal Task Manager</Link>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon" />
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                   <li className="nav-item">
//                   <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//                   </li>
//                   <li className="nav-item">
//                   <Link className="nav-link" to="/about">About</Link>
//                   </li>
//                   <li className="nav-item">
//                   <Link className="nav-link" to="/deleted-tasks">Deleted Tasks</Link>
//                   </li>
//                   <li className="nav-item">
//                   <Link className="nav-link" to="/mode">Mode</Link>
//                   </li>
//             </ul>
//             <form className="d-flex" role="search">
//                   <input
//                   className="form-control me-2"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                   value={searchTerm}
//                   onChange={handleSearchChange}
//                   // Type "search" provides a clear button in some browsers
//                   // The button can be clicked to clear the input
//                   />
//                   <button className="btn btn-outline-success" type="button" onClick={handleSearchClick}>Search</button>
//             </form>
//             </div>
//             </div>
//       </nav>
//       );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMode } from './ModeContext';

// const Navbar = ({ searchTasks, clearSearch }) => {
//       const [searchTerm, setSearchTerm] = useState('');
//       const { mode } = useMode();

//       const handleSearchChange = (event) => {
//       setSearchTerm(event.target.value);
//       searchTasks(event.target.value);
//       };

//       const handleClearSearch = () => {
//       setSearchTerm('');
//       clearSearch(); // Call the clear function passed as prop
//       };

//       return (
//       <nav className={`navbar navbar-expand-lg ${mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
//             <div className="container-fluid">
//             <Link className="navbar-brand" to="/">Personal Task Manager</Link>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon" />
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                   <li className="nav-item">
//                   <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//                   </li>
//                   <li className="nav-item">
//                   <Link className="nav-link" to="/about">About</Link>
//                   </li>
//                   <li className="nav-item">
//                   <Link className="nav-link" to="/deleted-tasks">Deleted Tasks</Link>
//                   </li>
//                   <li className="nav-item">
//                   <Link className="nav-link" to="/mode">Mode</Link>
//                   </li>
//             </ul>
//             <form className="d-flex" role="search">
//                   <input
//                   className="form-control me-2"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                   value={searchTerm}
//                   //onChange={handleSearchChange}
//                   // Type "search" provides a clear button in some browsers
//                   // The button can be clicked to clear the input
//                   />
//                   <button className="btn btn-outline-success" type="button" onClick={handleSearchChange}>Search</button>
//             </form>
//             </div>
//             </div>
//       </nav>
//       );
// };

// export default Navbar;


////with clear button
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMode } from './ModeContext';

// const Navbar = ({ searchTasks, clearSearch }) => {
//       const [searchTerm, setSearchTerm] = useState('');
//       const { mode } = useMode();

//       const handleSearchChange = (event) => {
//       setSearchTerm(event.target.value);
//       };

//       const handleSearchClick = () => {
//       searchTasks(searchTerm); // Call the search function passed as prop
//       };

//       const handleClearSearch = () => {
//       setSearchTerm('');
//       clearSearch(); // Call the clear function passed as prop
//       };

//       return (
//       <nav className={`navbar navbar-expand-lg ${mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
//             <div className="container-fluid">
//             <Link className="navbar-brand" to="/">Personal Task Manager</Link>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon" />
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                   <li className="nav-item">
//                   <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//                   </li>
//                   <li className="nav-item">
//                   <Link className="nav-link" to="/about">About</Link>
//                   </li>
//                   <li className="nav-item">
//                   <Link className="nav-link" to="/deleted-tasks">Deleted Tasks</Link>
//                   </li>
//                   <li className="nav-item">
//                   <Link className="nav-link" to="/mode">Mode</Link>
//                   </li>
//             </ul>
//             <form className="d-flex" role="search">
//                   <input
//                   className="form-control me-2"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                   value={searchTerm}
//                   onChange={handleSearchChange}
//                   />
//                   <button className="btn btn-outline-success" type="button" onClick={handleSearchClick}>Search</button>
//                   <button className="btn btn-outline-secondary ms-2" type="button" onClick={handleClearSearch}>Clear</button>
//             </form>
//             </div>
//             </div>
//       </nav>
//       );
// };

// export default Navbar;


//////only searchbar not working
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//       return (
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//             <div className="container-fluid">
//             <Link className="navbar-brand" to="/">
//             Personal Task Manager
//             </Link>
//             <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             >
//             <span className="navbar-toggler-icon" />
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                   <li className="nav-item">
//                   <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//                   </li>
//                   <li className="nav-item">
//                   <Link className="nav-link" to="/about">About</Link>
//                   </li>
//                   <li className="nav-item">
//                   <Link className="nav-link" to="/deleted-tasks">Deleted Tasks</Link>
//                   </li>
//                   <li className="nav-item">
//                   <Link className="nav-link" to="/mode">Mode</Link>
//                   </li>
//             </ul>
//             <form className="d-flex" role="search">
//                   <input
//                   className="form-control me-2"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                   />
//                   <button className="btn btn-outline-success" type="submit">
//                   Search
//                   </button>
//             </form>
//             </div>
//             </div>
//       </nav>
//       );
// };

// export default Navbar;




/////////before router
// import React , {useState} from 'react';
// import { Link } from 'react-router-dom';
// import { useMode } from './ModeContext';
// import Mode from './Mode';
// import DeletedTasks from './DeletedTasks';
// import About from './About';

// const Navbar = () => {
//       return (
//             <nav className="navbar navbar-expand-lg bg-body-tertiary">
//             <div className="container-fluid">
//                   <a className="navbar-brand" href="#">
//                   Personal Task Manager
//                   </a>
//                   <button
//                   className="navbar-toggler"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#navbarSupportedContent"
//                   aria-controls="navbarSupportedContent"
//                   aria-expanded="false"
//                   aria-label="Toggle navigation"
//                   >
//                   <span className="navbar-toggler-icon" />
//                   </button>
//                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                         <a className="nav-link active" aria-current="page" href="#">
//                         About
//                         </a>
//                         </li>
//                         <li className="nav-item">
//                         <a className="nav-link active" aria-current="page" href="#">
//                         Deleted Tasks
//                         </a>
//                         </li>
//                         <li className="nav-item">
//                         <a className="nav-link" href="#">
//                         Mode
//                         </a>
//                         </li>
//                   </ul>
//                   <form className="d-flex" role="search">
//                         <input
//                         className="form-control me-2"
//                         type="search"
//                         placeholder="Search"
//                         aria-label="Search"
//                         />
//                         <button className="btn btn-outline-success" type="submit">
//                         Search
//                         </button>
//                   </form>
//                   </div>
//                   </div>
//             </nav>
//       );
// };

// export default Navbar;
