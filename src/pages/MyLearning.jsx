import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, CheckCircle2, Clock3, Flame, GraduationCap, Target } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import LessonCard from "../components/LessonCard.jsx";
import { lessons, glossaryTerms } from "../data/lessons.js";

export default function MyLearning() {
  const [tab, setTab] = useState("In progress");
  const progressLessons = useMemo(() => lessons.filter((l) => tab === "In progress" ? l.progress > 0 && l.progress < 100 : tab === "Not started" ? l.progress === 0 : l.progress === 100), [tab]);
  const [flipped, setFlipped] = useState(false);
  const [termIndex, setTermIndex] = useState(0);
  const term = glossaryTerms[termIndex];
  return (
    <div className="space-y-9">
      <section className="grid gap-4 sm:grid-cols-3">
        <Metric icon={Target} label="Overall progress" value="42%" note="Keep moving forward" color="text-cyan-300" bg="bg-cyan-300/10" />
        <Metric icon={Flame} label="Current streak" value="4 days" note="Your best is 7 days" color="text-amber-300" bg="bg-amber-300/10" />
        <Metric icon={Clock3} label="Time invested" value="3h 30m" note="Across 12 learning sessions" color="text-violet-300" bg="bg-violet-300/10" />
      </section>

      <section>
        <SectionHeading eyebrow="Your personal roadmap" title="Learning activity" description="Return to a lesson, finish a topic, or choose something new." />
        <div className="mb-4 flex flex-wrap gap-2">{["In progress", "Not started", "Completed"].map((t) => <button key={t} onClick={() => setTab(t)} className={`rounded-full px-4 py-2 text-xs font-semibold transition ${tab === t ? "bg-cyan-300 text-[#07111d]" : "border border-white/[0.08] text-slate-400 hover:text-white"}`}>{t}</button>)}</div>
        <div className="space-y-3">{progressLessons.length ? progressLessons.map((lesson) => <LessonCard key={lesson.id} lesson={lesson} />) : <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center text-sm text-slate-500">Nothing in this category yet. Explore the library to find your next lesson.</div>}</div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_0.8fr]">
        <div className="rounded-2xl border border-white/[0.07] bg-[#0c1321] p-5 sm:p-6">
          <SectionHeading eyebrow="Study smarter" title="Your weekly rhythm" description="A simple example of a balanced study week." />
          <div className="mt-7 flex h-36 items-end justify-between gap-2">
            {[{ day: "M", h: 42 }, { day: "T", h: 70 }, { day: "W", h: 53 }, { day: "T", h: 88 }, { day: "F", h: 61 }, { day: "S", h: 33 }, { day: "S", h: 20 }].map((d, i) => <div key={i} className="flex flex-1 flex-col items-center gap-3"><div className="flex h-28 w-full items-end rounded-lg bg-white/[0.025] p-1"><div style={{ height: `${d.h}%` }} className={`w-full rounded-md ${i === 3 ? "bg-cyan-300" : "bg-cyan-300/30"}`} /></div><span className="text-[10px] text-slate-600">{d.day}</span></div>)}
          </div>
          <p className="mt-4 text-xs text-slate-500">Illustrative weekly activity · set a realistic goal and return regularly.</p>
        </div>
        <div className="rounded-2xl border border-cyan-300/10 bg-gradient-to-br from-cyan-400/[0.08] to-[#0c1321] p-5 sm:p-6">
          <div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200"><GraduationCap size={20} /></span><span className="text-[10px] uppercase tracking-[0.16em] text-cyan-300">Quick practice</span></div>
          <h3 className="mt-5 text-lg font-semibold text-white">Flashcard of the moment</h3>
          <button onClick={() => setFlipped(!flipped)} className="mt-4 flex min-h-[145px] w-full flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-[#080d18]/70 p-5 text-center transition hover:border-cyan-300/25">
            <span className="text-[10px] uppercase tracking-[0.18em] text-slate-600">{flipped ? "Definition" : term.subject}</span>
            <span className="mt-3 text-xl font-semibold text-white">{flipped ? term.definition : term.term}</span>
            <span className="mt-4 text-[10px] text-cyan-300">{flipped ? "Click to see term" : "Click to reveal definition"}</span>
          </button>
          <div className="mt-4 flex items-center justify-between"><span className="text-[10px] text-slate-600">Card {termIndex + 1} of {glossaryTerms.length}</span><button onClick={() => { setTermIndex((termIndex + 1) % glossaryTerms.length); setFlipped(false); }} className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300">Next card <ArrowRight size={14} /></button></div>
        </div>
      </section>

      <section className="rounded-2xl border border-white/[0.07] bg-[#0c1321] p-5 sm:p-6">
        <SectionHeading eyebrow="A little progress adds up" title="Learning checklist" description="Use these milestones to keep your learning intentional." />
        <div className="grid gap-3 sm:grid-cols-2">
          {["Choose one question to explore", "Complete a focused lesson", "Recall three key ideas from memory", "Write one note in your own words"].map((item, i) => <label key={item} className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.015] p-3.5 text-sm text-slate-300 hover:bg-white/[0.035]"><input type="checkbox" className="h-4 w-4 accent-cyan-300" /><span>{item}</span>{i === 1 && <CheckCircle2 size={15} className="ml-auto text-slate-700" />}</label>)}
        </div>
      </section>
    </div>
  );
}
function Metric({ icon: Icon, label, value, note, color, bg }) {
  return <div className="rounded-2xl border border-white/[0.07] bg-[#0c1321] p-5"><div className="flex items-center justify-between"><p className="text-xs text-slate-500">{label}</p><span className={`grid h-9 w-9 place-items-center rounded-xl ${bg} ${color}`}><Icon size={18} /></span></div><p className="mt-4 text-2xl font-semibold text-white">{value}</p><p className="mt-1 text-xs text-slate-600">{note}</p></div>;
}
