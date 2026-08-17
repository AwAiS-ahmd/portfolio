import React, { useState, useEffect } from 'react';
import Portfolio from './components/Portfolio';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Note: This minimal routing handles direct URL loads.
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  return <Portfolio />;
}

export default App;
