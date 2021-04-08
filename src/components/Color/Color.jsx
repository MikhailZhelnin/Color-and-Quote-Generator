import React, { useState, useEffect } from 'react';

import './Color.css';

const colorUrl2 = 'https://jonasjacek.github.io/colors/data.json';

const Color = () => {
  const [color, setColor] = useState('');

  const getColor = () => {
    fetch(colorUrl2)
      .then((resp) => resp.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomColor = data[randomIndex].hexString;
        setColor(randomColor);
      });
  };

  useEffect(() => {
    getColor();
  }, []);

  return (
    <div className="color" style={{ background: color }}>
      <div className="color__wrapper">
        <span className="color__text">Your Color: {color}</span>
        <button className="color__btn" onClick={getColor}>
          Get Color
        </button>
      </div>
    </div>
  );
};

export default Color;
