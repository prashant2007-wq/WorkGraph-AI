import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-blue-400 font-medium">404</p>
        <h1 className="text-5xl font-bold mt-3">Page not found</h1>
        <p className="text-slate-400 mt-4">
          The page you are looking for does not exist in the WorkGraph AI workspace.
        </p>

        <Link
          to="/dashboard"
          className="inline-flex mt-8 rounded-xl bg-blue-600 hover:bg-blue-500 px-5 py-3 font-semibold transition"
        >
          Back to Dashboard
        </Link>
      </div>
    </main>
  );
}
