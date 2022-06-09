import React from 'react'
import {HashLink as Link} from "react-router-hash-link"

const Header = () => {
  return (
      <header className='h-20 fixed top-0 left-0 right-0 bg-black text-white z-50'>
          <div className='flex flex-row items-center h-full'>
              <h1 className="text-3xl font-bold w-1/2 pl-12"><Link to='#home' smooth>My Portfolio</Link></h1>
              <nav className='w-2/4'>
                  <ul className='flex flex-row space-x-7'>
                      <li className='hover:underline hover:decoration-4'>
                          <Link to='#home' smooth>Home</Link>
                      </li>
                      <li className='hover:underline hover:decoration-4'>
                          <Link to='#about' smooth>About</Link>
                      </li>
                      <li className='hover:underline hover:decoration-4'>
                          <Link to='#skills' smooth>Skills</Link>
                      </li>
                      <li className='hover:underline hover:decoration-4'>
                          <Link to='#projects' smooth>Projects</Link>
                      </li>
                      <li className='hover:underline hover:decoration-4'>
                          <Link to='#work' smooth>Work Experience</Link>
                      </li>
                      <li className='hover:underline hover:decoration-4'>
                          <Link to='#blog' smooth>Blog</Link>
                      </li>
                      <li className='hover:underline hover:decoration-4'>
                          <Link to='#contact' smooth>Contact</Link>
                      </li>
                  </ul>
              </nav>
          </div>
      </header>
  )
}
export default Header