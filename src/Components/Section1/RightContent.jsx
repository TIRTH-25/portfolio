const RightContent = () => {
  const skillGroups = [
  {
    label: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"]
  },
  {
    label: "Backend",
    skills: ["Python", "C#", "ASP.NET Core", "Web API"]
  },
  {
    label: "Database",
    skills: ["MySQL", "MongoDB"]
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Postman", "Docker"]
  }
];
  return (
    <div className="w-full lg:w-1/2 flex flex-col lg:max-h-[500px]">
      <div className="mt-0 lg:mt-5 flex flex-1 min-h-0 flex-col border border-gray-200 rounded-xl px-4 sm:px-5 py-3">
        <h2 className="text-2xl sm:text-3xl mb-5">Skills</h2>
        <div className="skills-list overflow-y-auto pr-1 max-h-[280px]">
          {skillGroups.map((group) => (
            <div key={group.label} className="mb-4 last:mb-0">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="bg-gray-200 px-3 py-1.5 rounded-xl text-sm text-gray-500">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center mt-5 border border-gray-200 rounded-xl px-4 sm:px-5 py-3 gap-4 sm:gap-8">
        <h2 className="text-2xl sm:text-3xl shrink-0">Resume</h2>

        <div className="flex-1 px-4 py-5 sm:py-6 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center justify-between bg-black rounded-2xl">
          <h4 className="text-white text-sm sm:text-base">More details about my career</h4>

          <a
            href="https://drive.google.com/drive/folders/1uAOAY2jr_bYAyvdIppoLN6eIqRyED3Bl?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 bg-white text-black rounded-xl hover:bg-gray-200 transition"
          >
            Open
          </a>
        </div>
      </div>
    </div>
 
  );
};

export default RightContent;
