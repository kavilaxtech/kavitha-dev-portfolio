import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import profileHero from "@/assets/profile-hero.png";

const roles = [
  "Software Developer",
  "Data Science Enthusiast",
  "AI/ML Explorer",
  "Web Developer",
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full opacity-30 blur-3xl"
           style={{ background: "var(--gradient-primary)" }} />
      <div className="pointer-events-none absolute -bottom-40 right-0 w-[420px] h-[420px] rounded-full opacity-20 blur-3xl"
           style={{ background: "var(--gradient-primary)" }} />

      <div className="max-w-6xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        {/* Left */}
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-muted-foreground animate-[fade-in_0.8s_ease-out]">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
              <span className="block text-foreground animate-[fade-up_0.8s_ease-out]">Kavitha</span>
              <span className="block text-gradient-primary animate-[fade-up_0.9s_ease-out_0.1s_both]">Vaishali S</span>
            </h1>

            <div className="h-7 text-lg sm:text-xl text-muted-foreground font-medium">
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span key={idx} className="inline-block animate-[fade-up_0.5s_ease-out]">
                  {roles[idx]}
                </span>
              </span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Building efficient, scalable, and intelligent solutions to real-world problems —
            across software, data, and AI.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} className="text-accent" />
            Chennai, India
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-primary-foreground transition-all hover:scale-[1.02]"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              View Projects
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium border border-border bg-card/40 backdrop-blur hover:bg-card transition-colors"
            >
              Get in touch
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4">
            {[
              { icon: Github, href: "https://github.com/kavilaxtech", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/kavitha-vaishali-s", label: "LinkedIn" },
              { icon: Mail, href: "mailto:kavitha.aiml@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right - profile photo */}
        <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
          {/* Rotating gradient ring */}
          <div
            className="absolute -inset-4 rounded-full opacity-60 blur-2xl animate-[glow-pulse_4s_ease-in-out_infinite]"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div
            className="absolute inset-0 rounded-3xl border-2 border-primary/30"
            style={{
              background: "conic-gradient(from 0deg, transparent, hsl(var(--primary)/0.4), transparent, hsl(var(--accent)/0.4), transparent)",
              animation: "spin 12s linear infinite",
              padding: "2px",
            }}
          />
          {/* Photo */}
          <div className="relative rounded-3xl overflow-hidden glass-card animate-[float_6s_ease-in-out_infinite] aspect-square">
            <img
              src={profileHero}
              alt="Kavitha Vaishali S — portrait"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          {/* Floating stat cards */}
          <div className="absolute -left-4 top-12 glass-card rounded-2xl px-4 py-3 animate-[float-slow_9s_ease-in-out_infinite] z-10">
            <div className="text-2xl font-bold text-gradient-primary">10+</div>
            <div className="text-xs text-muted-foreground">Projects built</div>
          </div>
          <div className="absolute -right-2 bottom-16 glass-card rounded-2xl px-4 py-3 animate-[float_7s_ease-in-out_infinite] z-10">
            <div className="text-2xl font-bold text-gradient-primary">3</div>
            <div className="text-xs text-muted-foreground">Internships</div>
          </div>
        </div>
      </div>
    </section>
  );
}
