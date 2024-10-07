import { useState } from "react"
import { projects } from "../constants"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled, RxDot } from "react-icons/rx"
import StackIcon from "tech-stack-icons"


const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === projects.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const gotoSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section id='projects' className='w-full max-w-[1400px] h-[100vh] m-auto py-16 px-4 relative group'>
      <div className="w-full h-full relative">
      <div className="w-full h-full absolute rounded-2xl bg-center bg-cover" style={{backgroundImage: `url(${projects[currentIndex].screenshot})`}} >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-white/30 via-black/50"></div>
      </div>
      <div className="relative text-center p-6 px-6 py-14 md:px-12 top-[50%] flex flex-col items-center">
        <a href={projects[currentIndex].link} target="_blank" className="mb-6 text-3xl w-max font-medium text-white cursor-pointer hover:text-green-500">{projects[currentIndex].title}</a>
        <div className="mb-4">
          {projects[currentIndex].description.map((n) => (
            <StackIcon name={n} />
          ))}
        </div>
      </div>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {projects.map((project, index) => (
          <div key={index} onClick={() => gotoSlide(index)} className="text-2xl cursor-pointer">
            {index === currentIndex ? <RxDotFilled size={30}/> : <RxDot size={30}/>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects