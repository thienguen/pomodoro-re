import { useState, useEffect } from 'react';
import { useMediaWidth } from './useMediaWidth';


/**
 * LMAFO, a hook within a hook baby
 */
const useTextSize = () => {
  // Initialize with default values
  const [screenSize, setScreenSize] = useState({
    width : 800,   // Default width
    height: 600,   // Default height
  });

  // Get the text size based on the screen size
  const isMobileView = useMediaWidth('500px', true);

  const getTextSize = () => {
    const aspectRatio = screenSize.width / screenSize.height;
    const baseSize    = isMobileView ? 0.8 : 1.3;  // This is the base size. 
    const sensitivity = 0.2;                       // This determines how sensitive the size is to changes in aspect ratio. 
  
    return baseSize + (aspectRatio * sensitivity);
  };
  useEffect(() => {
    // Function to update screen size
    const updateScreenSize = () => {
      setScreenSize({
        width : window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Update the state with actual window dimensions once the hook is used
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return getTextSize;
};

export default useTextSize;
