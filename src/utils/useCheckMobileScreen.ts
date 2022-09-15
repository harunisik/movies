import { useEffect, useState } from 'react';

const useCheckMobileScreen = (width: number) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return innerWidth <= width;
};

export default useCheckMobileScreen;
