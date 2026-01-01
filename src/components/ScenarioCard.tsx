import React, { useState } from 'react';
import { Scenario, Choice } from '../types';
import { CheckCircle, XCircle, Lightbulb } from 'lucide-react';

interface ScenarioCardProps {
  scenario: Scenario;
  onChoiceSelect: (choice: Choice) => void;
}

export const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario, onChoiceSelect }) => {
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleChoiceClick = (choice: Choice) => {
    setSelectedChoice(choice);
    setShowFeedback(true);
  };

  const handleContinue = () => {
    if (selectedChoice) {
      onChoiceSelect(selectedChoice);
      setSelectedChoice(null);
      setShowFeedback(false);
    }
  };

  return (
    <div className="card max-w-4xl mx-auto animate-fade-in">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{scenario.title}</h2>
          <p className="text-sm text-gray-500 uppercase tracking-wide">{scenario.description}</p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-gray-800 leading-relaxed">{scenario.context}</p>
        </div>

        <div className="pt-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{scenario.question}</h3>
          
          <div className="space-y-3">
            {scenario.choices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => handleChoiceClick(choice)}
                disabled={showFeedback}
                className={`choice-card w-full text-left ${
                  selectedChoice?.id === choice.id ? 'selected' : ''
                } ${showFeedback ? 'cursor-not-allowed opacity-75' : ''}`}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-semibold flex items-center justify-center">
                    {choice.id.toUpperCase()}
                  </span>
                  <span className="flex-1 text-gray-800">{choice.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {showFeedback && selectedChoice && (
          <div className="animate-slide-up space-y-4">
            <div className={`${
              selectedChoice.isCorrect ? 'feedback-success' : 'feedback-warning'
            }`}>
              <div className="flex items-start gap-3">
                {selectedChoice.isCorrect ? (
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {selectedChoice.isCorrect ? 'Correct!' : 'Not Quite'}
                  </h4>
                  <p className="text-gray-700">{selectedChoice.feedback}</p>
                  <p className="text-sm font-medium mt-2">
                    Points earned: {selectedChoice.points}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">Key Learning Point</h4>
                  <p className="text-gray-700">{scenario.learningPoint}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button onClick={handleContinue} className="btn-primary">
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
