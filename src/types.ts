export type Difficulty = 1 | 2 | 3 | 4 | 5;

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  1: "Streifenpolizist",
  2: "Kriminalmeister",
  3: "Kriminalobermeister",
  4: "Kriminalhauptkommissar",
  5: "Oberinspektor",
};

export type Category = 
  | "Staffel 1 & 2"
  | "Staffel 3 & 4"
  | "Staffel 5 & 6"
  | "Staffel 7 & 8"
  | "Trivia & Historie"
  | "Random";

export interface Question {
  id: string;
  category: Category;
  difficulty: Difficulty;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface QuizState {
  currentStep: 'start' | 'quiz' | 'result';
  selectedCategory: Category | null;
  selectedDifficulty: Difficulty | null;
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  answers: number[]; // indices of selected answers
}
