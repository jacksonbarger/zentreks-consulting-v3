// ============================================================
// AI READINESS QUESTIONNAIRE DATA
// ============================================================
// Inspired by enterprise consulting frameworks (EY, Deloitte, Gartner)
// Assesses organizational AI maturity across 7 key dimensions
// ============================================================

export interface QuestionOption {
  text: string;
  score: number;
}

export interface Question {
  id: number;
  category: string;
  question: string;
  options: QuestionOption[];
}

export interface ResultCategory {
  minScore: number;
  maxScore: number;
  title: string;
  level: string;
  description: string;
  recommendations: string[];
}

// ============================================================
// AI MATURITY ASSESSMENT QUESTIONS
// 7 Dimensions: Strategy, Data, Technology, Talent, Governance,
// Process, and Culture
// ============================================================
export const QUESTIONNAIRE_QUESTIONS: Question[] = [
  {
    id: 1,
    category: "Strategy & Vision",
    question: "How would you describe your organization's AI strategy?",
    options: [
      { text: "We have no formal AI strategy — AI discussions are ad-hoc or reactive", score: 1 },
      { text: "We're exploring AI opportunities but haven't formalized a strategy", score: 2 },
      { text: "We have a documented AI strategy aligned with some business objectives", score: 3 },
      { text: "AI is central to our enterprise strategy with clear KPIs and executive sponsorship", score: 4 },
    ],
  },
  {
    id: 2,
    category: "Strategy & Vision",
    question: "How does leadership view AI investment and transformation?",
    options: [
      { text: "Leadership is skeptical or sees AI as a cost center with uncertain ROI", score: 1 },
      { text: "There's interest but competing priorities limit commitment", score: 2 },
      { text: "Leadership actively supports AI with dedicated budget allocation", score: 3 },
      { text: "AI transformation is a board-level priority with sustained multi-year investment", score: 4 },
    ],
  },
  {
    id: 3,
    category: "Data Foundation",
    question: "How would you assess your organization's data infrastructure?",
    options: [
      { text: "Data is siloed across departments with inconsistent formats and limited accessibility", score: 1 },
      { text: "We have some centralized data but quality and governance are inconsistent", score: 2 },
      { text: "We maintain a data warehouse/lake with standardized processes and regular quality checks", score: 3 },
      { text: "We have enterprise-wide data platforms with real-time access, strong governance, and AI-ready pipelines", score: 4 },
    ],
  },
  {
    id: 4,
    category: "Data Foundation",
    question: "How mature is your organization's approach to data governance?",
    options: [
      { text: "No formal data governance — ownership and quality standards are unclear", score: 1 },
      { text: "Basic governance exists but enforcement is inconsistent across teams", score: 2 },
      { text: "Formal data governance framework with defined ownership, policies, and compliance measures", score: 3 },
      { text: "Comprehensive data governance with automated quality monitoring, lineage tracking, and regulatory compliance", score: 4 },
    ],
  },
  {
    id: 5,
    category: "Technology Infrastructure",
    question: "What is the current state of your technology infrastructure for AI workloads?",
    options: [
      { text: "Legacy systems with limited cloud adoption and no AI/ML tooling", score: 1 },
      { text: "Partial cloud migration underway; exploring AI platforms and tools", score: 2 },
      { text: "Modern cloud infrastructure with established ML platforms and development environments", score: 3 },
      { text: "Scalable, cloud-native architecture with MLOps, automated pipelines, and production AI systems", score: 4 },
    ],
  },
  {
    id: 6,
    category: "Talent & Skills",
    question: "How would you describe your organization's AI talent and capabilities?",
    options: [
      { text: "No dedicated AI expertise — reliant on external vendors for any AI work", score: 1 },
      { text: "Limited internal skills; a few individuals exploring AI independently", score: 2 },
      { text: "Growing AI team with data scientists and engineers; active upskilling programs", score: 3 },
      { text: "Strong AI Center of Excellence with specialized roles, continuous learning, and knowledge sharing", score: 4 },
    ],
  },
  {
    id: 7,
    category: "Talent & Skills",
    question: "What is the level of AI literacy across your broader workforce?",
    options: [
      { text: "Minimal awareness — most employees don't understand AI's potential impact", score: 1 },
      { text: "Basic awareness exists but practical skills are limited to technical teams", score: 2 },
      { text: "AI literacy programs in place; business users can articulate use cases", score: 3 },
      { text: "Organization-wide AI fluency with employees actively using AI tools in daily work", score: 4 },
    ],
  },
  {
    id: 8,
    category: "Governance & Ethics",
    question: "Does your organization have a Responsible AI framework?",
    options: [
      { text: "No formal policies for AI ethics, bias, or responsible use", score: 1 },
      { text: "Informal discussions about AI ethics but no documented framework", score: 2 },
      { text: "Documented responsible AI principles with review processes for new AI projects", score: 3 },
      { text: "Comprehensive AI governance with ethics board, bias auditing, explainability standards, and compliance protocols", score: 4 },
    ],
  },
  {
    id: 9,
    category: "Process Maturity",
    question: "How are AI initiatives currently managed within your organization?",
    options: [
      { text: "Isolated experiments without coordination or standard methodologies", score: 1 },
      { text: "Some AI pilots exist but deployment processes are inconsistent", score: 2 },
      { text: "Structured approach to AI projects with defined stages from ideation to deployment", score: 3 },
      { text: "Mature AI operating model with portfolio management, value tracking, and continuous improvement cycles", score: 4 },
    ],
  },
  {
    id: 10,
    category: "Culture & Change",
    question: "How does your organization approach technology-driven change?",
    options: [
      { text: "Change is typically met with resistance; adoption of new tools is slow", score: 1 },
      { text: "Gradual adoption with pockets of enthusiasm but inconsistent support", score: 2 },
      { text: "Change management processes in place with training and stakeholder engagement", score: 3 },
      { text: "Innovation-oriented culture that embraces experimentation, rapid iteration, and data-driven decisions", score: 4 },
    ],
  },
];

// ============================================================
// MATURITY LEVEL RESULTS
// Based on enterprise consulting maturity models
// ============================================================
export const RESULT_CATEGORIES: ResultCategory[] = [
  {
    minScore: 10,
    maxScore: 17,
    level: "Stage 1",
    title: "AI Aware",
    description: "Your organization is in the early stages of AI awareness. While there may be interest in AI's potential, foundational elements like data infrastructure, talent, and strategy need development before meaningful AI adoption can occur. This is a common starting point for many organizations beginning their AI journey.",
    recommendations: [
      "Conduct a comprehensive data audit to understand current data assets, quality, and accessibility gaps",
      "Build executive awareness through AI workshops showcasing industry-relevant use cases and ROI potential",
      "Identify 2-3 high-impact, low-complexity use cases for initial exploration",
      "Assess current technology stack and create a modernization roadmap",
      "Begin developing an AI literacy program for key business stakeholders",
    ],
  },
  {
    minScore: 18,
    maxScore: 25,
    level: "Stage 2",
    title: "AI Exploring",
    description: "Your organization has begun exploring AI possibilities with some foundational elements in place. There's momentum building, but scaling remains a challenge. Focus on strengthening data foundations, formalizing governance, and moving from pilots to production-ready solutions.",
    recommendations: [
      "Formalize your AI strategy with clear alignment to business objectives and measurable outcomes",
      "Invest in data quality improvement and centralization initiatives",
      "Establish a Responsible AI framework with documented principles and review processes",
      "Launch structured pilot programs in high-value areas with defined success criteria",
      "Build or expand your AI team with targeted hiring and upskilling investments",
    ],
  },
  {
    minScore: 26,
    maxScore: 33,
    level: "Stage 3",
    title: "AI Scaling",
    description: "Your organization has strong AI foundations and is ready to scale. You've moved beyond experimentation with established processes, governance, and talent. The focus should now be on expanding successful initiatives enterprise-wide and optimizing for measurable business value.",
    recommendations: [
      "Scale proven AI solutions across business units with standardized deployment processes",
      "Establish an AI Center of Excellence to drive best practices and knowledge sharing",
      "Implement MLOps practices for reliable, automated model deployment and monitoring",
      "Develop advanced analytics capabilities to measure and optimize AI ROI",
      "Explore strategic partnerships and advanced AI applications for competitive differentiation",
    ],
  },
  {
    minScore: 34,
    maxScore: 40,
    level: "Stage 4",
    title: "AI Leading",
    description: "Your organization is at the forefront of AI adoption with mature capabilities across all dimensions. AI is deeply embedded in operations, driving significant business value and competitive advantage. Focus on innovation, thought leadership, and preparing for next-generation AI capabilities.",
    recommendations: [
      "Pioneer next-generation AI applications including agentic AI and autonomous systems",
      "Develop AI-native products and services that create new revenue streams",
      "Share best practices through industry thought leadership and strategic partnerships",
      "Continuously evolve your AI ethics framework to address emerging challenges",
      "Prepare infrastructure and talent for emerging technologies like quantum-enhanced AI",
    ],
  },
];

// ============================================================
// HELPER FUNCTION TO GET RESULT BASED ON SCORE
// ============================================================
export function getResultCategory(score: number): ResultCategory {
  const category = RESULT_CATEGORIES.find(
    (cat) => score >= cat.minScore && score <= cat.maxScore
  );
  return category || RESULT_CATEGORIES[0];
}

// ============================================================
// QUESTIONNAIRE METADATA
// ============================================================
export const QUESTIONNAIRE_META = {
  title: "AI Readiness Assessment",
  subtitle: "Evaluate your organization's AI maturity across 7 key dimensions",
  description: "This assessment evaluates your organization's readiness to implement and scale AI solutions across strategy, data, technology, talent, governance, process, and culture. Answer based on your organization's current state to receive personalized recommendations.",
  completionTime: "5-7 minutes",
  totalQuestions: QUESTIONNAIRE_QUESTIONS.length,
  ctaText: "Get Your Results",
  bookingCtaText: "Discuss Your Results with Our AI Strategy Team",
  bookingCtaDescription: "Book a complimentary 30-minute consultation to review your assessment results and explore a customized AI roadmap for your organization.",
};
