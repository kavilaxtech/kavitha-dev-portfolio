import { Trophy, Award, Code2, Brain, Mic } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const items = [
  { icon: Trophy, title: "1st place — QuantMaster", note: "Quantitative challenge winner" },
  { icon: Award, title: "Hackathon Finalist", note: "Selected among top teams" },
  { icon: Code2, title: "Python Competition — 2nd", note: "Coding contest runner-up" },
  { icon: Brain, title: "Technical Quiz — 3rd", note: "Inter-college tech quiz" },
  { icon: Mic, title: "Best Speaker", note: "Recognised for communication" },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Achievements"
          title="Recognition that reflects the work."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 70}>
              <div className="glass-card hover-lift rounded-2xl p-5 flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <it.icon size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold leading-tight">{it.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{it.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
