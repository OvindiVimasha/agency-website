import React, { useEffect } from 'react'
import assets from '../assets/assets'

// ThemeToggleBtn component switches between dark and light mode
const ThemeToggleBtn = ({ theme, setTheme }) => {

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
    },[])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <>
            {/* Wrapper button for the toggle */}
            <button>
                {/* If current theme is dark, show sun icon — clicking it switches to light */}
                {theme === 'dark' ? (
                    <img 
                        onClick={() => setTheme('light')} 
                        src={assets.sun_icon}
                        className='size-8.5 p-1.5 border border-gray-500 rounded-full' 
                        alt="Light mode"
                    />
                ) : (
                    /* If current theme is light, show moon icon — clicking it switches to dark */
                    <img 
                        onClick={() => setTheme('dark')} 
                        src={assets.moon_icon}
                        className='size-8.5 p-1.5 border border-gray-500 rounded-full' 
                        alt="Dark mode"
                    />
                )}
            </button>
        </>
    )
}

export default ThemeToggleBtn
