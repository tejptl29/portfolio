export default function SectionHeader({ tag, title, highlight, subtitle }) {
  return (
    <div className="text-left mb-5 sm:mb-7 space-y-1.5">
      {tag && (
        <span className="inline-block px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
          {tag}
        </span>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed pt-0.5">
          {subtitle}
        </p>
      )}
    </div>
  );
}
