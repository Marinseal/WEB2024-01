import React from 'react';

function Button({ onClick, children, type }) {
  return (
    <button className='btn-global' type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;