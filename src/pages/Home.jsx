import { ArrowRight, ArrowUpRight, BookOpen, Brain, CheckCircle2, Clock3, Flame, Lightbulb, Search, Sparkles, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import SubjectCard from "../components/SubjectCard.jsx";
import LessonCard from "../components/LessonCard.jsx";
import { lessons, subjects } from "../data/lessons.js";

export default function Home() {
  const [search, setSearch] = useState("");
  const featuredSubjects = subjects.slice(0, 4);
  const filteredLessons = useMemo(() => lessons.filter((lesson) => `${lesson.title} ${lesson.subject}`.toLowerCase().includes(search.toLowerCase())), [search]);
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-[28px] border border-cyan-300/10 bg-[#0c1525] px-6 py-8 sm:px-9 sm:py-10 xl:px-12 xl:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(34,211,238,0.12),transparent_34%),radial-gradient(ellipse_at_60%_100%,rgba(59,130,246,0.09),transparent_38%)]" />
        <div className="absolute right-[-30px] top-[-55px] hidden h-72 w-72 rounded-full border border-cyan-300/[0.08] md:block"><div className="absolute inset-7 rounded-full border border-cyan-300/[0.08]"><div className="absolute inset-7 rounded-full border border-cyan-300/[0.08]" /></div></div>
        <div className="relative max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-200"><Sparkles size={13} /> Your personal learning space</div>
          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl xl:text-5xl">Think deeper.<br /><span className="bg-gradient-to-r from-cyan-200 via-cyan-300 to-blue-400 bg-clip-text text-transparent">See further.</span></h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">A universe of ideas, connected. Explore academic subjects, build lasting knowledge, and turn curiosity into understanding.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/library" className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-[#07111d] transition hover:bg-cyan-200">Explore the library <ArrowRight size={16} /></Link>
            <Link to="/research" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.07]">Open research lab <ArrowUpRight size={15} /></Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-slate-500"><span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-400" /> Structured lessons</span><span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-400" /> Active recall tools</span><span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-400" /> Research workspace</span></div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {[
          { label: "Learning streak", value: "4 days", detail: "You're building a habit", icon: Flame, color: "text-amber-300", bg: "bg-amber-300/10" },
          { label: "Lessons explored", value: "12", detail: "+3 this week", icon: BookOpen, color: "text-cyan-300", bg: "bg-cyan-300/10" },
          { label: "Focus time", value: "3.5 hrs", detail: "Across all subjects", icon: Clock3, color: "text-violet-300", bg: "bg-violet-300/10" },
          { label: "Knowledge growth", value: "+18%", detail: "Compared to last week", icon: TrendingUp, color: "text-emerald-300", bg: "bg-emerald-300/10" }
        ].map(({ label, value, detail, icon: Icon, color, bg }) => <div key={label} className="rounded-2xl border border-white/[0.07] bg-[#0c1321] p-4 sm:p-5"><div className="flex items-center justify-between gap-2"><span className="text-[11px] text-slate-500 sm:text-xs">{label}</span><span className={`grid h-8 w-8 place-items-center rounded-lg ${bg} ${color}`}><Icon size={16} /></span></div><p className="mt-4 text-2xl font-semibold tracking-tight text-white">{value}</p><p className="mt-1 text-[10px] text-slate-600 sm:text-[11px]">{detail}</p></div>)}
      </section>

      <section>
        <SectionHeading eyebrow="Pick up where you left off" title="Continue learning" description="Small steps, lasting understanding." action={<Link to="/learning" className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200">View all <ArrowRight size={14} /></Link>} />
        <div className="grid gap-3 xl:grid-cols-2">{lessons.filter((lesson) => lesson.progress > 0).slice(0, 2).map((lesson) => <LessonCard key={lesson.id} lesson={lesson} />)}</div>
      </section>

      <section>
        <SectionHeading eyebrow="A world of knowledge" title="Explore academic directions" description="Move between disciplines and discover how ideas connect." action={<Link to="/library" className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200">All subjects <ArrowRight size={14} /></Link>} />
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{featuredSubjects.map((subject) => <SubjectCard key={subject.id} subject={subject} />)}</div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
        <div>
          <SectionHeading eyebrow="Fresh perspectives" title="Recommended for you" description="Hand-picked starting points for your next study session." />
          <div className="space-y-3">{lessons.slice(0, 3).map((lesson) => <LessonCard key={lesson.id} lesson={lesson} compact />)}</div>
        </div>
        <div className="rounded-2xl border border-white/[0.07] bg-[#0c1321] p-5 sm:p-6">
          <div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-400/10 text-violet-300"><Brain size={20} /></span><span className="rounded-full border border-violet-300/10 bg-violet-300/[0.06] px-2.5 py-1 text-[10px] text-violet-200">Daily prompt</span></div>
          <h3 className="mt-5 text-lg font-semibold text-white">A question worth thinking about</h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">If an AI system gives a convincing answer, what evidence would help you decide whether it is actually reliable?</p>
          <div className="mt-5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-xs leading-5 text-slate-500">Tip: Think about sources, repeatability, assumptions, and what could prove the answer wrong.</div>
          <Link to="/research" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-cyan-300">Explore this question <ArrowRight size={14} /></Link>
        </div>
      </section>
    </div>
  );
}
