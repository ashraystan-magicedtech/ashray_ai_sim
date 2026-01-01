import React from 'react';
import { Trophy, Award, Target, RotateCcw } from 'lucide-react';

interface CompletionScreenProps {
  score: number;
  totalPossible: number;
  passingScore: number;
  onRestart: () => void;
}

export const CompletionScreen: React.FC<CompletionScreenProps> = ({
  score,
  totalPossible,
  passingScore,
  onRestart
}) => {
  const percentage = Math.round((score / totalPossible) * 100);
  const passed = percentage >= passingScore;

  return (
    <div className="card max-w-3xl mx-auto text-center animate-fade-in">
      <div className="space-y-6">
        <div className="flex justify-center">
          {passed ? (
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <Trophy className="w-12 h-12 text-green-600" />
            </div>
          ) : (
            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center">
              <Award className="w-12 h-12 text-yellow-600" />
            </div>
          )}
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            {passed ? 'Congratulations!' : 'Simulation Complete'}
          </h2>
          <p className="text-xl text-gray-600">
            {passed 
              ? "You've successfully completed the simulation!" 
              : "You've completed the simulation. Review the concepts and try again!"}
          </p>
        </div>

        <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-xl p-8 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Target className="w-8 h-8 text-primary-600" />
            <h3 className="text-2xl font-bold text-gray-900">Your Score</h3>
          </div>
          
          <div className="text-6xl font-bold text-primary-600">
            {percentage}%
          </div>
          
          <p className="text-lg text-gray-700">
            {score} out of {totalPossible} points
          </p>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Passing score: {passingScore}%
            </p>
          </div>
        </div>

        <div className={`${passed ? 'feedback-success' : 'feedback-warning'}`}>
          <h4 className="font-semibold text-gray-900 mb-2">
            {passed ? 'Excellent Work!' : 'Keep Learning'}
          </h4>
          <p className="text-gray-700">
            {passed
              ? "You've demonstrated a strong understanding of how to use AI effectively and ethically in the workplace. You're ready to apply these principles in your professional work."
              : "Review the key learning points from each scenario and consider how you can apply these principles in your work. Understanding comes with practice and reflection."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-gray-900 mb-1">Effective Prompting</h5>
            <p className="text-sm text-gray-600">Clear, specific instructions produce better results</p>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-gray-900 mb-1">Data Privacy</h5>
            <p className="text-sm text-gray-600">Always protect sensitive and confidential information</p>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-gray-900 mb-1">Critical Thinking</h5>
            <p className="text-sm text-gray-600">Verify AI outputs and apply human judgment</p>
          </div>
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <button onClick={onRestart} className="btn-secondary flex items-center gap-2">
            <RotateCcw className="w-5 h-5" />
            Restart Simulation
          </button>
        </div>
      </div>
    </div>
  );
};
