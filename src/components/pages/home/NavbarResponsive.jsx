import { Link, Outlet } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CiCircleRemove } from 'react-icons/ci'
import './../../css/home-phone-responsive/navbar.css'
import { useState } from 'react'

export const NavbarResponsive = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='nav'>
      <div
        className='toggle-btn'
        onClick={toggleMenu}
      >
        {isMenuOpen
          ? (
            <CiCircleRemove className='close' />
            )
          : (
            <GiHamburgerMenu className='hamburger' />
            )}
      </div>
      <div className={`dropdown_menu ${isMenuOpen ? 'open' : ''}`}>
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
        <Outlet />
      </div>
    </div>
  )
}
