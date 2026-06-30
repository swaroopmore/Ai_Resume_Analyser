import {
  LayoutDashboard,
  History,
  Sparkles,
  FileText,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center pt-6 relative z-50">
      <div className="w-[92%] max-w-7xl rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-white/50">

        <div className="flex items-center justify-between px-8 py-5">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 flex justify-center items-center shadow-lg">
              <FileText className="text-white" size={28}/>
            </div>

            <div>

              <h1 className="text-3xl font-extrabold text-slate-800">
                ResumePilot
              </h1>

              <p className="text-sm text-slate-500">
                Your AI Career Co-Pilot
              </p>

            </div>

          </div>

          <div className="hidden md:flex gap-8 text-slate-700">

            <button className="flex gap-2 items-center font-medium hover:text-blue-600 transition">
              <LayoutDashboard size={18}/>
              Dashboard
            </button>

            <button className="flex gap-2 items-center font-medium hover:text-blue-600 transition">
              <Sparkles size={18}/>
              Analyze
            </button>

            <button className="flex gap-2 items-center font-medium hover:text-blue-600 transition">
              <History size={18}/>
              History
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
}