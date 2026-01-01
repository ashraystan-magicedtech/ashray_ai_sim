export interface Choice {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
  points: number;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  context: string;
  image?: string;
  question: string;
  choices: Choice[];
  learningPoint: string;
  nextScenarioId?: string;
}

export interface UserProgress {
  currentScenarioId: string;
  completedScenarios: string[];
  score: number;
  totalPossibleScore: number;
  responses: Record<string, string>;
}

export interface SimulationData {
  title: string;
  description: string;
  scenarios: Scenario[];
  passingScore: number;
}
