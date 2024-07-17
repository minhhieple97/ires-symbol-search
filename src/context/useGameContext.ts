import { useContext } from 'react';
import { GameContextType } from '../types';
import { GameContext } from './GameContext';

export const useGameContext = (): GameContextType => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};
