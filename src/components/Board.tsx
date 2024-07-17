import React from 'react';
import { Letter } from './Letter';
import { GAME_LEVEL } from '../constants';
import { useGameContext } from '../context/useGameContext';

export const Board: React.FC = () => {
  const {
    level,
    gameState: { board, selectedIndices, correctIndices, incorrectIndices },
    selectLetter,
  } = useGameContext();
  const gap = level === GAME_LEVEL.EASY ? 'gap-3' : 'gap-2';
  return (
    <div
      className={`grid  justify-items-center justify-around  ${
        level === GAME_LEVEL.HARD &&
        'grid-cols-8 grid-rows-16 sm:grid-cols-16 sm:grid-rows-8 md:grid-cols-16 md:grid-rows-8'
      } ${level === GAME_LEVEL.EASY && 'grid-cols-8 grid-rows-4'} ${gap} `}
    >
      {board.map((value, index) => (
        <Letter
          key={index}
          value={value}
          isSelected={selectedIndices.includes(index)}
          isCorrect={correctIndices.includes(index)}
          isIncorrect={incorrectIndices.includes(index)}
          handleClick={() => selectLetter(index)}
        />
      ))}
    </div>
  );
};
