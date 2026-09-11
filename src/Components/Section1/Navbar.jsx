import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between border border-gray-200 rounded-xl px-3 sm:px-5 py-3 bg-white">
      {/* Brand Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif tracking-tight">
        TIRTH
      </h1>

      {/* High-Signal Middle Section: Status & Email */}
      <div className="hidden md:flex items-center border border-gray-200 bg-gray-50/75 rounded-full p-1 pl-3 pr-1 text-xs font-mono">
        <div className="flex items-center gap-2 mr-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-gray-600 font-medium whitespace-nowrap">
            Available for work
          </span>
        </div>

        <span className="h-3.5 w-px bg-gray-200 mr-2" aria-hidden="true" />

        <a
          href="mailto:tirth2545@hotmail.com"
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-gray-500 hover:text-black hover:bg-white hover:shadow-xs transition-all"
          aria-label="Send email"
        >
          <i className="ri-mail-line text-sm" aria-hidden="true" />
          <span>tirth2545@hotmail.com</span>
        </a>
      </div>

      {/* Social / Profile Links */}
      <div className="flex items-center gap-2 sm:gap-3">
        <a
          href="https://leetcode.com/u/ig__tirth/"
          target="_blank"
          rel="noreferrer"
          aria-label="LeetCode profile"
          className="h-9 w-9 flex items-center justify-center bg-gray-100 hover:bg-gray-200 border border-gray-200/80 rounded-xl transition-colors"
        >
          <img
            className="h-4 w-4"
            src="https://cdn.simpleicons.org/leetcode/111111"
            alt=""
          />
        </a>

        <a
          href="https://github.com/TIRTH-25"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="h-9 w-9 flex items-center justify-center bg-gray-100 hover:bg-gray-200 border border-gray-200/80 rounded-xl text-lg text-gray-800 transition-colors"
        >
          <i className="ri-github-fill" />
        </a>

        <a
          href="https://www.linkedin.com/in/tirth25"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="h-9 w-9 flex items-center justify-center bg-gray-100 hover:bg-gray-200 border border-gray-200/80 rounded-xl text-lg text-gray-800 transition-colors"
        >
          <i className="ri-linkedin-fill" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
