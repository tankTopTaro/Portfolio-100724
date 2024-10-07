import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

const App = () => {

  return (
    <main id="gradient-bg" className="flex flex-col items-center overflow-x-hidden font-orbitron">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </main>
  )
}

export default App