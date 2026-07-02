import {
  LayoutDashboard,
  History,
  Sparkles,
  FileText,
  Moon,
  Sun,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {

  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full flex justify-center pt-6 relative z-50">

      <div
        className="w-[92%] max-w-7xl rounded-3xl backdrop-blur-xl shadow-xl border transition-all duration-300"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)"
        }}
      >

        <div className="flex items-center justify-between px-8 py-5">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 flex justify-center items-center shadow-lg">

              <FileText className="text-white" size={28}/>

            </div>

            <div>

              <h1
                className="text-3xl font-extrabold"
                style={{ color: "var(--text)" }}
              >
                ResumePilot
              </h1>

              <p
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Your AI Career Co-Pilot
              </p>

            </div>

          </div>

          <div
            className="hidden md:flex items-center gap-8"
            style={{ color: "var(--text)" }}
          >

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

            <button
              onClick={toggleTheme}
              className="w-11 h-11 rounded-xl flex items-center justify-center transition"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)"
              }}
            >
              {theme === "light"
                ? <Moon size={20}/>
                : <Sun size={20}/>
              }
            </button>

          </div>

        </div>

      </div>

    </nav>
  );
}