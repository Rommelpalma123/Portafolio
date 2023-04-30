import { useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { SelectNavBar } from '../../components/pages/home/js/SelectNavBar.js'
import '../css/navbar.css'
import { NavbarResponsive } from './home/NavbarResponsive.jsx'
// import './../css/home-phone-responsive/navbar.css'

export const NavBar = () => {
  useEffect(SelectNavBar, [])
  return (
    <>
      <NavbarResponsive />
      <nav>
        <section className='secction-navbar'>
          <ul className='lista-elementos'>
            <li>
              <Link
                className='link'
                to='/'
                aria-current='page'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className='link'
                to='/skills'
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className='link'
                to='/works'
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                className='link'
                to='/contact'
              >
                Contact
              </Link>
            </li>
          </ul>
        </section>
      </nav>
      <Outlet />
    </>
  )
}
