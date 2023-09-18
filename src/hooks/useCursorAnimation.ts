'use client'

/**
 * Solely for the purpose of making custom Curor, I luv this shit
 */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const useCursorAnimation = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      gsap.to(cursorRef.current, {
        x: mouseX,
        y: mouseY,
        opacity: 1,
        delay: 0,
      });
    });

    const hideCursor = () => {
      gsap.to(cursorRef.current, { opacity: 0 });
    };

    const showCursor = () => {
      gsap.to(cursorRef.current, { opacity: 1 });
    };

    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('mousedown', hideCursor);
    document.addEventListener('mouseup', showCursor);

    return () => {
      document.removeEventListener('mousemove', showCursor);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('mousedown', hideCursor);
      document.removeEventListener('mouseup', showCursor);
    };
  }, []);

  return cursorRef;
};

export default useCursorAnimation;
