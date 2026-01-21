import DashboardLayout from './components/layout/DashboardLayout'
import { Outlet } from 'react-router'

function App() {
  return (
    <DashboardLayout>
      <Outlet/>
    </DashboardLayout>
  )
}

export default App
