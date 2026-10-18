import { NavLink } from "react-router-dom";
import { Atom, BookOpen, Compass, GraduationCap, Lightbulb, NotebookPen, Users, X } from "lucide-react";

const links = [
  { to: "/", label: "Overview", icon: Compass, end: true },
  { to: "/library", label: "Explore library", icon: BookOpen },
  { to: "/learning", label: "My learning", icon: GraduationCap },
  { to: "/research", label: "Research lab", icon: Atom },
  { to: "/writing", label: "Writing studio", icon: NotebookPen },
  { to: "/team", label: "Team & founder", icon: Users }
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <button aria-label="Close menu overlay" onClick={onClose} className="fixed inset-0 z-40 bg-black/60 lg:hidden" />}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col border-r border-white/[0.07] bg-[#0b1120] px-5 py-6 transition-transform duration-300 lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="mb-10 flex items-center justify-between px-1">
          <NavLink to="/" onClick={onClose} className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400 text-[#07111d]"><Lightbulb size={22} strokeWidth={2.4} /></span>
            <span>
              <span className="block text-lg font-black tracking-[0.22em] text-white">AXIRA</span>
              <span className="block text-[10px] tracking-[0.12em] text-slate-500">THINK DEEPER</span>
            </span>
          </NavLink>
          <button onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-white/5 lg:hidden" aria-label="Close sidebar"><X size={19} /></button>
        </div>

        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">Workspace</p>
        <nav className="space-y-1">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} onClick={onClose} className={({ isActive }) => `group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${isActive ? "bg-cyan-400/10 text-cyan-300 ring-1 ring-inset ring-cyan-300/10" : "text-slate-400 hover:bg-white/[0.04] hover:text-white"}`}>
              <Icon size={18} className="shrink-0" />
              <span>{label}</span>
              {to === "/learning" && <span className="ml-auto rounded-md bg-white/[0.07] px-1.5 py-0.5 text-[10px] text-slate-400">3</span>}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto">
          <div className="overflow-hidden rounded-2xl border border-cyan-300/10 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-transparent p-4">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300"><Atom size={18} /></div>
            <p className="text-sm font-semibold text-white">Curiosity is a skill.</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">Build it with one focused lesson at a time.</p>
            <NavLink to="/library" onClick={onClose} className="mt-4 inline-flex items-center text-xs font-semibold text-cyan-300 hover:text-cyan-200">Find your next idea <span className="ml-2">↗</span></NavLink>
          </div>
          <div className="mt-5 flex items-center gap-3 border-t border-white/[0.07] pt-5">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-cyan-300 to-blue-500 text-xs font-black text-slate-950">A</div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-200">Alex Morgan</p>
              <p className="text-xs text-slate-500">Curious learner</p>
            </div>
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </div>
        </div>
      </aside>
    </>
  );
}
