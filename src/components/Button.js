import React from 'react';
import { useState, useEffect } from 'react';

const Button = ({ children}) => {

  const [count, setCount] = useState(0)
  const [keyCount, setKeyCount] = useState(0)

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    return () => {
        document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  useEffect(() => {
    /* console.log('me he montado!') */
  }, []);

  useEffect(() => {
    /* console.log('ha cambiado count!') */
  }, [count]);

  useEffect(() => {
    /* console.log('me ejecuto siempre que cambie algo del componente!') */
  });

  const clickHandler = () => {
    setCount(count + 1);
  };

  const keyDownHandler = () => {
    setKeyCount(keyCount + 1);
  };

  return (
    <div>
      <button onClick={clickHandler}>Click!</button>
      <p>{(count)}</p>
      <p>{(keyCount)}</p>
    </div>
  );
};

export default Button;