import { GAME_LEVEL, GAME_TOPIC } from '../constants';
import { useGameContext } from '../context/useGameContext';
import { Icon } from '../ui/Icon';

interface LetterProps {
  value: string;
  isSelected: boolean;
  isCorrect: boolean;
  isIncorrect: boolean;
  handleClick: () => void;
}

export const Letter: React.FC<LetterProps> = ({
  value,
  isSelected,
  isCorrect,
  isIncorrect,
  handleClick,
}) => {
  const { level, topic } = useGameContext();
  const getBaseClasses = () => {
    return level === GAME_LEVEL.EASY
      ? 'w-10 h-10 text-xs sm:text-sm md:text-base'
      : 'w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[10px] sm:text-sm md:text-base';
  };
  const getStateClasses = () => {
    if (isSelected) {
      if (isCorrect) return 'bg-green-500 text-white';
      if (isIncorrect) return 'bg-red-500 text-white';
      return 'bg-blue-500 text-white';
    }
    return 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  };
  const baseClasses = `${getBaseClasses()} flex items-center justify-center font-bold rounded-md cursor-pointer transition-all duration-200 transform hover:scale-110`;
  const stateClasses = getStateClasses();
  return (
    <div className={`${baseClasses} ${stateClasses}`} onClick={handleClick}>
      {topic === GAME_TOPIC.LETTER ? value : <Icon name={value}></Icon>}
    </div>
  );
};
