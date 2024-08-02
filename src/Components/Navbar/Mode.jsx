import React from 'react';
import { useMode } from './ModeContext';

const Mode = () => {
      const { mode, toggleMode } = useMode();

      const handleToggleMode = () => {
      toggleMode();
      document.body.classList.toggle('dark-mode', mode === 'dark');
      };

      return (
      <div className="mode">
            <h2>Mode</h2>
            <button onClick={handleToggleMode} disabled={mode === 'light'}>
            Dark Mode
            </button>
            <button onClick={handleToggleMode} disabled={mode === 'dark'}>
            Light Mode
            </button>
      </div>
      );
};

export default Mode;
/////only mode
// import React from 'react';
// import { useMode } from './ModeContext';

// const Mode = () => {
//       const { mode, toggleMode } = useMode();

//       return (
//       <div className="mode">
//             <h2>Mode</h2>
//             <button onClick={toggleMode} disabled={mode === 'light'}>
//             Light Mode
//             </button>
//             <button onClick={toggleMode} disabled={mode === 'dark'}>
//             Dark Mode
//             </button>
//       </div>
//       );
// };

// export default Mode;




////////befrore router
// import React from 'react';
// import { useMode } from './ModeContext';

// const Mode = () => {
//       const { mode, setMode } = useMode();

//       return (
//       <div className="mode">
//             <h2>Mode</h2>
//             <button onClick={() => setMode('light')} disabled={mode === 'light'}>
//             Light Mode
//             </button>
//             <button onClick={() => setMode('dark')} disabled={mode === 'dark'}>
//             Dark Mode
//             </button>
//       </div>
//       );
// };

// export default Mode;