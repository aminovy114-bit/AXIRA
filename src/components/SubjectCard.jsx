import { ArrowUpRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function SubjectCard({ subject }) {
  return (
    <Link to={`/library?subject=${subject.id}`} className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d1423] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-[#101a2b]">
      <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${subject.color} blur-2xl transition group-hover:scale-125`} />
      <div className="relative flex items-start justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.07] bg-white/[0.035] text-xl text-cyan-200">{subject.icon}</span>
        <ArrowUpRight size={17} className="text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
      </div>
      <div className="relative mt-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">{subject.category}</p>
        <h3 className="mt-2 text-base font-semibold text-white">{subject.name}</h3>
        <p className="mt-2 min-h-[60px] text-xs leading-5 text-slate-500">{subject.description}</p>
      </div>
      <div className="relative mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4 text-xs">
        <span className="flex items-center gap-1.5 text-slate-400"><BookOpen size={13} /> {subject.lessons} lessons</span>
        <span className="rounded-md bg-white/[0.04] px-2 py-1 text-[10px] text-slate-500">{subject.level}</span>
      </div>
    </Link>
  );
}
