import { Outlet } from 'react-router-dom'
import './App.css'

import { Sidebar } from './shared/components/Sidebar'
import { Heading } from './shared/components/typography/Heading'

function App() {
  return (
    <div className="App App__layout">
      <aside id="sidebar">
        <Sidebar />
      </aside>
      <header id="header">
        <Heading text={'Beräkna lån'} type="h1" />
      </header>
      <main id="main">
        <Outlet />
      </main>
    </div>
  )
}

export default App
