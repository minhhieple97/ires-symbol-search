import {
  EASY_COLS,
  EASY_ROWS,
  GAME_LEVEL,
  GAME_TOPIC,
  HARD_COLS,
  HARD_ROWS,
  LETTER_VALUE,
  SYMBOL_VALUE,
} from '../constants';

export const generateBoard = (level: GAME_LEVEL, topic: GAME_TOPIC): string[] => {
  const size = level === GAME_LEVEL.EASY ? EASY_ROWS * EASY_COLS : HARD_ROWS * HARD_COLS;
  const chars = topic === GAME_TOPIC.LETTER ? LETTER_VALUE : SYMBOL_VALUE;

  return Array.from({ length: size }, () => chars[Math.floor(Math.random() * chars.length)]);
};
