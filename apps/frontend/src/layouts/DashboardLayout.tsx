import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
