import profile from "../../assets/pfp.jpeg";

const About = () => {
  return (
    <div
      className="flex flex-col sm:flex-row
        items-center
        mt-3 sm:mt-5
        border border-gray-200
        rounded-xl
        px-4 sm:px-5
        py-5 sm:py-3
        gap-5 sm:gap-8"
    >
      <img
        className="h-40 w-40 sm:h-44 sm:w-44 lg:h-52 lg:w-52 object-cover rounded-2xl shrink-0"
        src={profile}
        alt=""
      />
      <div>
        <h2 className="text-2xl sm:text-3xl mb-3">About Me</h2>
        <p className="text-base sm:text-lg text-gray-500">
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
