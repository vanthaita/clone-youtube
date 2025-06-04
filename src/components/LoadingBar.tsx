'use client'

import { useEffect, useState } from 'react';

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setShow(true);
      setIsAnimating(true);
      setProgress(0);
      
      setTimeout(() => setProgress(20), 100);
      
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 80) {
            clearInterval(timer);
            return prev;
          }
          return prev + Math.random() * 10;
        });
      }, 500);
    };

    const handleComplete = () => {
      setIsAnimating(false);
      setProgress(100);
      setTimeout(() => {
        setShow(false);
      }, 300);
    };

    handleStart();
    const timeout = setTimeout(handleComplete, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-0.5 z-50 bg-gray-200 dark:bg-gray-700 overflow-hidden">
      <div 
        className={`h-full bg-red-600 transition-all duration-300 ${isAnimating ? 'ease-out' : 'ease-in'}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default LoadingBar;