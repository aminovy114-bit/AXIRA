import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#080d18] text-slate-100">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="min-h-screen lg:pl-[260px]">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="mx-auto w-full max-w-[1600px] px-4 py-7 sm:px-7 sm:py-9 xl:px-10">
          <Outlet />
          <footer className="mt-14 flex flex-col justify-between gap-3 border-t border-white/[0.06] py-6 text-[11px] text-slate-600 sm:flex-row sm:items-center">
            <span>© 2026 AXIRA. Think deeper. See further.</span>
            <div className="flex gap-5"><span>Built for curious minds</span><span>Learning never stops ↗</span></div>
          </footer>
        </main>
      </div>
    </div>
  );
}
