import React from 'react';
import { Brain, Target, Shield, Lightbulb, ArrowRight } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="card max-w-4xl mx-auto animate-fade-in">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Mastering AI at Work
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            An interactive simulation to help you understand how to effectively and ethically use AI tools in professional settings
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Effective Prompting</h3>
                <p className="text-sm text-gray-600">Learn to communicate clearly with AI tools to get better results</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Data Privacy</h3>
                <p className="text-sm text-gray-600">Understand how to protect sensitive information when using AI</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Critical Thinking</h3>
                <p className="text-sm text-gray-600">Apply human judgment to verify and improve AI outputs</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Ethical AI Use</h3>
                <p className="text-sm text-gray-600">Make responsible decisions about AI implementation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
          <h3 className="font-semibold text-gray-900 mb-2">How It Works</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span>You'll face realistic workplace scenarios involving AI tools</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span>Choose the best response for each situation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span>Receive immediate feedback and learn key principles</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span>Complete all scenarios to see your final score</span>
            </li>
          </ul>
        </div>

        <div className="text-center pt-4">
          <button onClick={onStart} className="btn-primary text-lg px-8 py-4 flex items-center gap-2 mx-auto">
            Start Simulation
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Estimated time: 10-15 minutes
          </p>
        </div>
      </div>
    </div>
  );
};
