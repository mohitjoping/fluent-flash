"use client";
import React, { use, useState } from 'react';

export const FlashCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="flip-card w-48 h-64 perspective-[1000px] font-sans"
      onClick={handleFlip}
    >
      <div
        className={`flip-card-inner relative w-full h-full text-center transition-transform duration-700 ease-in-out transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="flip-card-front absolute w-full h-full flex flex-col justify-center items-center rounded-lg shadow-flip-card bg-gradient-to-r from-bisque via-[#ffe7de] to-[#ffd3c3] text-coral border border-coral backface-hidden">
          <p className="title text-2xl font-black m-0">FLIP CARD</p>
          <p>Hover Me</p>
        </div>
        <div className="flip-card-back absolute w-full h-full flex flex-col justify-center items-center rounded-lg shadow-flip-card bg-gradient-to-r from-[#ffae91] via-coral to-bisque text-white transform rotate-y-180 backface-hidden border border-coral">
          <p className="title text-2xl font-black m-0">BACK</p>
          <p>Leave Me</p>
        </div>
      </div>
    </div>
  );
};


