import React from 'react';

const Button = () => {
  return (
    <button className="px-8 py-3 text-lg font-semibold rounded-full 
                     bg-gradient-to-r from-purple-500 to-cyan-500
                     hover:from-purple-600 hover:to-cyan-600
                     text-white transition-all duration-300
                     transform hover:scale-105">
      Get started
    </button>
  );
};

export default Button;