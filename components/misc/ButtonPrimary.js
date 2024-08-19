import React from 'react';

const ButtonPrimary = ({ children, addClass, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={
        'py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-light rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none ' +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
