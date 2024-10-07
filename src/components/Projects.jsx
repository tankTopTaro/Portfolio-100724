import UnderConstruction from './UnderConstruction'

const Projects = () => {
  return (
    <section id='projects' className='border w-full max-w-[1240px] h-[100vh] flex flex-col items-center justify-center'>
        <h1 className="text-2xl">Projects Section</h1>
        <h1 className='text-2xl my-12 text-center'>
            This site is under renovation. <br/>
            For now visit my <a href="https://github.com/tankTopTaro?tab=repositories" target='_blank' className='text-green-500 underline cursor-pointer'>Github</a> to see my projects.
        </h1>
        <UnderConstruction />
    </section>
  )
}

export default Projects