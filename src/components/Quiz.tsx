import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { QUIZ_QUESTIONS } from "../constants";

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleAnswer = (index: number) => {
    setSelectedOption(index);
    if (index === QUIZ_QUESTIONS[currentStep].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentStep < QUIZ_QUESTIONS.length - 1) {
        setCurrentStep(currentStep + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 600);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  return (
    <section id="quiz" className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-10">
        <div className="text-center mb-16 space-y-4">
          <p className="text-blue-600 font-mono text-[10px] tracking-[0.3em] uppercase font-bold">Verifikimi i Njohurive</p>
          <h2 className="text-5xl font-serif italic tracking-tight text-gray-900 leading-none">
            Quiz i <span className="not-italic font-black text-blue-600 uppercase">Shpejtë</span>
          </h2>
        </div>

        <div className="bg-white p-10 border border-gray-200 rounded-sm shadow-sm min-h-[450px] flex flex-col">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-10 flex-1 flex flex-col justify-center"
              >
                <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                  <span>Pyetja {currentStep + 1} / {QUIZ_QUESTIONS.length}</span>
                  <div className="w-32 h-1 bg-gray-100">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentStep) / QUIZ_QUESTIONS.length) * 100}%` }}
                      className="h-full bg-blue-600" 
                    />
                  </div>
                </div>
                
                <h3 className="text-3xl font-serif italic font-bold text-gray-900 leading-tight">
                  {QUIZ_QUESTIONS[currentStep].question}
                </h3>

                <div className="grid grid-cols-1 gap-3">
                  {QUIZ_QUESTIONS[currentStep].options.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ backgroundColor: "#eff6ff", borderColor: "#2563eb" }}
                      onClick={() => handleAnswer(index)}
                      disabled={selectedOption !== null}
                      className={`p-4 text-left border-2 font-bold text-xs uppercase tracking-widest transition-all ${
                        selectedOption === index
                          ? index === QUIZ_QUESTIONS[currentStep].correctAnswer
                            ? "bg-blue-50 border-blue-600 text-blue-800"
                            : "bg-red-50 border-red-200 text-red-800 opacity-50"
                          : "bg-white border-gray-100 text-gray-500"
                      }`}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-10 py-10 flex-1 flex flex-col justify-center items-center"
              >
                <div className="w-24 h-24 bg-blue-600 flex items-center justify-center rounded-full text-white text-3xl font-serif italic font-bold">
                  {score}
                </div>
                <div>
                  <h3 className="text-3xl font-serif italic font-bold text-gray-900 mb-2">Rezultati</h3>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
                    {score}/{QUIZ_QUESTIONS.length} Përgjigje të Sakta
                  </p>
                </div>
                <button
                  onClick={resetQuiz}
                  className="px-10 py-4 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-blue-600 transition-colors"
                >
                   Provo Përsëri
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
