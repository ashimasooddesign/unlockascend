const items = [
  "You're seeking depth, not another wellness fix",
  "You want to understand yourself, not just manage yourself",
  "You're drawn to traditional practice but need a living, modern entry point",
  "You sense that steadiness is possible, but don't yet know the path there",
  "You want to go slowly, and go far",
];

import ascendLogo from "@/assets/ascend-logo.svg";

const ForYouSection = () => {
  return (
    <section id="for-you" aria-label="Who this work is for" className="py-24 md:py-36">
      <div className="container max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-brand mb-12 text-center">
          This work is for you if…
        </h2>
        <ul className="space-y-5">
          {items.map((item, i) => (
            <li
              key={i}
              className="font-body text-base md:text-lg text-muted-foreground leading-relaxed text-center"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-16 w-12 h-px bg-primary opacity-40 mx-auto" />
      </div>
    </section>
  );
};

export default ForYouSection;
