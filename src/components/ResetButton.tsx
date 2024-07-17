import React from 'react';
import { useGameContext } from '../context/useGameContext';

export const ResetButton: React.FC = () => {
  const { onRestart } = useGameContext();

  return (
    <button
      onClick={onRestart}
      className="absolute top-2 right-2 p-2 text-xs sm:text-sm md:text-base bg-blue-400 rounded-md hover:bg-blue-500 font-medium"
    >
      Reset Game
    </button>
  );
};
