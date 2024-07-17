import {
  EASY_COLS,
  EASY_ROWS,
  GAME_LEVEL,
  GAME_TOPIC,
  HARD_COLS,
  HARD_ROWS,
  ICON_NAMES,
  LETTER_VALUE,
} from '../constants';

export const generateBoard = (level: GAME_LEVEL, topic: GAME_TOPIC): string[] => {
  const size = level === GAME_LEVEL.EASY ? EASY_ROWS * EASY_COLS : HARD_ROWS * HARD_COLS;
  if (topic === GAME_TOPIC.LETTER) {
    return Array.from(
      { length: size },
      () => LETTER_VALUE[Math.floor(Math.random() * LETTER_VALUE.length)],
    );
  }
  return Array.from(
    { length: size },
    () => ICON_NAMES[Math.floor(Math.random() * ICON_NAMES.length)],
  );
};
