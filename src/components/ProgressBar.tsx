import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  score: number;
  totalPossible: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, score, totalPossible }) => {
  const progressPercentage = (current / total) * 100;
  const scorePercentage = totalPossible > 0 ? (score / totalPossible) * 100 : 0;

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium text-gray-700">
          Scenario {current} of {total}
        </span>
        <span className="font-medium text-primary-600">
          Score: {score} / {totalPossible} ({Math.round(scorePercentage)}%)
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-primary-600 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};
