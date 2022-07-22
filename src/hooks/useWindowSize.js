import { useEffect, useState } from 'react';

function getWindowSize() {
  const width = window.outerWidth;
  const height = window.outerHeight;

  return {
    width,
    height,
  };
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
