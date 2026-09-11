import { useState, useEffect, useCallback } from "react";

const projects = [
  {
    title: "GYM Website — MERN Stack",
    date: "Aug 2026",
    description:
      "End-to-end fitness management web application with responsive interface and database integration.",
    details:
      "Engineered backend REST APIs with Express and Node.js, integrated MongoDB for data persistence, and connected full application workflows to a React frontend.",
    stack: ["MongoDB Atlas", "Express.js", "React.js", "Node.js", "REST APIs"],
    liveUrl: "https://tirth-25.github.io/GYM-Website/",
    githubUrl: "https://github.com/TIRTH-25/GYM-Website",
  },
  {
    title: "ATM Banking System",
    date: "June 2026",
    description:
      "Object-oriented Python application simulating real-world automated teller machine workflows.",
    details:
      "Implemented modular architecture applying OOP principles (encapsulation, inheritance, polymorphism) with pin authentication and transaction tracking.",
    stack: ["Python", "OOP", "System Design"],
    liveUrl: "",
    githubUrl: "https://github.com/TIRTH-25/ATM-Banking-System",
  },
  {
    title: "VocalEye – AI Voice Assistant",
    date: "July 2025 – Nov 2025",
    description:
      "Accessible voice-first interface built for a final-year assistive tech project aiding visually impaired users.",
    details:
      "Engineered an intuitive, high-contrast, screen-reader friendly web interface optimized for vocal interaction and audio feedback cues.",
    stack: ["HTML", "CSS", "JavaScript", "Accessibility"],
    liveUrl: "https://tirth-25.github.io/VocalEye-site/",
    githubUrl: "https://github.com/TIRTH-25/VocalEye-site",
  },
  // {
  //   title: "Fake News Detector",
  //   date: "Jan 2025 – Mar 2025",
  //   description:
  //     "Machine learning web app that predicts article credibility and detects misinformation in real time.",
  //   details:
  //     "Trained a Logistic Regression classifier using TF-IDF vectorization and NLTK text preprocessing pipelines; deployed via Streamlit.",
  //   stack: ["Python", "Scikit-learn", "Streamlit", "NLTK"],
  //   liveUrl: "",
  //   githubUrl: "https://github.com/TIRTH-25/Fake-News-Detector",
  // },
  {
    title: "Schedule Bridge",
    date: "July 2024 – Dec 2024",
    description:
      "Interactive front-end calendar and schedule coordination tool for timetable visualization.",
    details:
      "Engineered responsive views and clean event manipulation with vanilla JavaScript and dynamic DOM updates.",
    stack: ["JavaScript", "HTML", "CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/Shivam-5403/Schedule-Bridge",
  },
];

const LeftContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projects[currentIndex];

  const showPrevious = useCallback(() => {
    setCurrentIndex((index) => (index - 1 + projects.length) % projects.length);
  }, []);

  const showNext = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % projects.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") showPrevious();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showPrevious, showNext]);

  return (
    <section
      id="projects"
      className="w-full lg:w-1/2 mt-5 flex flex-col min-h-[480px] lg:max-h-[520px] border border-gray-200 rounded-xl px-4 sm:px-5 py-4 bg-white"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <h2 className="text-2xl sm:text-3xl font-serif">My Projects</h2>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-medium text-gray-400">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Main Project Card */}
      <article
        className="flex-1 flex flex-col justify-between bg-[#111113] text-white rounded-xl p-5 sm:p-6"
        aria-live="polite"
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
            <span className="flex items-center gap-1.5">
              <i className="ri-calendar-line" aria-hidden="true" /> {project.date}
            </span>

            {/* Quick Action Links */}
            <div className="flex items-center gap-3">
              {project.githubUrl?.trim() && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  <i className="ri-github-fill text-base" />
                  <span className="hidden sm:inline text-xs">Code</span>
                </a>
              )}

              {project.liveUrl?.trim() && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                  aria-label={`View live demo for ${project.title}`}
                >
                  <i className="ri-external-link-line text-base" />
                  <span className="hidden sm:inline text-xs">Demo</span>
                </a>
              )}
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mt-1">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            {project.description}
          </p>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed border-l-2 border-neutral-700 pl-3 my-1">
            {project.details}
          </p>

          <div className="mt-2">
            <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-2">
              Tech stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((technology) => (
                <span
                  key={technology}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-800 text-neutral-300 border border-neutral-700/60"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Area with Clean Divider Line */}
        <div className="mt-4">
          <div className="w-full h-px bg-neutral-800/80 mb-4" />
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={showPrevious}
              className="text-xs font-medium text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 py-1.5 px-3 rounded-lg border border-neutral-800 hover:bg-neutral-800 active:scale-95"
              aria-label="Show previous project"
            >
              <i className="ri-arrow-left-line" aria-hidden="true" /> Previous
            </button>

            <button
              type="button"
              onClick={showNext}
              className="text-xs font-medium text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 py-1.5 px-3 rounded-lg border border-neutral-800 hover:bg-neutral-800 active:scale-95"
              aria-label="Show next project"
            >
              Next <i className="ri-arrow-right-line" aria-hidden="true" />
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default LeftContent;