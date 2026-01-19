"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, Calendar, User, BookOpen } from "lucide-react";
import { notFound } from "next/navigation";

const ARTICLES: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  description: string;
  content: string[];
  keyTakeaways: string[];
  relatedArticles: { title: string; slug: string }[];
}> = {
  "ai-dividend-age": {
    title: "The dividend age: How AI investments are turning into real business value",
    category: "AI Strategy",
    date: "January 12, 2026",
    readTime: "8 min read",
    author: "Zentreks Research Team",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    description: "Our latest research reveals that organizations with mature AI capabilities are seeing 40% higher productivity gains.",
    content: [
      "The era of AI experimentation is giving way to the age of AI dividends. After years of investment in artificial intelligence capabilities, leading organizations are now seeing substantial returns that are reshaping competitive dynamics across industries. Our latest research, conducted across 500 enterprises globally, reveals that companies with mature AI implementations are experiencing productivity gains 40% higher than their peers.",
      "The shift from experimentation to value realization marks a critical inflection point. Organizations that invested early in building robust data infrastructure, developing AI talent, and creating governance frameworks are now pulling ahead. These AI leaders are not just automating existing processes—they're fundamentally reimagining how work gets done, how decisions are made, and how value is created for customers.",
      "Three key factors distinguish AI leaders from the rest of the pack. First, they've moved beyond isolated use cases to enterprise-wide AI integration, embedding intelligent capabilities into core business processes. Second, they've invested heavily in change management, ensuring that their workforce is equipped to work alongside AI systems effectively. Third, they've established clear governance structures that enable rapid scaling while managing risks appropriately.",
      "The financial impact is becoming increasingly clear. Our analysis shows that AI leaders are achieving cost reductions of 25-35% in operations where AI is fully deployed, while simultaneously improving quality metrics and customer satisfaction scores. More importantly, these organizations are using AI to identify new revenue opportunities, with 60% reporting that AI-driven insights have led to successful new product launches or market expansions.",
      "For organizations still in the early stages of their AI journey, the message is clear: the window for building foundational capabilities is narrowing. The competitive advantages enjoyed by AI leaders will only compound over time, making it increasingly difficult for laggards to catch up. The time to accelerate AI investment and implementation is now."
    ],
    keyTakeaways: [
      "AI leaders see 40% higher productivity gains than peers",
      "Enterprise-wide integration beats isolated use cases",
      "Change management is critical for AI success",
      "25-35% cost reductions achieved in mature AI deployments",
      "60% of AI leaders report AI-driven new revenue streams"
    ],
    relatedArticles: [
      { title: "How AI is reshaping business strategy in 2026", slug: "ai-strategy-2026" },
      { title: "The future of work: Automation meets human potential", slug: "future-of-work" }
    ]
  },
  "ai-strategy-2026": {
    title: "How AI is reshaping business strategy in 2026",
    category: "AI Strategy",
    date: "January 10, 2026",
    readTime: "6 min read",
    author: "Dr. Sarah Chen, Chief Strategy Officer",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
    description: "Discover how leading companies are leveraging AI to gain competitive advantage and transform their operations.",
    content: [
      "Business strategy in 2026 looks fundamentally different than it did just five years ago, and artificial intelligence is the primary driver of this transformation. The most successful companies are no longer asking whether to incorporate AI into their strategy—they're asking how to make AI the foundation upon which their entire competitive approach is built.",
      "The strategic implications of AI extend far beyond operational efficiency. Leading organizations are using AI to fundamentally rethink their value propositions, customer relationships, and competitive positioning. AI is enabling hyper-personalization at scale, predictive decision-making that anticipates market shifts, and the creation of entirely new categories of products and services that weren't possible before.",
      "One of the most significant strategic shifts we're observing is the move from reactive to predictive business models. Companies with advanced AI capabilities can now anticipate customer needs before they're expressed, identify market opportunities before competitors, and optimize resource allocation in real-time based on predicted outcomes. This predictive advantage is creating substantial first-mover benefits in markets across industries.",
      "The competitive landscape is also being reshaped by AI-native startups that have built their entire business models around AI capabilities. These organizations don't have legacy systems to modernize or cultural resistance to overcome—they're born with AI in their DNA. Traditional incumbents must accelerate their AI transformation efforts to avoid being disrupted by these nimble competitors.",
      "For strategic leaders, the imperative is clear: AI must be elevated from a technology initiative to a strategic priority. This means ensuring board-level oversight of AI strategy, allocating resources commensurate with the strategic importance of AI, and building the organizational capabilities needed to compete in an AI-driven world."
    ],
    keyTakeaways: [
      "AI is becoming the foundation of competitive strategy",
      "Predictive business models are replacing reactive approaches",
      "AI-native startups pose significant disruption threats",
      "Board-level AI oversight is becoming essential",
      "Hyper-personalization at scale is now achievable"
    ],
    relatedArticles: [
      { title: "The dividend age: How AI investments are turning into real business value", slug: "ai-dividend-age" },
      { title: "2026 Economic outlook: Navigating uncertainty", slug: "economic-outlook-2026" }
    ]
  },
  "future-of-work": {
    title: "The future of work: Automation meets human potential",
    category: "Digital Transformation",
    date: "January 8, 2026",
    readTime: "5 min read",
    author: "Marcus Williams, Workforce Strategy Lead",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    description: "Explore how automation is creating new opportunities for workforce development and organizational growth.",
    content: [
      "The conversation about automation and work has shifted dramatically. Where early discussions focused on job displacement and technological unemployment, today's leading organizations are discovering that the most powerful applications of automation actually amplify human capabilities rather than replace them. This human-machine collaboration is creating unprecedented opportunities for both productivity and job satisfaction.",
      "The most successful automation implementations share a common characteristic: they free humans from repetitive, low-value tasks so they can focus on work that requires creativity, empathy, and complex judgment. In customer service, for example, AI handles routine inquiries while human agents focus on complex problems that require emotional intelligence. In manufacturing, robots perform dangerous or repetitive tasks while human workers focus on quality control, innovation, and continuous improvement.",
      "Organizations that approach automation with a human-centric mindset are seeing better outcomes across all metrics. Employee engagement scores are higher because workers feel their time is being respected and their skills are being utilized appropriately. Customer satisfaction improves because human touchpoints are reserved for moments that truly matter. And productivity gains are more sustainable because the automation is designed with human workflows in mind.",
      "The skills required for success in an automated workplace are evolving rapidly. Technical skills remain important, but the premium is increasingly on distinctly human capabilities: critical thinking, creativity, emotional intelligence, and the ability to work effectively with AI systems. Organizations must invest in reskilling and upskilling programs to ensure their workforce can thrive in this new environment.",
      "Looking ahead, the organizations that will lead are those that view automation not as a cost-cutting measure but as a strategic investment in human potential. By thoughtfully deploying automation to handle routine work, they're creating space for their people to do what humans do best: innovate, connect, and create value in ways that machines cannot replicate."
    ],
    keyTakeaways: [
      "Human-machine collaboration outperforms pure automation",
      "Automation should amplify human capabilities, not replace them",
      "Employee engagement improves with thoughtful automation",
      "Soft skills are increasingly valuable in automated workplaces",
      "Reskilling investment is essential for workforce adaptation"
    ],
    relatedArticles: [
      { title: "The dividend age: How AI investments are turning into real business value", slug: "ai-dividend-age" },
      { title: "Industry 4.0: Lessons from early adopters", slug: "industry-4-lessons" }
    ]
  },
  "economic-outlook-2026": {
    title: "2026 Economic outlook: Navigating uncertainty",
    category: "Market Trends",
    date: "January 5, 2026",
    readTime: "7 min read",
    author: "Dr. James Morrison, Chief Economist",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
    description: "Our analysis of global economic trends and strategic recommendations for business leaders.",
    content: [
      "As we enter 2026, the global economic landscape presents a complex mix of opportunities and challenges. While technological innovation continues to drive productivity gains and create new markets, businesses must navigate persistent uncertainty around geopolitical tensions, supply chain resilience, and the ongoing transition to sustainable business models. Our analysis suggests that organizations with strong fundamentals and adaptive capabilities will thrive, while those slow to adjust may struggle.",
      "The technology sector remains a bright spot, with AI-related investments continuing to attract capital and generate returns. However, we're seeing a maturation of the market, with investors increasingly focused on companies that can demonstrate clear paths to profitability rather than speculative growth stories. This shift favors established players with proven AI capabilities and sustainable business models.",
      "Supply chain dynamics continue to evolve as organizations balance efficiency with resilience. The lessons of recent years have led many companies to diversify their supplier bases, nearshore critical operations, and invest in visibility and flexibility across their supply networks. These investments, while initially costly, are proving their value as disruptions become a regular feature of the business environment.",
      "Sustainability is no longer optional—it's a strategic imperative. Regulatory requirements are tightening, consumer preferences are shifting, and investors are increasingly incorporating ESG factors into their decision-making. Organizations that proactively embrace sustainability are finding that it drives innovation, attracts talent, and creates competitive advantages that extend far beyond compliance.",
      "Our recommendations for business leaders navigating this environment: invest in adaptive capabilities that allow rapid response to changing conditions, maintain strong balance sheets that provide resilience against shocks, and prioritize the strategic initiatives—particularly AI and sustainability—that will define competitive advantage in the years ahead."
    ],
    keyTakeaways: [
      "Technology sector remains strong but favors proven performers",
      "Supply chain resilience is now a strategic priority",
      "Sustainability has become a competitive imperative",
      "Adaptive capabilities are essential for navigating uncertainty",
      "Strong balance sheets provide crucial strategic flexibility"
    ],
    relatedArticles: [
      { title: "How AI is reshaping business strategy in 2026", slug: "ai-strategy-2026" },
      { title: "The rise of AI-powered risk management", slug: "ai-risk-management" }
    ]
  },
  "ai-healthcare": {
    title: "AI in healthcare: From diagnosis to treatment optimization",
    category: "Healthcare",
    date: "January 3, 2026",
    readTime: "6 min read",
    author: "Dr. Emily Roberts, Healthcare Practice Lead",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
    description: "How healthcare organizations are using AI to improve patient outcomes and reduce costs.",
    content: [
      "Healthcare is experiencing an AI revolution that promises to fundamentally transform how we diagnose, treat, and manage disease. From early detection of cancer through imaging analysis to personalized treatment recommendations based on genetic profiles, AI is enabling levels of precision and efficiency that were unimaginable just a few years ago. The organizations leading this transformation are achieving remarkable results: improved patient outcomes, reduced costs, and enhanced access to care.",
      "Diagnostic AI has emerged as one of the most mature and impactful applications. AI systems are now matching or exceeding human expert performance in analyzing medical images across radiology, pathology, and dermatology. More importantly, these systems can operate at scale, enabling screening programs that would be impossible with human specialists alone. Early detection rates for conditions like diabetic retinopathy and certain cancers have improved dramatically in organizations deploying these tools.",
      "Treatment optimization represents the next frontier. By analyzing vast datasets of patient outcomes, AI systems can identify which treatments are most likely to be effective for individual patients based on their specific characteristics. This personalized approach is replacing one-size-fits-all protocols, leading to better outcomes and fewer adverse events. In oncology, AI-driven treatment selection has improved response rates by 20-30% in early implementations.",
      "Operational efficiency gains are equally significant. AI is streamlining administrative processes, optimizing resource allocation, and predicting patient flows to reduce wait times and improve utilization. Healthcare systems implementing comprehensive AI strategies are seeing 15-25% reductions in operational costs while simultaneously improving quality metrics.",
      "The path to widespread AI adoption in healthcare requires careful attention to validation, regulation, and ethical considerations. Healthcare AI systems must be rigorously tested, transparently governed, and designed to augment rather than replace clinical judgment. Organizations that navigate these challenges successfully will be positioned to deliver the healthcare of the future: more effective, more efficient, and more accessible."
    ],
    keyTakeaways: [
      "Diagnostic AI now matches expert human performance",
      "Personalized treatment selection improves outcomes 20-30%",
      "Operational AI drives 15-25% cost reductions",
      "Rigorous validation and governance are essential",
      "AI augments rather than replaces clinical judgment"
    ],
    relatedArticles: [
      { title: "The dividend age: How AI investments are turning into real business value", slug: "ai-dividend-age" },
      { title: "The future of work: Automation meets human potential", slug: "future-of-work" }
    ]
  },
  "ai-risk-management": {
    title: "The rise of AI-powered risk management",
    category: "Financial Services",
    date: "December 28, 2025",
    readTime: "5 min read",
    author: "Michael Chang, Financial Services Practice Lead",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    description: "Financial institutions are revolutionizing risk assessment with machine learning models.",
    content: [
      "Risk management is being transformed by artificial intelligence, and financial institutions are leading the charge. Traditional risk models, built on historical data and linear assumptions, are giving way to sophisticated machine learning systems that can identify patterns and predict risks that humans might miss. The result is more accurate risk assessment, faster decision-making, and better protection against both known and emerging threats.",
      "Credit risk assessment has been revolutionized by AI. Machine learning models can analyze thousands of variables—far more than traditional scorecards—to predict default probability with unprecedented accuracy. This enables more precise pricing, better portfolio management, and expanded access to credit for borrowers who would have been rejected by conventional models despite being creditworthy.",
      "Fraud detection represents another area of dramatic AI impact. AI systems can analyze transaction patterns in real-time, identifying suspicious activity that would be invisible to rule-based systems. Leading institutions are reporting 50-70% improvements in fraud detection rates while simultaneously reducing false positives that frustrate legitimate customers. The economic impact of these improvements runs into billions of dollars annually.",
      "Market risk and portfolio management are also being enhanced by AI. Machine learning models can process vast amounts of market data, news, and alternative data sources to identify risks and opportunities faster than traditional quantitative approaches. During recent market volatility, AI-equipped firms demonstrated superior risk management, avoiding losses that impacted competitors.",
      "The regulatory environment for AI in financial services is evolving rapidly. Institutions must ensure their AI systems are explainable, fair, and robust. Those that can demonstrate responsible AI practices will find regulators more receptive and will build trust with customers and stakeholders. The winners in AI-powered risk management will be those who combine technical excellence with strong governance."
    ],
    keyTakeaways: [
      "AI credit models analyze thousands more variables than traditional methods",
      "Fraud detection improved 50-70% with AI implementation",
      "Real-time risk assessment enables faster decision-making",
      "Explainability and fairness are regulatory requirements",
      "Responsible AI practices build regulatory and customer trust"
    ],
    relatedArticles: [
      { title: "2026 Economic outlook: Navigating uncertainty", slug: "economic-outlook-2026" },
      { title: "How AI is reshaping business strategy in 2026", slug: "ai-strategy-2026" }
    ]
  },
  "industry-4-lessons": {
    title: "Industry 4.0: Lessons from early adopters",
    category: "Manufacturing",
    date: "December 22, 2025",
    readTime: "8 min read",
    author: "Thomas Anderson, Manufacturing Practice Lead",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80",
    description: "What successful smart factory implementations can teach us about digital transformation.",
    content: [
      "The promise of Industry 4.0—smart factories powered by IoT, AI, and advanced automation—has captivated manufacturing leaders for years. Now, as early adopters move from pilot projects to scaled implementations, we can draw concrete lessons about what works, what doesn't, and what separates successful transformations from failed experiments. The insights from these pioneers offer a roadmap for manufacturers beginning their Industry 4.0 journey.",
      "The most important lesson from successful implementations is the primacy of clear business outcomes. Organizations that began with technology—deploying sensors and systems without clear objectives—often struggled to demonstrate value. In contrast, leaders who started by identifying specific operational challenges and then applied Industry 4.0 technologies to address them achieved rapid, measurable results that justified continued investment.",
      "Data architecture has emerged as a critical success factor. Early adopters discovered that connecting machines and collecting data is the easy part; the hard part is creating a data infrastructure that enables meaningful analysis and action. Successful organizations invested heavily in data platforms, standardization, and governance before scaling their IoT deployments. Those that skipped this step found themselves drowning in data they couldn't use.",
      "Change management proved more challenging than anticipated. Smart factories require new skills, new processes, and new ways of working. Organizations that invested in workforce training, involved frontline workers in design and implementation, and created clear career paths for digital manufacturing roles achieved better adoption and sustainability than those that focused solely on technology deployment.",
      "The ROI from Industry 4.0 is real but requires patience. Early adopters report efficiency gains of 20-40%, quality improvements of 15-25%, and significant reductions in unplanned downtime. However, these results typically emerge 18-24 months after initial deployment, requiring sustained commitment through the inevitable challenges of implementation. Organizations with executive sponsorship and long-term investment horizons are best positioned to realize the full potential of Industry 4.0."
    ],
    keyTakeaways: [
      "Start with business outcomes, not technology deployment",
      "Data architecture investment is essential before scaling",
      "Change management is harder than technology implementation",
      "Workforce training and involvement drive adoption",
      "Full ROI emerges 18-24 months after deployment"
    ],
    relatedArticles: [
      { title: "The future of work: Automation meets human potential", slug: "future-of-work" },
      { title: "The dividend age: How AI investments are turning into real business value", slug: "ai-dividend-age" }
    ]
  }
};

export default function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const article = ARTICLES[slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0B1120] pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-12 border-b border-[#1F2937]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Link */}
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[#6B7A8F] hover:text-[#C9A961] transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Insights
            </Link>

            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-xs bg-[#1E3A5F]/20 text-[#1E3A5F] px-3 py-1 font-medium">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-[#6B7A8F]">
                <Calendar size={14} />
                {article.date}
              </span>
              <span className="flex items-center gap-1 text-sm text-[#6B7A8F]">
                <Clock size={14} />
                {article.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1E3A5F] rounded-full flex items-center justify-center">
                <User size={20} className="text-[#C9A961]" />
              </div>
              <span className="text-[#B8C5D6]">{article.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video rounded-lg overflow-hidden"
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-invert max-w-none"
          >
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-[#B8C5D6] text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Key Takeaways */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-8 bg-[#111827] border border-[#1F2937] rounded-lg"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen size={20} className="text-[#C9A961]" />
              Key Takeaways
            </h3>
            <ul className="space-y-3">
              {article.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#1E3A5F] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-white font-bold">{index + 1}</span>
                  </span>
                  <span className="text-[#B8C5D6]">{takeaway}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 border-t border-[#1F2937]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-white mb-8">Related Insights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {article.relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/insights/${related.slug}`}
                className="block bg-[#111827] border border-[#1F2937] p-6 hover:border-[#1E3A5F]/50 transition-all group"
              >
                <h4 className="text-lg font-semibold text-white group-hover:text-[#C9A961] transition-colors">
                  {related.title}
                </h4>
                <span className="inline-flex items-center gap-1 text-[#C9A961] text-sm mt-4">
                  Read article
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1E3A5F]/10 to-[#C9A961]/10 border-t border-[#1E3A5F]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to apply these insights to your business?
          </h2>
          <p className="text-[#B8C5D6] mb-8">
            Let's discuss how we can help you implement these strategies
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule Consultation
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
