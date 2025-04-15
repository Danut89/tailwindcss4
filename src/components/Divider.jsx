import React from 'react';

const Divider = () => {
  return (
    <div className="divider-glow my-16 flex justify-center">
      <div className="w-20 h-1 rounded-full bg-gradient-to-r from-primary via-accent to-primary blur-sm opacity-70 animate-pulse" />
    </div>
  );
};

export default Divider;
