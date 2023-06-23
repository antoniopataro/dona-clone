import { useEffect, useLayoutEffect, useState } from 'react';

interface Props {
  width: number
  height: number
}

function useWindowSize(): Props {
  const [windowSize, setWindowSize] = useState<Props>({
    width: 0,
    height: 0,
  });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return windowSize;
}

export default useWindowSize;
