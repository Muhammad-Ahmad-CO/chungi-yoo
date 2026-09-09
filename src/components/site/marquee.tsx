export function Marquee({ text, className = "" }: { text: string; className?: string }) {
  const items = Array.from({ length: 6 });
  return (
    <div className={`overflow-hidden whitespace-nowrap py-6 ${className}`}>
      <div className="inline-flex w-max animate-marquee">
        {items.concat(items).map((_, i) => (
          <span key={i} className="display px-8 text-4xl italic md:text-6xl">
            {text}
            <span className="not-italic"> ✳ </span>
          </span>
        ))}
      </div>
    </div>
  );
}
