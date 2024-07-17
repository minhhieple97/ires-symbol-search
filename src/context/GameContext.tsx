import React, { createContext, useState, useEffect, useCallback } from 'react';
import { GameContextType, GameState } from '../types';
import { GAME_LEVEL, GAME_TOPIC } from '../constants';
import { generateBoard } from '../helpers';

export const GameContext = createContext<GameContextType | undefined>(undefined);
const initGameState: GameState = {
  board: [],
  targetChar: '',
  selectedIndices: [],
  correctIndices: [],
  incorrectIndices: [],
};
export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [level, setLevel] = useState<GAME_LEVEL | null>(null);
  const [topic, setTopic] = useState<GAME_TOPIC | null>(null);
  const [gameState, setGameState] = useState<GameState>(initGameState);
  const onRestart = () => {
    setLevel(null);
    setTopic(null);
    setGameState(initGameState);
  };

  const allCorrectSelected =
    gameState.board.filter((char) => char === gameState.targetChar).length ===
    gameState.correctIndices.length;

  const initGame = useCallback((level: GAME_LEVEL, topic: GAME_TOPIC) => {
    const board = generateBoard(level, topic);
    console.log({ board });
    const targetChar = board[Math.floor(Math.random() * board.length)];
    setGameState({
      ...initGameState,
      board,
      targetChar,
    });
  }, []);

  const selectLetter = useCallback((index: number) => {
    setGameState((prevState) => {
      if (prevState.selectedIndices.includes(index)) {
        return prevState;
      }

      const newSelectedIndices = [...prevState.selectedIndices, index];
      const newCorrectIndices =
        prevState.board[index] === prevState.targetChar
          ? [...prevState.correctIndices, index]
          : prevState.correctIndices;
      const newIncorrectIndices =
        prevState.board[index] !== prevState.targetChar
          ? [...prevState.incorrectIndices, index]
          : prevState.incorrectIndices;

      return {
        ...prevState,
        selectedIndices: newSelectedIndices,
        correctIndices: newCorrectIndices,
        incorrectIndices: newIncorrectIndices,
      };
    });
  }, []);

  const startGame = (selectedLevel: GAME_LEVEL, selectedTopic: GAME_TOPIC) => {
    setLevel(selectedLevel);
    setTopic(selectedTopic);
  };

  useEffect(() => {
    if (level && topic) {
      initGame(level, topic);
    }
  }, [level, topic, initGame]);
  const nextLevel = (topic: GAME_TOPIC) => {
    if (level === GAME_LEVEL.EASY) {
      setLevel(GAME_LEVEL.HARD);
      setTopic(topic);
    }
  };

  const value: GameContextType = {
    level,
    setLevel,
    topic,
    setTopic,
    startGame,
    onRestart,
    selectLetter,
    gameState,
    allCorrectSelected,
    nextLevel,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
