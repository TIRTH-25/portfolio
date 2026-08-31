import { useState } from "react";

const projects = [
  {
    title: "ATM Banking System",
    date: "June 2026",
    description:
      "An object-oriented Python banking application that simulates day-to-day ATM operations.",
    details:
      "Built account management, authentication, deposits, withdrawals, and balance tracking with a modular class design.",
    stack: ["Python", "OOP", "Authentication"],
  },
  {
    title: "VocalEye – AI Voice Assistant",
    date: "July 2025 – Nov 2025",
    description:
      "A final-year project website for an AI-powered voice assistant designed for visually impaired users.",
    details:
      "Designed and developed an accessible, responsive frontend that communicates the product's voice-first experience.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Fake News Detector",
    date: "Jan 2025 – Mar 2025",
    description: "An ML web app that classifies news content as real or fake.",
    details:
      "Used Logistic Regression and TF-IDF vectorization for text analysis, with NLTK handling text preprocessing.",
    stack: ["Python", "Streamlit", "Scikit-learn", "NLTK"],
  },
  {
    title: "Schedule Bridge",
    date: "July 2024 – Dec 2024",
    description:
      "A web-based scheduling interface for managing and viewing schedules interactively.",
    details:
      "Developed the frontend with a clean, responsive experience for exploring schedule information.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

const LeftContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projects[currentIndex];

  const showPrevious = () =>
    setCurrentIndex((index) => (index - 1 + projects.length) % projects.length);
  const showNext = () =>
    setCurrentIndex((index) => (index + 1) % projects.length);

  return (
    <section
      id="projects"
      className="w-full lg:w-1/2 mt-5 flex flex-col lg:max-h-[500px] border border-gray-200 rounded-xl px-4 sm:px-5 py-3"
    >
      <div className="flex items-center justify-between gap-4 mb-5">
        <h2 className="text-2xl sm:text-3xl">My Projects</h2>
        <p className="text-xs font-medium text-gray-400">
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")}
        </p>
      </div>

      <article className="project-viewer" aria-live="polite">
        <div className="project-viewer__content">
          <p className="project-viewer__date">
            <i className="ri-calendar-line" aria-hidden="true" /> {project.date}
          </p>
          <h3>{project.title}</h3>
          <p className="project-viewer__summary">{project.description}</p>
          {/* <p className="project-viewer__details">{project.details}</p> */}
          <div className="project-viewer__stack">
            <p>Tech stack</p>
            <div>
              {project.stack.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </div>

        <div
          className="project-viewer__controls"
          aria-label="Project navigation"
        >
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Show previous project"
          >
            <i className="ri-arrow-left-line" aria-hidden="true" /> Previous
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Show next project"
          >
            Next <i className="ri-arrow-right-line" aria-hidden="true" />
          </button>
        </div>
      </article>
    </section>
  );
};

export default LeftContent;
