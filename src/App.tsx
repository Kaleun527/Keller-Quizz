import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Search, 
  History, 
  Tv, 
  Dices, 
  ChevronRight, 
  CheckCircle2, 
  XCircle,
  Award,
  RefreshCcw,
  Info
} from 'lucide-react';
import { Category, Difficulty, Question, DIFFICULTY_LABELS } from './types';
import { SAMPLE_QUESTIONS } from './questions';

const CATEGORIES: { id: Category; icon: any; description: string }[] = [
  { id: "Staffel 1 & 2", icon: Tv, description: "Die Anfänge (1969-1970)" },
  { id: "Staffel 3 & 4", icon: Tv, description: "Die goldene Ära (1971-1972)" },
  { id: "Staffel 5 & 6", icon: Tv, description: "Spannung pur (1973-1974)" },
  { id: "Staffel 7 & 8", icon: Tv, description: "Das Finale (1975-1976)" },
  { id: "Trivia & Historie", icon: History, description: "Hintergrundwissen & Fakten" },
  { id: "Random", icon: Dices, description: "Zufällige Ermittlungen" },
];

const DIFFICULTIES: Difficulty[] = [1, 2, 3, 4, 5];

export default function App() {
  const [step, setStep] = useState<'start' | 'quiz' | 'result'>('start');
  const [category, setCategory] = useState<Category | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const filteredQuestions = useMemo(() => {
    let qs = [...SAMPLE_QUESTIONS];
    if (category && category !== "Random") {
      qs = qs.filter(q => q.category === category);
    }
    if (difficulty) {
      qs = qs.filter(q => q.difficulty <= difficulty);
    }
    // Shuffle questions
    return qs.sort(() => Math.random() - 0.5).slice(0, 10);
  }, [category, difficulty, step]);

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const handleStart = () => {
    if (category && difficulty) {
      setStep('quiz');
      setCurrentQuestionIndex(0);
      setScore(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (index === currentQuestion.correctAnswer) {
      setScore(s => s + 1);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(i => i + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setStep('result');
    }
  };

  const resetQuiz = () => {
    setStep('start');
    setCategory(null);
    setDifficulty(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      <div className="scanlines" />
      <div className="vignette" />

      <header className="mb-12 text-center z-10">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-8xl font-serif mb-2 uppercase tracking-tighter"
        >
          Kommissar Keller
        </motion.h1>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="h-1 bg-noir-white w-full mb-4"
        />
        <p className="font-mono text-noir-gray-light tracking-[0.3em] uppercase text-sm">
          Kriminalpolizei München • Quiz-Abteilung
        </p>
      </header>

      <main className="w-full max-w-4xl z-10">
        <AnimatePresence mode="wait">
          {step === 'start' && (
            <motion.div 
              key="start"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <section>
                <h2 className="text-2xl font-mono mb-6 border-b border-noir-gray-light/30 pb-2 flex items-center gap-2">
                  <Search size={20} /> 1. KATEGORIE WÄHLEN
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`noir-card p-6 text-left transition-all group ${
                        category === cat.id ? 'ring-2 ring-noir-white bg-noir-gray-light text-noir-black' : 'hover:border-noir-white'
                      }`}
                    >
                      <cat.icon className={`mb-4 ${category === cat.id ? 'text-noir-black' : 'text-noir-gray-light group-hover:text-noir-white'}`} />
                      <h3 className="text-xl font-serif mb-1">{cat.id}</h3>
                      <p className="text-xs font-mono opacity-70">{cat.description}</p>
                    </button>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-mono mb-6 border-b border-noir-gray-light/30 pb-2 flex items-center gap-2">
                  <Shield size={20} /> 2. DIENSTGRAD (LEVEL)
                </h2>
                <div className="flex flex-wrap gap-4">
                  {DIFFICULTIES.map((d) => (
                    <button
                      key={d}
                      onClick={() => setDifficulty(d)}
                      className={`flex-1 min-w-[150px] p-4 font-mono text-sm border-2 transition-all ${
                        difficulty === d 
                          ? 'bg-noir-white text-noir-black border-noir-white' 
                          : 'border-noir-gray-dark hover:border-noir-gray-light'
                      }`}
                    >
                      LEVEL {d}
                      <div className="text-[10px] opacity-70 mt-1 uppercase">
                        {DIFFICULTY_LABELS[d]}
                      </div>
                    </button>
                  ))}
                </div>
              </section>

              <div className="flex justify-center pt-8">
                <button 
                  onClick={handleStart}
                  disabled={!category || !difficulty}
                  className="noir-button text-2xl px-12 py-6 flex items-center gap-4"
                >
                  Ermittlung Starten <ChevronRight />
                </button>
              </div>
            </motion.div>
          )}

          {step === 'quiz' && currentQuestion && (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="noir-card p-8 md:p-12"
            >
              <div className="flex justify-between items-center mb-8 font-mono text-xs text-noir-gray-light">
                <span>FALL: {currentQuestionIndex + 1} / {filteredQuestions.length}</span>
                <span>DIENSTGRAD: {DIFFICULTY_LABELS[currentQuestion.difficulty]}</span>
                <span>PUNKTE: {score}</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif mb-12 leading-tight">
                {currentQuestion.text}
              </h2>

              <div className="grid grid-cols-1 gap-4 mb-8">
                {currentQuestion.options.map((option, idx) => {
                  const isCorrect = idx === currentQuestion.correctAnswer;
                  const isSelected = idx === selectedAnswer;
                  
                  let buttonClass = "noir-button text-left normal-case tracking-normal font-sans text-lg flex justify-between items-center";
                  if (selectedAnswer !== null) {
                    if (isCorrect) buttonClass += " bg-green-900/30 border-green-500 text-green-500";
                    else if (isSelected) buttonClass += " bg-red-900/30 border-red-500 text-red-500";
                    else buttonClass += " opacity-30";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      disabled={selectedAnswer !== null}
                      className={buttonClass}
                    >
                      {option}
                      {selectedAnswer !== null && isCorrect && <CheckCircle2 size={20} />}
                      {selectedAnswer !== null && isSelected && !isCorrect && <XCircle size={20} />}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {showExplanation && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="bg-noir-black/50 p-6 border-l-4 border-noir-white mb-8"
                  >
                    <div className="flex items-start gap-3">
                      <Info className="shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-mono text-xs uppercase mb-2 opacity-70 tracking-widest">Ermittlungs-Notiz</h4>
                        <p className="text-noir-gray-light italic">{currentQuestion.explanation}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {selectedAnswer !== null && (
                <div className="flex justify-end">
                  <button onClick={handleNext} className="noir-button flex items-center gap-2">
                    {currentQuestionIndex === filteredQuestions.length - 1 ? 'Abschlussbericht' : 'Nächster Fall'} <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {step === 'result' && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="noir-card p-12 text-center"
            >
              <Award className="mx-auto mb-6 text-noir-white" size={64} />
              <h2 className="text-5xl font-serif mb-4">Ermittlung Abgeschlossen</h2>
              <div className="text-2xl font-mono mb-8">
                ERGEBNIS: <span className="text-6xl block mt-2">{score} / {filteredQuestions.length}</span>
              </div>
              
              <div className="max-w-md mx-auto p-6 border-2 border-noir-white/20 mb-12">
                <h3 className="font-mono text-sm uppercase tracking-widest mb-2">Erreichte Qualifikation</h3>
                <p className="text-3xl font-serif">
                  {score >= 9 ? 'Oberinspektor' : 
                   score >= 7 ? 'Kriminalhauptkommissar' :
                   score >= 5 ? 'Kriminalobermeister' :
                   score >= 3 ? 'Kriminalmeister' : 'Streifenpolizist'}
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button onClick={resetQuiz} className="noir-button flex items-center justify-center gap-2">
                  <RefreshCcw size={18} /> Neue Ermittlung
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="mt-12 text-center z-10 opacity-30 font-mono text-[10px] tracking-widest uppercase">
        © 1969-1976 ZDF • Ein Tribut an Herbert Reinecker & Erik Ode
      </footer>
    </div>
  );
}
