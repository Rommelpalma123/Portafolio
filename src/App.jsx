import { Routes, Route } from 'react-router-dom'
import { TicTac } from './components/TicTac.jsx'
import { Skills } from './pages/skills/Skills.jsx'
import { Contact } from './pages/contact/Contact.jsx'
import { Home } from './pages/home/Home.jsx'
import { FollowMouse } from './pages/home/FollowMouse.jsx'
import { SideBar } from './components/Sidebar.jsx'

function App () {
  return (
    <div className='container-padre'>
      <FollowMouse />
      <SideBar />
      <div className='content' style={{ height: '100%', width: '100%' }}>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/works' element={<TicTac />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}
export default App
