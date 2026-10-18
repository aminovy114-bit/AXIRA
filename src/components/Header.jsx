import { Bell, Menu, Search, Sparkles } from "lucide-react";
import { useLocation } from "react-router-dom";

const pageTitles = {
  "/": ["Good morning, Alex", "Your next big idea starts with a question."],
  "/library": ["Explore the library", "Follow your curiosity across disciplines."],
  "/learning": ["My learning", "Your progress, practice, and next steps."],
  "/research": ["Research lab", "Turn questions into structured inquiry."],
  "/writing": ["Writing studio", "Capture ideas and shape clear arguments."],
  "/team": ["Meet AXIRA", "A learning space built for curious minds."]
};

export default function Header({ onMenuClick }) {
  const location = useLocation();
  const current = pageTitles[location.pathname] || ["Lesson workspace", "Learn one concept at a time."];
  return (
    <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-[#080d18]/90 backdrop-blur-xl">
      <div className="flex min-h-[82px] items-center justify-between gap-4 px-4 sm:px-7 xl:px-10">
        <div className="flex min-w-0 items-center gap-3">
          <button onClick={onMenuClick} className="rounded-xl border border-white/10 p-2.5 text-slate-300 hover:bg-white/5 lg:hidden" aria-label="Open navigation"><Menu size={19} /></button>
          <div className="min-w-0">
            <h1 className="truncate text-lg font-semibold tracking-tight text-white sm:text-xl">{current[0]}</h1>
            <p className="mt-1 hidden text-xs text-slate-500 sm:block">{current[1]}</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button className="hidden items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2.5 text-xs text-slate-500 transition hover:border-white/15 sm:flex" onClick={() => document.getElementById("global-search")?.focus()}>
            <Search size={15} /><span>Quick search</span><kbd className="ml-4 rounded border border-white/10 px-1.5 py-0.5 text-[10px]">⌘ K</kbd>
          </button>
          <button className="relative rounded-xl border border-white/[0.08] p-2.5 text-slate-400 transition hover:bg-white/5 hover:text-white" aria-label="Notifications"><Bell size={17} /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-300" /></button>
          <div className="hidden h-8 w-px bg-white/10 sm:block" />
          <div className="hidden items-center gap-2.5 sm:flex">
            <div className="text-right"><p className="text-xs font-semibold text-slate-200">Alex Morgan</p><p className="mt-0.5 text-[10px] text-slate-500">Free explorer</p></div>
            <div className="grid h-9 w-9 place-items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-xs font-bold text-cyan-200">AM</div>
          </div>
          <Sparkles size={17} className="text-cyan-300 sm:hidden" />
        </div>
      </div>
    </header>
  );
}
