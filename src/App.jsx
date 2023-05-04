import { Routes, Route } from 'react-router-dom'
import { TicTac } from './components/TicTac.jsx'
import { NavBar } from './components/pages/NavBar.jsx'
import { Skills } from './components/pages/skills/Skills.jsx'
import { Contact } from './components/pages/contact/Contact.jsx'
import { Home } from './components/pages/home/Home.jsx'
import { FollowMouse } from './components/pages/home/FollowMouse.jsx'

function App ({ signOut, user }) {
  return (
    <div>
      <FollowMouse />
      <NavBar />
      <Routes>
        <Route
          path=''
          element={<Home />}
        />
        <Route
          path='/works'
          element={<TicTac />}
        />
        <Route
          path='/skills'
          element={<Skills />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
      </Routes>
    </div>
  )
}
export default App
