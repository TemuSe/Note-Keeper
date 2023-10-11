import React, { useState, useEffect } from 'react';

function RotateText() {
  const texts = ["Hello", "Welcome to", "Note keeper", "Keep your note safe"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        (prevIndex + 1) % texts.length
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1 className='rotateText'>{texts[currentTextIndex]}</h1>
    </div>
  );
}

export default RotateText;
