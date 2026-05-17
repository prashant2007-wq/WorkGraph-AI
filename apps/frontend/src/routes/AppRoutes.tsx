import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Dashboard from '../pages/employee/Dashboard'
import Inbox from '../pages/employee/Inbox'
import Tasks from '../pages/employee/Tasks'
import Blockers from '../pages/employee/Blockers'
import Meetings from '../pages/employee/Meetings'
import WorkGraph from '../pages/employee/WorkGraph'
import AIAssistant from '../pages/employee/AIAssistant'
import Profile from '../pages/employee/Profile'
import ManagerDashboard from '../pages/manager/ManagerDashboard'
import Team from '../pages/manager/Team'
import Projects from '../pages/manager/Projects'
import ManagerBlockers from '../pages/manager/ManagerBlockers'
import Analytics from '../pages/manager/Analytics'
import Users from '../pages/admin/Users'
import Integrations from '../pages/admin/Integrations'
import AdminSettings from '../pages/admin/AdminSettings'
import DashboardLayout from '../layouts/DashboardLayout'
import AuthLayout from '../layouts/AuthLayout'
import ManagerLayout from '../layouts/ManagerLayout'
import AdminLayout from '../layouts/AdminLayout'

export default function AppRoutes() {
  return (
    <Routes>
      {/* Auth */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Employee */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/blockers" element={<Blockers />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/work-graph" element={<WorkGraph />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* Manager */}
      <Route element={<ManagerLayout />}>
        <Route path="/manager/dashboard" element={<ManagerDashboard />} />
        <Route path="/manager/team" element={<Team />} />
        <Route path="/manager/projects" element={<Projects />} />
        <Route path="/manager/blockers" element={<ManagerBlockers />} />
        <Route path="/manager/analytics" element={<Analytics />} />
      </Route>

      {/* Admin */}
      <Route element={<AdminLayout />}>
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/integrations" element={<Integrations />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
      </Route>

      {/* Default */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
