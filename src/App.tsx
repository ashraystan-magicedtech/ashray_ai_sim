import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ScenarioCard } from './components/ScenarioCard';
import { CompletionScreen } from './components/CompletionScreen';
import { ProgressBar } from './components/ProgressBar';
import { simulationData } from './data/simulationData';
import { UserProgress, Choice } from './types';

type AppState = 'welcome' | 'simulation' | 'completion';

function App() {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [progress, setProgress] = useState<UserProgress>({
    currentScenarioId: simulationData.scenarios[0].id,
    completedScenarios: [],
    score: 0,
    totalPossibleScore: 0,
    responses: {}
  });

  const handleStart = () => {
    setAppState('simulation');
    setProgress({
      currentScenarioId: simulationData.scenarios[0].id,
      completedScenarios: [],
      score: 0,
      totalPossibleScore: 0,
      responses: {}
    });
  };

  const handleChoiceSelect = (choice: Choice) => {
    const currentScenario = simulationData.scenarios.find(
      s => s.id === progress.currentScenarioId
    );

    if (!currentScenario) return;

    const maxPoints = Math.max(...currentScenario.choices.map(c => c.points));
    const newScore = progress.score + choice.points;
    const newTotalPossible = progress.totalPossibleScore + maxPoints;
    const newCompleted = [...progress.completedScenarios, currentScenario.id];
    const newResponses = { ...progress.responses, [currentScenario.id]: choice.id };

    if (currentScenario.nextScenarioId) {
      const nextScenario = simulationData.scenarios.find(
        s => s.id === currentScenario.nextScenarioId
      );

      if (nextScenario) {
        setProgress({
          currentScenarioId: nextScenario.id,
          completedScenarios: newCompleted,
          score: newScore,
          totalPossibleScore: newTotalPossible,
          responses: newResponses
        });
      }
    } else {
      setProgress({
        ...progress,
        completedScenarios: newCompleted,
        score: newScore,
        totalPossibleScore: newTotalPossible,
        responses: newResponses
      });
      setAppState('completion');
    }
  };

  const handleRestart = () => {
    setAppState('welcome');
    setProgress({
      currentScenarioId: simulationData.scenarios[0].id,
      completedScenarios: [],
      score: 0,
      totalPossibleScore: 0,
      responses: {}
    });
  };

  const currentScenario = simulationData.scenarios.find(
    s => s.id === progress.currentScenarioId
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {appState === 'simulation' && (
          <div className="mb-8">
            <ProgressBar
              current={progress.completedScenarios.length + 1}
              total={simulationData.scenarios.length}
              score={progress.score}
              totalPossible={progress.totalPossibleScore}
            />
          </div>
        )}

        {appState === 'welcome' && <WelcomeScreen onStart={handleStart} />}

        {appState === 'simulation' && currentScenario && (
          <ScenarioCard
            scenario={currentScenario}
            onChoiceSelect={handleChoiceSelect}
          />
        )}

        {appState === 'completion' && (
          <CompletionScreen
            score={progress.score}
            totalPossible={progress.totalPossibleScore}
            passingScore={simulationData.passingScore}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}

export default App;
