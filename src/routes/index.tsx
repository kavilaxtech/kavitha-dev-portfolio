import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kavitha Vaishali S — Software Developer & AI/ML Explorer" },
      {
        name: "description",
        content:
          "Portfolio of Kavitha Vaishali S — a versatile technology student building scalable software, data, and AI solutions to real-world problems.",
      },
      { property: "og:title", content: "Kavitha Vaishali S — Portfolio" },
      {
        property: "og:description",
        content: "Software, Data Science, and AI/ML projects, internships, and achievements.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Certifications />
      <Contact />
    </main>
  );
}
