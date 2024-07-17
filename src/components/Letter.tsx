import { GAME_LEVEL } from '../constants';
import { useGameContext } from '../context/useGameContext';

interface LetterProps {
  char: string;
  isSelected: boolean;
  isCorrect: boolean;
  isIncorrect: boolean;
  handleClick: () => void;
}

export const Letter: React.FC<LetterProps> = ({
  char,
  isSelected,
  isCorrect,
  isIncorrect,
  handleClick,
}) => {
  const { level } = useGameContext();
  const baseClasses = `${level === GAME_LEVEL.EASY ? 'w-8' : 'w-5'} ${
    level === GAME_LEVEL.EASY ? 'h-8' : 'h-6'
  } ${
    level === GAME_LEVEL.EASY
      ? 'text-xs sm:text-sm md:text-base'
      : 'text-[10px] sm:text-sm md:text-base'
  }  flex items-center justify-center font-bold rounded-md cursor-pointer transition-all duration-200 transform hover:scale-110`;
  const stateClasses = isSelected
    ? isCorrect
      ? 'bg-green-500 text-white'
      : isIncorrect
      ? 'bg-red-500 text-white'
      : 'bg-blue-500 text-white'
    : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  return (
    <div className={`${baseClasses} ${stateClasses}`} onClick={handleClick}>
      {char}
    </div>
  );
};
