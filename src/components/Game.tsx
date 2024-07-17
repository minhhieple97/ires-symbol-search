import React, { useState } from 'react';
import { Board } from './Board';
import { useGameContext } from '../context/useGameContext';
import { GAME_LEVEL, GAME_TOPIC } from '../constants';
import { ResetButton } from './ResetButton';
import { Icon } from '../ui/Icon';

export const Game: React.FC = () => {
  const {
    level,
    topic,
    gameState: { targetChar },
    allCorrectSelected,
    nextLevel,
  } = useGameContext();

  const [topicForNextLevel, setTopicForNextLevel] = useState<GAME_TOPIC>(GAME_TOPIC.LETTER);

  const renderTargetChar = () =>
    topic === GAME_TOPIC.LETTER ? targetChar : <Icon name={targetChar} />;

  const renderCongratulationsMessage = () => (
    <h3 className="text-sm sm:text-base md:text-lg font-bold text-green-500">
      Congratulations, You have found all the{' '}
      {topic === GAME_TOPIC.LETTER ? 'characters' : 'symbols'}!
    </h3>
  );

  const renderTopicSelector = () => (
    <div>
      <label className="mr-2 text-lg">Choose Topic for Next Level:</label>
      <select
        value={topicForNextLevel}
        onChange={(e) => setTopicForNextLevel(e.target.value as GAME_TOPIC)}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value={GAME_TOPIC.LETTER}>Letter</option>
        <option value={GAME_TOPIC.SYMBOL}>Symbol</option>
      </select>
    </div>
  );

  const renderNextLevelButton = () => (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      onClick={() => nextLevel(topicForNextLevel)}
    >
      Go to next level
    </button>
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-5 max-w-[90%] min-w-[300px] sm:min-w-[400px] md:min-w-[500px] flex flex-col items-center relative">
      <ResetButton />
      <h2 className="text-base sm:text-xl md:text-2xl font-bold mb-4 mt-6 text-center text-gray-800 flex justify-center gap-2 items-center">
        Find all "{renderTargetChar()}"
      </h2>
      <Board />
      {allCorrectSelected && (
        <div className="mt-8 text-center w-full">
          {renderCongratulationsMessage()}
          {level === GAME_LEVEL.EASY && (
            <div className="flex flex-col justify-center mt-4 gap-2">
              {renderTopicSelector()}
              {renderNextLevelButton()}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
