import UnderConstruction from "./UnderConstruction"

const About = () => {
  return (
    <section id="about" className='w-full max-w-[1400px] h-[100vh] flex items-center justify-center'>
        <div className="h-full w-[50%] relative hidden md:flex items-center justify-center">
            <img src="/images/sober.png" alt="" className="bg-transparent z-10 absolute object-cover h-2/4 md:h-3/4 transition-all duration-300" loading="lazy"/>
            <div className="border-b-[100px] border-b-green-400 h-[25%] md:h-[50%] w-full right-0 z-0 absolute left-0 transition-all duration-300" />
        </div>
        <div className="flex flex-col items-start justify-center w-full md:w-[50%] h-full px-4">
          <h4 className="text-2xl font-bold mb-2">About Me</h4>
          <p className="mb-4">Hello! I'm <span>Kevin</span>, a passionate web developer from Philippines. With a keen interest in web development and software engineering, I enjoy creating websites that challenges my creativitiy.</p>

          <h3 className="text-xl mb-2 font-semibold">My Journey</h3>
          <p className="mb-4">I began my journey in web development when I joined a Full Stack Web Developer Bootcamp. <br />
          Over the years, I've developed skills in creating user friendly websites using tools like React.js and Node.Js 
          and continuously strive to improve by learning the latest trend in web development.</p>

          <h3 className="text-xl mb-2 font-semibold">What I Do</h3>
          <p className="mb-1">I specialize in:</p>
          <ul className="list-disc px-6 mb-1">
            <li>React.Js</li>
            <li>Tailwind Css</li>
            <li>Node.Js</li>
          </ul>
          <p className="mb-4">Currently, I'm working on creating personal projects.</p>

          <h3 className="text-xl mb-2 font-semibold">Outside of Work</h3>
          <p>When I'm not coding, you'll find me watching animes, reading manga, and playing video games.</p>
          <p>Feel free to connect with me at <a className="text-green-500" href="https://www.linkedin.com/in/kevin-balmores-6549b9200/" target="_blank">LinkedIn</a> or dropped an email at
          <span className="text-green-500"> balmoresk3v1n@gmail.com</span></p>
        </div>
    </section>
  )
}

export default About