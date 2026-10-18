export default function SectionHeading({ eyebrow, title, description, action }) {
  return (
    <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
      <div>
        {eyebrow && <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p>}
        <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">{title}</h2>
        {description && <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-500">{description}</p>}
      </div>
      {action}
    </div>
  );
}
