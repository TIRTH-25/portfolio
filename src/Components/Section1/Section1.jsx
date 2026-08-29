import About from "./About"
import Bottom from "./Bottom"
import Navbar from "./Navbar"

const Section1 = () => {
  return (
    <div className="min-h-screen w-full px-4 sm:px-8 lg:px-20 xl:px-30 py-5">
        <Navbar />
        <About />
        <Bottom />
    </div>
  )
}

export default Section1