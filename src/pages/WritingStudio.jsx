import { useMemo, useState } from "react";
import { AlignLeft, Copy, FileText, ListChecks, Sparkles } from "lucide-react";

const prompts = [
  { label: "Essay outline", text: "Title:\n\nThesis statement:\n\n1. Introduction\n   - Context:\n   - Main question:\n\n2. Main argument\n   - Claim:\n   - Evidence:\n   - Explanation:\n\n3. Counterargument\n   - Alternative view:\n   - Response:\n\n4. Conclusion\n   - What the evidence suggests:\n   - Why it matters:" },
  { label: "Reading notes", text: "Source / author:\n\nCentral argument:\n\nKey concepts:\n- \n- \n- \n\nEvidence used:\n\nQuestions I still have:\n\nMy own response:" },
  { label: "Reflection", text: "What did I learn?\n\nWhat surprised me?\n\nWhich idea challenged my assumptions?\n\nWhat evidence would I like to find?\n\nHow could I apply this idea?" }
];

export default function WritingStudio() {
  const [title, setTitle] = useState("Untitled thought");
  const [content, setContent] = useState("");
  const [activePrompt, setActivePrompt] = useState("");
  const wordCount = useMemo(() => content.trim() ? content.trim().split(/\s+/).length : 0, [content]);
  const insertPrompt = (prompt) => { setContent(prompt.text); setActivePrompt(prompt.label); };
  const copyDraft = () => { if (navigator.clipboard && content) navigator.clipboard.writeText(content).catch(() => {}); };
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl border border-cyan-300/10 bg-gradient-to-r from-[#0d1b2c] via-[#0d1525] to-[#15132a] p-6 sm:p-8"><div className="relative max-w-2xl"><span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200"><Sparkles size={13} /> Writing studio</span><h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Make space for your ideas.</h2><p className="mt-3 text-sm leading-6 text-slate-400">Draft essays, capture reading notes, and turn scattered thoughts into structured arguments.</p></div></section>
      <div className="grid gap-5 xl:grid-cols-[240px_1fr]">
        <aside className="space-y-4">
          <div className="rounded-2xl border border-white/[0.07] bg-[#0c1321] p-4"><h3 className="text-xs font-semibold text-white">Writing templates</h3><p className="mt-1 text-[10px] text-slate-600">Start with a useful structure.</p><div className="mt-4 space-y-2">{prompts.map((prompt) => <button key={prompt.label} onClick={() => insertPrompt(prompt)} className={`flex w-full items-center gap-2.5 rounded-xl border px-3 py-3 text-left text-xs transition ${activePrompt === prompt.label ? "border-cyan-300/20 bg-cyan-300/[0.06] text-cyan-100" : "border-white/[0.06] text-slate-400 hover:bg-white/[0.03] hover:text-white"}`}><FileText size={15} />{prompt.label}</button>)}</div></div>
          <div className="rounded-2xl border border-white/[0.07] bg-[#0c1321] p-4"><h3 className="flex items-center gap-2 text-xs font-semibold text-white"><ListChecks size={15} className="text-cyan-300" /> Clear writing checklist</h3><div className="mt-4 space-y-3">{["One main idea per paragraph", "Evidence supports each claim", "Define important terms", "Review structure and clarity"].map((item) => <label key={item} className="flex items-start gap-2.5 text-[11px] leading-4 text-slate-500"><input type="checkbox" className="mt-0.5 accent-cyan-300" />{item}</label>)}</div></div>
        </aside>
        <section className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0c1321]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] px-5 py-4"><div className="flex items-center gap-2 text-xs text-slate-500"><AlignLeft size={15} /> Draft editor <span className="text-slate-700">/</span> {activePrompt || "Free writing"}</div><button onClick={copyDraft} className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-[10px] font-semibold text-slate-400 hover:text-cyan-200"><Copy size={13} /> Copy draft</button></div>
          <div className="p-5 sm:p-8"><input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-transparent text-2xl font-semibold tracking-tight text-white outline-none placeholder:text-slate-700 sm:text-3xl" placeholder="Give your draft a title..." /><div className="my-5 h-px bg-white/[0.06]" /><textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Begin with a question, a claim, or an idea you want to explore..." className="min-h-[440px] w-full resize-y bg-transparent text-sm leading-7 text-slate-300 outline-none placeholder:text-slate-700" /><div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] pt-4 text-[10px] text-slate-600"><span>{wordCount} words · {content.length} characters</span><span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-amber-300" /> Draft is in this session only</span></div></div>
        </section>
      </div>
    </div>
  );
}
