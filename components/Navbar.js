import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/images/images-event/Ecell Logo (B).png'

function Navbar() {
    const handleDarkMode = () => {
        localStorage.theme = localStorage.theme === 'dark' ? "light" : "dark"
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }
    const mode=()=>{
        localStorage.theme=='dark'?mode="dark":mode='light'
        return mode;
    }

    return (
        <>
        <div className='flex justify-between px-5 w-full'>
        <nav className="bg-gray-50 border-b-mid rounded border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    
  <div className="container flex flex-start">
  <ul>
    <li className=' px-4'><a href="./" className='text-dark hover:underline hover:text-mid dark:text-light dark:hover:text-brand after:text-light'><i className="lni lni-home"></i> Home </a></li>
    <li className=' px-4'><a href="./" className='text-dark hover:underline hover:text-mid dark:text-light dark:hover:text-brand after:text-light'><i className="lni lni-agenda"></i> About </a></li>
    <li className=' px-4'><a href="./" className='text-dark hover:underline hover:text-mid dark:text-light dark:hover:text-brand after:text-light'> <i className="las la-user-friends"></i> Our Team </a></li>
    <li className=' px-4'><a href="./" className='text-dark hover:underline hover:text-mid dark:text-light dark:hover:text-brand after:text-light'><i className="lar la-calendar"></i> Events </a></li>
<li> <button type='button' onClick={handleDarkMode} className="waves-effect waves-dark btn-flat dark:text-light mr-20">{mode} Mode</button></li>
  </ul>
  {/* <Image src={logo} width={100} height={100} alt="Logo"/> */}
 
  </div>
  </nav>
</div>
</>
    )
}

export default Navbar