import { ExternalLink, BadgeCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const certs = [
  { name: "Python for Data Science", org: "NPTEL" },
  { name: "Machine Learning Foundations", org: "Coursera" },
  { name: "Web Development", org: "Udemy" },
  { name: "SQL Essentials", org: "HackerRank" },
  { name: "Data Analytics", org: "Google" },
  { name: "AI & ML Workshop", org: "IIT Madras" },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Certifications"
          title="Continuous learning, formally backed."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <div className="glass-card hover-lift rounded-2xl p-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 text-accent">
                    <BadgeCheck size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium truncate">{c.name}</div>
                    <div className="text-xs text-muted-foreground">{c.org}</div>
                  </div>
                </div>
                <a href="#" className="text-muted-foreground hover:text-foreground" aria-label="View certificate">
                  <ExternalLink size={16} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
