import React from 'react';
import './Button.css';

interface Props {
  onClick: () => void;
}

const Button: React.FC<Props> = React.memo(({ onClick }) => {
  return (
    <div className="Button">
      <button className='joke-btn' onClick={onClick}>Get New Jokes</button>
    </div>
  );
});

export default Button;
