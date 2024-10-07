import UnderConstruction from "./UnderConstruction"

const About = () => {
  return (
    <section id="about" className='border w-full max-w-[1400px] h-[80vh] flex flex-col items-center justify-center'>
        <h1 className="text-2xl">About Section</h1>
        <UnderConstruction />
        <p>/ ToDo :</p>
        <ul>
          <li>Add Content to About Section.</li>
          <li>Add Content to Footer</li>
          <li>Add Scroll Triggered Animations</li>
          <li>Improve Colors</li>
          <li>Improve overall design</li>
        </ul>
    </section>
  )
}

export default About