
import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(from);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = from;
      const end = to;
      const totalDuration = duration * 1000;
      const incrementTime = 16;
      const steps = Math.ceil(totalDuration / incrementTime);
      const stepValue = (end - start) / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        start += stepValue;
        
        if (currentStep >= steps) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

export default AnimatedCounter;
