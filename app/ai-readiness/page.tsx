"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Clock,
  BarChart3,
  Target,
  Calendar,
} from "lucide-react";
import {
  QUESTIONNAIRE_QUESTIONS,
  QUESTIONNAIRE_META,
  getResultCategory,
} from "@/lib/questionnaire-data";

type QuestionnaireState = "intro" | "questions" | "results";

export default function AIReadinessPage() {
  const [state, setState] = useState<QuestionnaireState>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [email, setEmail] = useState("");
  const [showEmailCapture, setShowEmailCapture] = useState(false);

  const totalQuestions = QUESTIONNAIRE_QUESTIONS.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswer = (questionId: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));

    if (currentQuestion < totalQuestions - 1) {
      setTimeout(() => setCurrentQuestion((prev) => prev + 1), 300);
    } else {
      setShowEmailCapture(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, score) => sum + score, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("results");
  };

  const skipEmail = () => {
    setState("results");
  };

  const startOver = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setEmail("");
    setShowEmailCapture(false);
    setState("intro");
  };

  // Intro Screen
  if (state === "intro") {
    return (
      <div className="min-h-screen bg-[#0B1120] pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#111827] border border-[#1E3A5F]/30 px-4 py-2 mb-8">
              <BarChart3 size={18} className="text-[#C9A961]" />
              <span className="text-sm text-[#B8C5D6]">Free Assessment</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {QUESTIONNAIRE_META.title}
            </h1>
            <p className="text-xl text-[#C9A961] mb-6">
              {QUESTIONNAIRE_META.subtitle}
            </p>
            <p className="text-[#B8C5D6] mb-10 max-w-2xl mx-auto">
              {QUESTIONNAIRE_META.description}
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-[#111827] border border-[#1F2937] p-4">
                <Clock size={24} className="text-[#C9A961] mx-auto mb-2" />
                <div className="text-white font-medium">{QUESTIONNAIRE_META.completionTime}</div>
                <div className="text-sm text-[#6B7A8F]">to complete</div>
              </div>
              <div className="bg-[#111827] border border-[#1F2937] p-4">
                <Target size={24} className="text-[#C9A961] mx-auto mb-2" />
                <div className="text-white font-medium">{totalQuestions} Questions</div>
                <div className="text-sm text-[#6B7A8F]">across key areas</div>
              </div>
              <div className="bg-[#111827] border border-[#1F2937] p-4">
                <CheckCircle size={24} className="text-[#C9A961] mx-auto mb-2" />
                <div className="text-white font-medium">Instant Results</div>
                <div className="text-sm text-[#6B7A8F]">with recommendations</div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => setState("questions")}
              className="btn-primary text-lg px-10 py-4"
            >
              Start Assessment
              <ArrowRight size={20} className="ml-2" />
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  // Questions Screen
  if (state === "questions") {
    const question = QUESTIONNAIRE_QUESTIONS[currentQuestion];

    return (
      <div className="min-h-screen bg-[#0B1120] pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-[#6B7A8F] mb-2">
              <span>Question {currentQuestion + 1} of {totalQuestions}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="h-2 bg-[#111827] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#1E3A5F] to-[#C9A961]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Email Capture Modal */}
          <AnimatePresence>
            {showEmailCapture && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-[#111827] border border-[#1F2937] p-8 max-w-md w-full"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Almost there!
                  </h3>
                  <p className="text-[#B8C5D6] mb-6">
                    [EMAIL CAPTURE TEXT FROM YOUR FILES] - Enter your email to receive your
                    personalized AI readiness report and recommendations.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email"
                      className="w-full px-4 py-3 bg-[#0B1120] border border-[#1F2937] text-white placeholder-[#6B7A8F] mb-4 focus:outline-none focus:border-[#1E3A5F]"
                      required
                    />
                    <button type="submit" className="btn-primary w-full mb-3">
                      Get My Results
                      <ArrowRight size={18} className="ml-2" />
                    </button>
                    <button
                      type="button"
                      onClick={skipEmail}
                      className="w-full text-[#6B7A8F] hover:text-white transition-colors text-sm"
                    >
                      Skip and view results
                    </button>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={question.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111827] border border-[#1F2937] p-8"
            >
              {/* Category Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-[#1E3A5F]/10 border border-[#1E3A5F]/30 text-[#1E3A5F] text-xs font-medium mb-4">
                {question.category}
              </div>

              {/* Question */}
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-8">
                {question.question}
              </h2>

              {/* Options */}
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(question.id, option.score)}
                    className={`w-full text-left p-4 border transition-all ${
                      answers[question.id] === option.score
                        ? "bg-[#1E3A5F]/20 border-[#1E3A5F] text-white"
                        : "bg-[#1F2937] border-[#1F2937] text-[#B8C5D6] hover:border-[#1E3A5F]/50 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 flex items-center justify-center bg-[#0B1120] border border-[#1F2937] text-sm font-medium">
                        {String.fromCharCode(65 + index)}
                      </span>
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2 text-[#6B7A8F] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={18} />
              Previous
            </button>
            <button
              onClick={startOver}
              className="text-[#6B7A8F] hover:text-white transition-colors text-sm"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Results Screen
  const score = calculateScore();
  const result = getResultCategory(score);

  return (
    <div className="min-h-screen bg-[#0B1120] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Results Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#111827] border border-[#C9A961]/30 px-4 py-2 mb-6">
              <CheckCircle size={18} className="text-[#C9A961]" />
              <span className="text-sm text-[#B8C5D6]">Assessment Complete</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your AI Readiness Results
            </h1>
            <p className="text-[#B8C5D6]">
              Based on your responses, here's where your organization stands
            </p>
          </div>

          {/* Score Card */}
          <div className="bg-[#111827] border border-[#1F2937] p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Score Visual */}
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center">
                  <svg className="w-48 h-48 transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="#1F2937"
                      strokeWidth="12"
                      fill="none"
                    />
                    <motion.circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="url(#scoreGradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "0 553" }}
                      animate={{ strokeDasharray: `${(score / 40) * 553} 553` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    <defs>
                      <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1E3A5F" />
                        <stop offset="100%" stopColor="#C9A961" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-5xl font-bold text-white">{score}</span>
                    <span className="text-[#6B7A8F]">out of 40</span>
                  </div>
                </div>
              </div>

              {/* Result Info */}
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-[#C9A961]/10 border border-[#C9A961]/30 text-[#C9A961] text-sm font-medium mb-4">
                  {result.level}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {result.title}
                </h2>
                <p className="text-[#B8C5D6]">
                  {result.description}
                </p>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-[#111827] border border-[#1F2937] p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-6">
              Recommended Next Steps
            </h3>
            <div className="grid gap-4">
              {result.recommendations.map((rec, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-[#1F2937] border border-[#1F2937]"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-[#1E3A5F]/20 text-[#1E3A5F] font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-[#B8C5D6]">{rec}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA - Book Consultation */}
          <div className="bg-gradient-to-r from-[#1E3A5F]/20 to-[#C9A961]/20 border border-[#1E3A5F]/30 p-8 text-center">
            <Calendar size={40} className="text-[#C9A961] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              {QUESTIONNAIRE_META.bookingCtaText}
            </h3>
            <p className="text-[#B8C5D6] mb-6 max-w-lg mx-auto">
              {QUESTIONNAIRE_META.bookingCtaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Book Free Consultation
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <button onClick={startOver} className="btn-secondary">
                Retake Assessment
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
