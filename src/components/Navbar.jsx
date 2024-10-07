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

        el.scrollIntoView({
            behavior: 'smooth'
        })
    }

    const navItems = ['home', 'projects', 'about']
    return (
        <div className="flex justify-between items-center h-24 w-full max-w-[1400px] mx-auto px-4">
            <div className="relative border flex items-center justify-center">
                <div className="bg-green-400 h-12 w-12 absolute z-1" />
                <h1 className="absolute z-10 text-4xl text-center font-bold uppercase">KB</h1>
            </div>

            <ul className="hidden md:flex">
                {navItems.map((item) => (
                    <li key={item} onClick={() => scrollToNav(item)} className="p-4 m-2 cursor-pointer font-semibold">
                        {`/${item}`}
                    </li>
                ))}
                <li className="p-4 m-2 cursor-pointer"><a href="https://github.com/tankTopTaro?tab=repositories" target="_blank"><FaGithub size={30} className="rounded-full hover:bg-green-300"/></a></li>
            </ul>

            <div onClick={handleNav} className="block md:hidden">
                <MdMenu size={20} />
            </div>

            <ul
                className={
                nav
                    ? 'fixed md:hidden right-0 top-0 w-[60%] h-full bg-blue-500 ease-in-out duration-500'
                    : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 right-[-100%]'
                }
            >
                {/* Mobile Logo */}
                <div className="flex h-24 items-center justify-between">
                    <h1 className='w-full text-3xl font-bold m-4 uppercase'>Kevin</h1>
                    <div onClick={handleNav} className="px-4"><MdClose size={30} /></div>
                </div>

                {/* Mobile Navigation Items */}
                {navItems.map(item => (
                <li
                    key={item}
                    className='p-4 cursor-pointer hover:bg-[#00df9a] hover:text-white duration-300'
                >
                    {item}
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar