import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'

import { styles } from '../styles'
import { RoundOutlineButton } from './Buttons'
import { navLinks } from '../constants'
import { logo } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Logo = () => (
    <Link
      to="/"
      className="flex items-center gap-2"
      onClick={() => {
        setActive('')
        window.scrollTo(0, 0)
      }}>
      <img
        src={logo} // your logo comes here
        alt="logo"
        className="sm:w-[173px] sm:h-[48px]  h-[45px] object-contain"
      />
    </Link>
  )

  const NavBtns = () => (
    <ul className="list-none hidden md:flex justify-between mt-2 w-[343px]">
      {navLinks.map((nav) => (
        <li
          key={nav.id}
          className={`${active === nav.title ? 'text-french' : 'text-[white]'} 
              hover:text-taupe text-[16px] tracking-[3px] cursor-pointer nav-links`}
          onClick={() => setActive(nav.title)}>
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  )

  const MobileNavBtns = () => (
    <>
      {/* mobile */}
      <div className="md:hidden flex flex-1 w-screen justify-end items-center text-[30px]">
        {
          !toggle ?
            <FiMenu
              className="cursor-pointer"
              onClick={() => setToggle(!toggle)} />
            :
            <CgClose
              className="cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
        }
        <div
          className={`${!toggle ? "hidden" : "flex"} 
            p-6 absolute top-10 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${active === nav.title ? 'text-french' : 'text-[white]'} 
                            hover:text-taupe text-[16px] tracking-[3px] cursor-pointer nav-links`}
                onClick={() => setActive(nav.title)}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )

  return (
    <nav className={`w-full py-4 fixed top-0 z-10 sm:opacity-[0.97] ${scrolled ? "bg-inherit" : "bg-transparent"}`}>
      <div className="section items-center">
        <Logo />
        <NavBtns />
        <RoundOutlineButton className=' hidden md:flex'>Get started</RoundOutlineButton>
        <MobileNavBtns />
      </div>
    </nav>
  )
}

export default Navbar
