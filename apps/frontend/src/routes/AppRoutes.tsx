import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/employee/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
