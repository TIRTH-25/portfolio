const RightContent = () => {
  const skillGroups = [
    {
      label: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    },
    {
      label: "Backend",
      skills: ["Python", "C#", "Node.js", "Express.js", "REST APIs", "ASP.NET"],
    },
    {
      label: "Database & Cloud",
      skills: ["MySQL", "SQL", "MongoDB", "MongoDB Atlas"],
    },
    {
      label: "Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code"],
    },
  ];

  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-between">
      {/* Skills Box */}
      <div className="mt-5 flex flex-1 flex-col border border-gray-200 rounded-xl px-4 sm:px-5 py-3">
        <h2 className="text-2xl sm:text-3xl mb-4">Skills</h2>
        <div className="skills-list flex flex-col gap-3">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-200 px-3 py-1.5 rounded-xl text-sm text-gray-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resume Box */}
      <div className="flex flex-col sm:flex-row sm:items-center mt-5 border border-gray-200 rounded-xl px-4 sm:px-5 py-3 gap-3 sm:gap-8 bg-white">
        <h2 className="text-2xl sm:text-3xl shrink-0 font-serif">Resume</h2>

        <div className="flex-1 px-4 py-3.5 sm:py-5 flex items-center justify-between bg-black rounded-2xl gap-3">
          <h4 className="text-white text-xs sm:text-base font-medium">
            More details about my career
          </h4>

          <a
            href="https://drive.google.com/drive/folders/1uAOAY2jr_bYAyvdIppoLN6eIqRyED3Bl?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-1.5 sm:px-6 sm:py-2 bg-white text-black text-xs sm:text-sm font-medium rounded-xl hover:bg-gray-200 transition shrink-0"
          >
            Open
          </a>
        </div>
      </div>
    </div>
  );
};

export default RightContent;