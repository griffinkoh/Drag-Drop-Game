
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import OptionsPanel from "./components/OptionsPanel";
import MapCanvas from "./components/MapCanvas";
import StartScreen from "./components/StartScreen";
import ResultModal from "./components/ResultModal";
import { ANSWERS } from "./data/answers";
import { useGameTimer } from "./hooks/useGameTimer";

export default function App() {
  const [placements, setPlacements] = useState<Record<string, string>>({});
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);
  const [penalty, setPenalty] = useState(0);
  const [incorrectZones, setIncorrectZones] = useState<string[]>([]);
  const [timerKey, setTimerKey] = useState(0);

  const time = useGameTimer(running, timerKey);

  const handleDrop = (zoneId: string, label: string) => {
    setPlacements(prev => ({ ...prev, [zoneId]: label }));
  };

  const handleStart = () => {
    setStarted(true);
    setRunning(true);
  };

  const handleFinish = () => {
    const wrong: string[] = [];

    Object.entries(ANSWERS).forEach(([zone, ans]) => {
      if (placements[zone] !== ans) {
        wrong.push(zone);
      }
    });

    const penaltySeconds = wrong.length * 10; // per wrong answer

    setPenalty(penaltySeconds);
    setIncorrectZones(wrong);
    setRunning(false);
    setFinished(true);
  };

  const handleClear = () => {
    setPlacements({});
    setIncorrectZones([]);
  };

  const handleReset = () => {
    setPlacements({});
    setPenalty(0);
    setIncorrectZones([]);
    setFinished(false);
    setStarted(false);
    setTimerKey(prev => prev + 1);
  };

  if (!started) return <StartScreen onStart={handleStart} />;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="game-root">
        <OptionsPanel />
        <MapCanvas
          placements={placements}
          incorrectZones={incorrectZones}
          onDrop={handleDrop}
          time={time}
          onFinish={handleFinish}
          onClear={handleClear}
        />

        {finished && (
          <ResultModal
            time={time}
            penalty={penalty}
            onReset={handleReset}
          />
        )}
      </div>
    </DndProvider>
  );
}
