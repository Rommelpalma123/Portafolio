import { GiHamburgerMenu, GiStrongMan } from 'react-icons/gi';
import { MdContactEmergency } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { IoMdContacts } from 'react-icons/io';
import { TbSwords } from 'react-icons/tb';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { ButtomMobil } from '@/components/ButtomMobil';
import '@/styles/layout.css'

export const SideBar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div>
      <ButtomMobil showSidebar={showSidebar} />
      <div className='d-grid' style={{ height: '100vh' }}>
        <div className={`fijar-sidebar bg-dark ${sidebarVisible ? 'active' : ''}`} id='side_nav'>
          <div className='bg-dark px-2 pt-3 pb-4'>
            <h1 className='fs-4 text-center'>
              <span className='bg-dark text-white text-dark rounded shadow px-5 py-2 me-2 fs-5'>
                Rommel Palma
              </span>
            </h1>
            <button
              className='btn d-md-none d-block bg-dark close-btn px-1 py-0 text-white fs-1'
              onClick={hideSidebar}>
              <GiHamburgerMenu />
            </button>
          </div>
          <ul className='list-unstyled px-2'>
            <li
              onClick={() => handleItemClick(0)}
              style={{ backgroundColor: selectedItem === 0 ? '#00fa32' : '#fff' }}
              className='text-decoration-none rounded item-registro'>
              <Link
                to='/'
                className='d-flex text-dark text-decoration-none align-items-center m-2'
                onClick={() => hideSidebar()}>
                <CgProfile className='fs-4 m-2' /> Home
              </Link>
            </li>

            <li
              onClick={() => handleItemClick(1)}
              style={{ backgroundColor: selectedItem === 1 ? '#00fa32' : '#fff' }}
              className='text-decoration-none rounded mt-3 item-registro'>
              <Link
                className='d-flex text-dark text-decoration-none align-items-center m-2'
                to='/skills'
                style={{ color: selectedItem === 1 ? '#00fa32' : '#090909', height: '40px' }}
                onClick={() => {
                  hideSidebar();
                }}>
                <GiStrongMan className='fs-4 m-2' /> Skills
              </Link>
            </li>
            <li
              onClick={() => handleItemClick(2)}
              style={{ backgroundColor: selectedItem === 2 ? '#00fa32' : '#fff' }}
              className='text-decoration-none rounded mt-3 item-registro'>
              <Link
                className='d-flex text-dark text-decoration-none align-items-center m-2'
                to='/works'
                style={{ color: selectedItem === 2 ? '#00fa32' : '#090909', height: '40px' }}
                onClick={() => {
                  hideSidebar();
                }}>
                <TbSwords className='fs-4 m-2' /> Works
              </Link>
            </li>
            <li
              onClick={() => handleItemClick(3)}
              style={{ backgroundColor: selectedItem === 3 ? '#00fa32' : '#fff' }}
              className='text-decoration-none rounded mt-3 item-registro'>
              <Link
                className='d-flex text-dark text-decoration-none align-items-center m-2'
                to='/contact'
                style={{ color: selectedItem === 3 ? '#00fa32' : '#090909', height: '40px' }}
                onClick={() => {
                  hideSidebar();
                }}>
                <MdContactEmergency className='fs-4 m-2' /> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
