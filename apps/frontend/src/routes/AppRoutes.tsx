import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/employee/Dashboard";
import Inbox from "../pages/employee/Inbox";
import Tasks from "../pages/employee/Tasks";
import Blockers from "../pages/employee/Blockers";
import Meetings from "../pages/employee/Meetings";
import WorkGraph from "../pages/employee/WorkGraph";
import AIAssistant from "../pages/employee/AIAssistant";
import Analytics from "../pages/employee/Analytics";
import DashboardLayout from "../layouts/DashboardLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/blockers" element={<Blockers />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/work-graph" element={<WorkGraph />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/analytics" element={<Analytics />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
