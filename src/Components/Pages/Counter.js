import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({targetNumber, className}) => {

    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
      triggerOnce: true, // Trigger animation only once
      threshold: 0.5, // Start counting when 50% of the component is visible
    });
  
    useEffect(() => {
      if (inView) {
        let start = 0;
        const duration = 2000; // 2 seconds for the animation
        const increment = targetNumber / (duration / 50); // Smooth increments
        const timer = setInterval(() => {
          start += increment;
          if (start >= targetNumber) {
            setCount(targetNumber);
            clearInterval(timer);
          } else {
            setCount(Math.ceil(start));
          }
        }, 50); // Updates every 50ms
      }
    }, [inView, targetNumber]);

  return (
    <div ref={ref} className={`text-3xl font-bold ${className}`}>
      {count}+
    </div>
  );
}

export default Counter