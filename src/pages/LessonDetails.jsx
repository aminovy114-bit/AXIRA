import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock3, Lightbulb, RotateCcw } from "lucide-react";
import { lessons } from "../data/lessons.js";

export default function LessonDetails() {
  const { lessonId } = useParams();
  const lesson = lessons.find((item) => item.id === lessonId);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  if (!lesson) return <div className="rounded-2xl border border-white/10 p-10 text-center"><h2 className="text-xl font-semibold">Lesson not found</h2><Link to="/library" className="mt-4 inline-block text-cyan-300">Back to library</Link></div>;
  const score = lesson.quiz.reduce((sum, q, i) => sum + (answers[i] === q.answer ? 1 : 0), 0);
  return (
    <div className="mx-auto max-w-4xl space-y-7">
      <Link to="/library" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-cyan-300"><ArrowLeft size={14} /> Back to library</Link>
      <section className="relative overflow-hidden rounded-3xl border border-cyan-300/10 bg-[#0d1728] p-6 sm:p-9">
        <div className="absolute -right-10 -top-14 h-60 w-60 rounded-full border border-cyan-300/[0.08]"><div className="absolute inset-8 rounded-full border border-cyan-300/[0.08]" /></div>
        <div className="relative"><div className="flex flex-wrap gap-2"><span className="rounded-full bg-cyan-300/10 px-3 py-1 text-[10px] font-semibold text-cyan-200">{lesson.subject}</span><span className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-slate-500">{lesson.level}</span></div><h2 className="mt-5 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">{lesson.title}</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{lesson.description}</p><div className="mt-5 flex items-center gap-4 text-xs text-slate-500"><span className="flex items-center gap-1.5"><Clock3 size={14} /> {lesson.duration}</span><span className="flex items-center gap-1.5"><BookOpen size={14} /> {lesson.sections.length} sections</span></div></div>
      </section>
      <div className="grid gap-7 lg:grid-cols-[1fr_240px]">
        <article className="space-y-7">
          {lesson.sections.map((section, i) => <section key={section.heading} className="rounded-2xl border border-white/[0.07] bg-[#0c1321] p-5 sm:p-7"><div className="mb-4 flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-lg bg-cyan-300/10 text-xs font-bold text-cyan-200">0{i + 1}</span><h3 className="text-lg font-semibold text-white">{section.heading}</h3></div><p className="text-sm leading-7 text-slate-400">{section.body}</p></section>)}
          <section className="rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.045] p-5 sm:p-7"><div className="flex items-center gap-2 text-cyan-200"><Lightbulb size={18} /><h3 className="font-semibold">Key takeaway</h3></div><p className="mt-3 text-sm leading-7 text-slate-300">{lesson.takeaway}</p></section>
          <section className="rounded-2xl border border-white/[0.07] bg-[#0c1321] p-5 sm:p-7"><div className="mb-6 flex items-start justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">Check your understanding</p><h3 className="mt-2 text-xl font-semibold text-white">Quick knowledge check</h3><p className="mt-1 text-xs text-slate-500">Choose the best answer for each question.</p></div><span className="rounded-lg bg-white/[0.04] px-2.5 py-1.5 text-[10px] text-slate-500">{lesson.quiz.length} questions</span></div>
            <div className="space-y-6">{lesson.quiz.map((q, qi) => <div key={q.question}><p className="text-sm font-semibold text-slate-200">{qi + 1}. {q.question}</p><div className="mt-3 space-y-2">{q.options.map((option, oi) => <label key={option} className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-xs transition ${submitted && oi === q.answer ? "border-emerald-400/30 bg-emerald-400/[0.07] text-emerald-100" : answers[qi] === oi ? "border-cyan-300/30 bg-cyan-300/[0.06] text-white" : "border-white/[0.06] text-slate-400 hover:bg-white/[0.025]"}`}><input type="radio" name={`q-${qi}`} checked={answers[qi] === oi} onChange={() => { setAnswers({ ...answers, [qi]: oi }); setSubmitted(false); }} className="accent-cyan-300" />{option}{submitted && oi === q.answer && <CheckCircle2 size={14} className="ml-auto" />}</label>)}</div></div>)}</div>
            {submitted && <div className="mt-5 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 text-sm text-slate-200">You scored <strong className="text-cyan-200">{score}/{lesson.quiz.length}</strong>. {score === lesson.quiz.length ? "Excellent work — you have a strong grasp of these ideas." : "Review the highlighted answers and try again to strengthen your understanding."}</div>}
            <div className="mt-6 flex flex-wrap gap-3"><button onClick={() => setSubmitted(true)} className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-4 py-3 text-xs font-bold text-[#07111d] hover:bg-cyan-200">Check answers <ArrowRight size={14} /></button><button onClick={() => { setAnswers({}); setSubmitted(false); }} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-xs font-semibold text-slate-400 hover:text-white"><RotateCcw size={13} /> Reset quiz</button></div>
          </section>
        </article>
        <aside className="space-y-4">
          <div className="rounded-2xl border border-white/[0.07] bg-[#0c1321] p-5"><p className="text-xs font-semibold text-white">In this lesson</p><div className="mt-4 space-y-3">{lesson.sections.map((s, i) => <div key={s.heading} className="flex gap-2.5 text-xs text-slate-500"><span className="text-cyan-300">0{i + 1}</span>{s.heading}</div>)}</div></div>
          <div className="rounded-2xl border border-white/[0.07] bg-[#0c1321] p-5"><p className="text-xs font-semibold text-white">Learning tip</p><p className="mt-3 text-xs leading-6 text-slate-500">After reading, close the lesson and explain the main idea in your own words. Recall helps make knowledge stick.</p></div>
        </aside>
      </div>
    </div>
  );
}
