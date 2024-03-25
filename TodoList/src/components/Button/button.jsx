import React from 'react';

function Button({ onClick, children }) {
  return (
    <button className='btn-global' onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;