import React from 'react';

const Button = ({
  text,
  onClick,
  disabled = false,
  color = 'bg-custom-purple',
}) => {
  const buttonClassName = `px-4 py-2 text-white rounded ${
    disabled ? 'bg-gray-300 cursor-not-allowed' : color
  }`;

  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
