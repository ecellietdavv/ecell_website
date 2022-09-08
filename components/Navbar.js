import React from 'react'

function Navbar() {
    const handleDarkMode = () => {
        localStorage.theme = localStorage.theme === 'dark' ? "light" : "dark"
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return (
        <div className='flex justify-between px-10 w-full'>
            <h1>Ecell</h1>
            <button type='button' onClick={handleDarkMode}>Dark Mode</button>
        </div>
    )
}

export default Navbar