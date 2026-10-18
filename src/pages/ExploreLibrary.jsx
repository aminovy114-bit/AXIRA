import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, BookOpen, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import SectionHeading from "../components/SectionHeading.jsx";
import SubjectCard from "../components/SubjectCard.jsx";
import LessonCard from "../components/LessonCard.jsx";
import { lessons, subjects } from "../data/lessons.js";

const filters = ["All", "Humanities", "Natural sciences", "Social sciences", "Technology"];

export default function ExploreLibrary() {
  const [params] = useSearchParams();
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [showLessons, setShowLessons] = useState(true);
  const subjectParam = params.get("subject");
  const filteredSubjects = useMemo(() => subjects.filter((s) => (activeFilter === "All" || s.category === activeFilter) && `${s.name} ${s.description} ${s.category}`.toLowerCase().includes(search.toLowerCase()) && (!subjectParam || s.id === subjectParam || !search)), [activeFilter, search, subjectParam]);
  const filteredLessons = useMemo(() => lessons.filter((l) => `${l.title} ${l.subject} ${l.description}`.toLowerCase().includes(search.toLowerCase())), [search]);
  return (
    <div className="space-y-9">
      <section className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-r from-[#0d1b2c] via-[#0d1525] to-[#10142a] p-6 sm:p-8">
        <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border border-cyan-300/[0.08]"><div className="absolute inset-8 rounded-full border border-cyan-300/[0.08]" /></div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">The knowledge universe</p>
        <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">Follow the questions that move you.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">Explore interconnected fields of study, build a foundation, and discover the next question worth asking.</p>
        <div className="relative mt-6 flex max-w-xl items-center gap-3 rounded-xl border border-white/10 bg-[#080d18]/70 px-4 py-3.5 focus-within:border-cyan-300/40"><Search size={17} className="shrink-0 text-slate-500" /><input id="global-search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search subjects, concepts, lessons..." className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600" />{search && <button onClick={() => setSearch("")} aria-label="Clear search"><X size={15} className="text-slate-500" /></button>}<kbd className="hidden rounded border border-white/10 px-1.5 py-0.5 text-[10px] text-slate-600 sm:block">⌕</kbd></div>
      </section>

      <section>
        <SectionHeading eyebrow="Browse by discipline" title="Academic directions" description={`${filteredSubjects.length} subject areas to explore`} />
        <div className="mb-5 flex flex-wrap items-center gap-2"><SlidersHorizontal size={15} className="mr-1 text-slate-600" />{filters.map((filter) => <button key={filter} onClick={() => setActiveFilter(filter)} className={`rounded-full px-3.5 py-2 text-xs font-medium transition ${activeFilter === filter ? "bg-cyan-300 text-[#07111d]" : "border border-white/[0.08] bg-white/[0.02] text-slate-400 hover:border-white/15 hover:text-white"}`}>{filter}</button>)}</div>
        {filteredSubjects.length ? <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{filteredSubjects.map((subject) => <SubjectCard key={subject.id} subject={subject} />)}</div> : <EmptyState title="No subjects found" message="Try another search term or category." />}
      </section>

      <section>
        <button onClick={() => setShowLessons(!showLessons)} className="mb-5 flex w-full items-center justify-between text-left"><div><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">Start learning</p><h2 className="text-lg font-semibold text-white">Featured lessons</h2><p className="mt-1 text-sm text-slate-500">Short, focused lessons to make complex ideas approachable.</p></div><span className="rounded-xl border border-white/10 p-2 text-slate-400">{showLessons ? "−" : "+"}</span></button>
        {showLessons && <div className="grid gap-3 xl:grid-cols-2">{filteredLessons.map((lesson) => <LessonCard key={lesson.id} lesson={lesson} />)}</div>}
        {showLessons && !filteredLessons.length && <EmptyState title="No lessons found" message="Try searching for another topic." />}
      </section>
    </div>
  );
}

function EmptyState({ title, message }) {
  return <div className="rounded-2xl border border-dashed border-white/10 px-6 py-12 text-center"><BookOpen size={24} className="mx-auto text-slate-600" /><h3 className="mt-3 font-semibold text-slate-200">{title}</h3><p className="mt-1 text-sm text-slate-500">{message}</p></div>;
}
