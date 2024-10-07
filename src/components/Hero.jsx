const Hero = () => {
  return (
    <section id='home' className='w-full max-w-[1400px] h-[100vh] flex items-center justify-center'>
        <div className="h-full w-full flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-5xl transition-all duration-300 font-semibold mx-4">Kevin <span className="text-green-300 font-normal">Balmores</span></h1>
            <p className="mx-4 mt-2 text-xl md:text-2xl transition-all duration-300">Web Developer | Programmer</p>
        </div>
        <div className="h-full w-full relative flex items-center justify-center">
            <div className="bg-green-300 h-[25%] md:h-[50%] w-full right-0 z-0 absolute left-0 rounded-s-full transition-all duration-300" />
            <img src="/images/chichi.png" alt="" className="bg-transparent absolute object-cover h-2/4 md:h-3/4 transition-all duration-300" loading="lazy"/>
        </div>
    </section>
  )
}

export default Hero