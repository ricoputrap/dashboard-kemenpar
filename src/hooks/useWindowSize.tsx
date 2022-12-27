import React, { useEffect, useState } from 'react'

interface IWindowSize {
  width: number;
  height: number;
}

/**
 * A custom hook to compute the width and height of the current window
 * source: https://usehooks.com/useWindowSize/
 * @returns {IWindowSize} width & height of current window
 */
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: 0,
    height: 0
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    // add event listener
    window.addEventListener("resize", handleResize);

    // call handler in the initial render (on componentDidMount())so that
    // the state gets updated with the initial window size
    handleResize();

    // remove event listener on componentWillUnmount()
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize