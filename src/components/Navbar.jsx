import { useState } from "react"
import { MdMenu, MdClose } from "react-icons/md"
import { FaGithub } from "react-icons/fa"

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const scrollToNav = (navItem) => {
        const el = document.getElementById(navItem)
        setNav(!nav)

        el.scrollIntoView({
            behavior: 'smooth'
        })
    }

    const navItems = ['home', 'projects', 'about']
    return (
        <div className="flex justify-between items-center h-24 w-full max-w-[1400px] mx-auto px-4">
            <div className="relative left-10 flex items-center justify-center">
                <div className="bg-green-400 h-12 w-12 absolute z-1" />
                <h1 className="absolute z-10 text-4xl text-center font-bold uppercase">KB</h1>
            </div>

            <ul className="hidden md:flex">
                {navItems.map((item) => (
                    <li key={item} onClick={() => scrollToNav(item)} className="p-4 m-2 cursor-pointer font-semibold hover:text-green-400">
                        {`/${item}`}
                    </li>
                ))}
                <li className="p-4 m-2 cursor-pointer"><a href="https://github.com/tankTopTaro?tab=repositories" target="_blank"><FaGithub size={30} className="rounded-full hover:bg-green-300"/></a></li>
            </ul>

            {nav ? (
                <div onClick={handleNav} className="px-4 md:hidden">
                    <MdClose size={20} />
                </div>
            ): (
                <div onClick={handleNav} className="px-4 md:hidden">
                    <MdMenu size={20} />
                </div>
            )}
            
            <ul
                className={`fixed md:hidden right-10 top-[10%] w-[80%] z-[999] h-[calc(80vh - 96px)] bg-green-300 flex flex-col items-center py-6
                    transition-all duration-500 ease-in-out
                    ${nav ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                <div className="absolute top-[-15px] right-0 w-0 h-0 border-t-[30px] border-t-transparent border-r-[40px] border-r-green-300 border-b-[10px] border-b-transparent" />

                {navItems.map(item => (
                <li
                    key={item}
                    onClick={() => scrollToNav(item)}
                    className='p-4 cursor-pointer hover:bg-[#00df9a] hover:text-white'
                >
                    {`/${item}`}
                </li>
                ))}
                <li className="p-4 cursor-pointer hover:bg-[#00df9a] hover:text-white"><a href="https://github.com/tankTopTaro?tab=repositories" target="_blank">/github</a></li>
            </ul>
        </div>
    )
}

export default Navbar