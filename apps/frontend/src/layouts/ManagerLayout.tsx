import { Outlet } from 'react-router-dom'
import Sidebar from '../components/common/Sidebar'
import Navbar from '../components/common/Navbar'

export default function ManagerLayout() {
  return (
    <div className="flex h-screen bg-[#0F172A] overflow-hidden">
      <Sidebar role="manager" />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
