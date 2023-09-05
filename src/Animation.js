import React, { useState, useEffect } from 'react';
import './Animation.css'; 

const Animation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      const element = document.querySelector('.animated-element');
      if (element) {
        const elementRect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (elementRect.left >= 0 && elementRect.right <= window.innerWidth &&
            elementRect.top >= 0 && elementRect.bottom <= windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`animated-element ${isVisible ? 'slide-in' : ''}`}>
      Content to animate
    </div>
  );
};

export default Animation;
