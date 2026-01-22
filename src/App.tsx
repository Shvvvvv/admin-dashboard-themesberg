import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DashboardLayout from './components/layout/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Messages from './pages/Messages'
import DetailMessages from './pages/DetailMessages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <DashboardLayout>
      <Messages/>
    </DashboardLayout>
  )
}

export default App
