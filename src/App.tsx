import { FC } from 'react';
import { Game } from './components/Game';
import { WelcomeScreen } from './components/WelcomeScreen.tsx';
import { useGameContext } from './context/useGameContext.ts';
const App: FC = () => {
  const { level, topic } = useGameContext();
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-2">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-white text-center shadow-text">
        Letter/Symbol Finder Game
      </h1>
      {level && topic ? <Game /> : <WelcomeScreen />}
    </div>
  );
};

export default App;
