import { GAME_LEVEL, GAME_TOPIC } from '../constants';

export interface GameState {
  board: string[];
  targetChar: string;
  selectedIndices: number[];
  correctIndices: number[];
  incorrectIndices: number[];
}

export interface GameContextType {
  level: GAME_LEVEL | null;
  setLevel: (level: GAME_LEVEL) => void;
  topic: GAME_TOPIC | null;
  setTopic: (topic: GAME_TOPIC) => void;
  startGame: (selectedLevel: GAME_LEVEL, selectedTopic: GAME_TOPIC) => void;
  onRestart: () => void;
  selectLetter: (index: number) => void;
  gameState: GameState;
  allCorrectSelected: boolean;
  nextLevel: (topic: GAME_TOPIC) => void;
}
