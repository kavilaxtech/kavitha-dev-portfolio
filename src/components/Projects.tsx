import { useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import medibot from "@/assets/project-medibot.jpg";
import learning from "@/assets/project-learning.jpg";
import cosplay from "@/assets/project-cosplay.jpg";

type Project = {
  title: string;
  tagline: string;
  description: string;
  image: string;
  stack: string[];
  problem: string;
  solution: string;
  outcome: string;
};

const projects: Project[] = [
  {
    title: "MediBot",
    tagline: "AI-powered medical assistant",
    description: "Conversational AI that helps users understand symptoms and find reliable health guidance.",
    image: medibot,
    stack: ["Python", "NLP", "Flask", "Scikit-learn"],
    problem: "People often struggle to understand symptoms or interpret medical information quickly and reliably.",
    solution: "Built a chatbot that uses NLP to interpret natural-language symptom descriptions and respond with structured, source-aware guidance.",
    outcome: "Achieved accurate intent classification and a smooth Q&A flow — reducing time to first useful answer for the end user.",
  },
  {
    title: "AI Learning Assistant",
    tagline: "Personalised study companion",
    description: "An assistant that adapts content delivery to each learner's level and progress.",
    image: learning,
    stack: ["Python", "ML", "OpenAI API", "React"],
    problem: "Static learning content rarely fits each student's pace, gaps, or learning style.",
    solution: "Designed an adaptive system that surfaces personalised explanations, quizzes, and revision plans based on user interactions.",
    outcome: "Improved learner engagement and retention through targeted micro-content and feedback loops.",
  },
  {
    title: "Cosplay E-commerce",
    tagline: "Themed online store",
    description: "Full e-commerce experience for cosplay enthusiasts — catalog, cart, and checkout flows.",
    image: cosplay,
    stack: ["HTML", "CSS", "JavaScript"],
    problem: "Niche cosplay shoppers had limited dedicated platforms with smooth UX.",
    solution: "Built an end-to-end storefront with product browsing, search, cart, and order management.",
    outcome: "Delivered a responsive, themed shopping experience with reliable backend data handling.",
  },
];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work — built to solve, not just to ship."
          description="A few projects that show how I approach problems across AI, data, and the web."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <button
                onClick={() => setActive(p)}
                className="group text-left w-full glass-card hover-lift rounded-2xl overflow-hidden h-full flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/70 backdrop-blur border border-border flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs text-accent font-medium mb-1">{p.tagline}</div>
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="text-[11px] px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-foreground/80">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4 animate-[fade-in_0.2s_ease-out]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
              <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/70 backdrop-blur border border-border flex items-center justify-center hover:bg-card"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-7 space-y-5">
              <div>
                <div className="text-xs text-accent font-medium mb-1">{active.tagline}</div>
                <h3 className="text-2xl font-bold">{active.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {active.stack.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
                    {s}
                  </span>
                ))}
              </div>
              {[
                { label: "Problem", text: active.problem },
                { label: "Solution", text: active.solution },
                { label: "Outcome", text: active.outcome },
              ].map((b) => (
                <div key={b.label}>
                  <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">
                    {b.label}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
