import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'

const Navbar = ({ theme, setTheme }) => {

  // State to manage mobile sidebar open/close
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div
      className='flex justify-between items-center px-4
      sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20
      backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'
    >

      {/* Logo (dark or light version depending on theme) */}
      <img
        src={theme === 'dark' ? assets.logo_dark : assets.logo}
        className='w-32 sm:w-40'
        alt='logo'
      />

      {/* NAV LINKS + MOBILE SIDEBAR */}
      <div
        className={`text-gray-700 dark:text-white sm:text-sm 
        ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'}
        max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full 
        max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 
        flex sm:items-center gap-5 transition-all`}
      >

        {/* Sidebar close button (only visible on mobile) */}
        <img
          src={assets.close_icon}
          alt="close menu"
          className='w-5 absolute right-4 top-4 sm:hidden'
          onClick={() => setSidebarOpen(false)}
        />

        {/* Nav links – clicking closes the sidebar */}
        <a onClick={() => setSidebarOpen(false)} href="#hero" className='sm:hover:border-b'>Home</a>
        <a onClick={() => setSidebarOpen(false)} href="#services" className='sm:hover:border-b'>Services</a>
        <a onClick={() => setSidebarOpen(false)} href="#about" className='sm:hover:border-b'>About</a>
        <a onClick={() => setSidebarOpen(false)} href="#portfolio" className='sm:hover:border-b'>Portfolio</a>
        <a onClick={() => setSidebarOpen(false)} href="#team" className='sm:hover:border-b'>Team</a>
        <a onClick={() => setSidebarOpen(false)} href="#contact" className='sm:hover:border-b'>Contact</a>
      </div>

      {/* RIGHT SIDE: THEME TOGGLE + MOBILE MENU + CONNECT BUTTON */}
      <div className='flex items-centre gap-2 sm:gap-4'>

        {/* Dark / Light Mode Toggle Button */}
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        {/* Mobile hamburger menu icon */}
        <img
          src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
          alt="menu icon"
          onClick={() => setSidebarOpen(true)}
          className='w-8 sm:hidden'
        />

        {/* Desktop "Connect" button */}
        <a
          href="#contact"
          className='text-sm max-sm:hidden flex items-center 
          gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer 
          hover:scale-103 transition-all'
        >
          Connect
          <img src={assets.arrow_icon} width={14} alt="arrow" />
        </a>
      </div>

    </div>
  )
}

export default Navbar
