import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between border border-gray-200 rounded-xl px-3 sm:px-5 py-3">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">TIRTH</h1>
      <nav className="hidden md:flex gap-6 lg:gap-12 text-gray-400 text-base lg:text-xl">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="https://drive.google.com/drive/folders/1uAOAY2jr_bYAyvdIppoLN6eIqRyED3Bl?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
      </nav>
      <div className="flex gap-2 sm:gap-4">
        <a href="https://leetcode.com/u/ig__tirth/" target="_blank" rel="noreferrer" aria-label="LeetCode profile" className="h-8 w-8 flex items-center justify-center bg-gray-200 rounded-lg text-xl">
          <img
            className="h-5 w-5"
            src="https://cdn.simpleicons.org/leetcode/111111"
            alt=""
          />
        </a>
        <a href="https://github.com/TIRTH-25" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="h-8 w-8 flex items-center justify-center bg-gray-200 rounded-lg text-xl">
          <i className="ri-github-fill"></i>
        </a>
        <a href="https://www.linkedin.com/in/tirth25" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="h-8 w-8 flex items-center justify-center bg-gray-200 rounded-lg text-xl">
          <i className="ri-linkedin-fill"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
