import React from 'react';
import { op } from '../config/openpanel';

interface ButtonProps {
  label: string;
  eventName: string;
}

const Button: React.FC<ButtonProps> = ({ label, eventName }) => {
  const handleClick = () => {
    op.track(eventName, {
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
    });
    console.log(`Evento ${eventName} trackeado`);
  };

  return (
    <button onClick={handleClick} style={{ margin: '5px' }}>
      {label}
    </button>
  );
};

export default Button;