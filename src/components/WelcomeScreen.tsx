import React, { useState } from 'react';
import { GAME_LEVEL, GAME_TOPIC } from '../constants';
import { useGameContext } from '../context/useGameContext';

export const WelcomeScreen: React.FC = () => {
  const [level, setLevel] = useState<GAME_LEVEL>(GAME_LEVEL.EASY);
  const [topic, setTopic] = useState<GAME_TOPIC>(GAME_TOPIC.LETTER);
  const { startGame } = useGameContext();

  return (
    <div className="bg-white rounded-lg shadow-lg p-5 max-w-md w-full">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
        Welcome to the Game!
      </h2>
      <div className="mb-6">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-gray-700">
          Select Difficulty:
        </h3>
        <div className="flex space-x-4">
          <button
            className={`flex-1 py-2 rounded-md transition-colors duration-200 ${
              level === GAME_LEVEL.EASY
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => setLevel(GAME_LEVEL.EASY)}
          >
            Easy
          </button>
          <button
            className={`flex-1 py-2 rounded-md transition-colors duration-200 ${
              level === GAME_LEVEL.HARD
                ? 'bg-red-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => setLevel(GAME_LEVEL.HARD)}
          >
            Hard
          </button>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-sm sm:text-base md:text-lg  font-semibold mb-2 text-gray-700">
          Select Topic:
        </h3>
        <div className="flex space-x-4">
          <button
            className={`flex-1 py-2 rounded-md transition-colors duration-200 ${
              topic === GAME_TOPIC.LETTER
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => setTopic(GAME_TOPIC.LETTER)}
          >
            Letters
          </button>
          <button
            className={`flex-1 py-2 rounded-md transition-colors duration-200 ${
              topic === GAME_TOPIC.SYMBOL
                ? 'bg-purple-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => setTopic(GAME_TOPIC.SYMBOL)}
          >
            Symbols
          </button>
        </div>
      </div>
      <button
        className="w-full py-3 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-600 transition-colors duration-200"
        onClick={() => startGame(level, topic)}
      >
        Start Game
      </button>
    </div>
  );
};
