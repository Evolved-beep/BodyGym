import About from "./components/About"
import Gym from "./components/Gym"
import Header from "./components/Header"
import Join from "./components/Join"
import Parallax from "./components/Parallax"

const Homepage = () => {
  return(
    <section className="flex justify-center flex-col items-center gap-12">
      <Header />
      <Join />
      <Gym />
      <Parallax />
      <About />
    </section>
  )
}

export default Homepage