import { Link } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return <div className="mx-auto flex min-h-[55vh] max-w-lg flex-col items-center justify-center text-center"><span className="grid h-16 w-16 place-items-center rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.06] text-cyan-200"><Compass size={28} /></span><p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">404 · Unknown territory</p><h2 className="mt-3 text-3xl font-semibold text-white">This page isn't here.</h2><p className="mt-3 text-sm leading-6 text-slate-500">Looks like this path leads nowhere. Return to your workspace and keep exploring.</p><Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-4 py-3 text-xs font-bold text-[#07111d] hover:bg-cyan-200"><ArrowLeft size={14} /> Back to overview</Link></div>;
}
