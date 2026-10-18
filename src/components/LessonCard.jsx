import { ArrowUpRight, Clock3, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function LessonCard({ lesson, compact = false }) {
  return (
    <Link to={`/lesson/${lesson.id}`} className={`group flex gap-4 rounded-2xl border border-white/[0.07] bg-[#0d1423] p-4 transition hover:border-cyan-300/20 hover:bg-[#101a2b] ${compact ? "items-center" : "flex-col sm:flex-row sm:items-center"}`}>
      <div className="relative grid h-20 w-full shrink-0 place-items-center overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-violet-500/10 sm:w-24">
        <div className="absolute -right-3 -top-5 h-16 w-16 rounded-full border border-cyan-300/10" />
        <div className="absolute -bottom-7 -left-3 h-16 w-16 rounded-full border border-blue-300/10" />
        <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-[#0b1321]/80 text-cyan-200 transition group-hover:scale-110"><Play size={15} fill="currentColor" /></span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-300">{lesson.subject}</span>
          <span className="h-1 w-1 rounded-full bg-slate-700" />
          <span className="text-[10px] text-slate-500">{lesson.level}</span>
        </div>
        <h3 className="mt-2 font-semibold text-slate-100 transition group-hover:text-cyan-100">{lesson.title}</h3>
        {!compact && <p className="mt-1.5 max-w-2xl text-xs leading-5 text-slate-500">{lesson.description}</p>}
        <div className="mt-3 flex items-center gap-3 text-[10px] text-slate-500">
          <span className="flex items-center gap-1"><Clock3 size={12} /> {lesson.duration}</span>
          {lesson.progress > 0 && <span className="flex items-center gap-1.5"><span className="h-1 w-16 overflow-hidden rounded-full bg-white/10"><span className="block h-full rounded-full bg-cyan-300" style={{ width: `${lesson.progress}%` }} /></span>{lesson.progress}%</span>}
        </div>
      </div>
      <ArrowUpRight size={17} className="hidden shrink-0 text-slate-600 group-hover:text-cyan-300 sm:block" />
    </Link>
  );
}
