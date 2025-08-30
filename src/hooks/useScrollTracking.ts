'use client';

import { useEffect, useState } from 'react';
import { trackScroll } from '@/lib/analytics';

export function useScrollTracking() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset;
      
      const totalDocScrollLength = docHeight - winHeight;
      const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100);
      
      setScrollPercentage(scrollPostion);
      trackScroll(scrollPostion);
    };

    const throttledHandleScroll = throttle(handleScroll, 250);
    
    window.addEventListener('scroll', throttledHandleScroll);
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  return scrollPercentage;
}

function throttle(func: (...args: unknown[]) => void, limit: number) {
  let inThrottle: boolean;
  return function(this: unknown, ...args: unknown[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}