import profile from "../../assets/Pfp.jpg";

const About = () => {
  return (
    <div
      className="flex flex-col sm:flex-row
        items-center
        mt-3 sm:mt-5
        border border-gray-200
        rounded-xl
        px-4 sm:px-5
        py-6 sm:py-5 
        gap-5 sm:gap-8 bg-white"
    >
      <img
        className="h-36 w-36 sm:h-44 sm:w-44 lg:h-48 lg:w-48 object-cover object-top rounded-2xl shrink-0 border border-gray-100 shadow-xs"
        src={profile}
        alt="Tirth Patel"
      />
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-serif mb-2 text-neutral-900">
          About Me
        </h2>
        <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
          I'm a Full-Stack Developer with a background in Computer Science. I
          have hands-on experience across the MERN stack, .NET, MySQL, and
          Python, and enjoy building clean, engaging web applications. I've also
          worked on AI and Machine Learning projects, bringing ideas to life
          through practical solutions.
        </p>
      </div>
    </div>
  );
};

export default About;