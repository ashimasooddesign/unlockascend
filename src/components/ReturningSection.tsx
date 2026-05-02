import ascendLogo from "@/assets/ascend-logo.svg";

const ReturningSection = () => {
  return (
    <section aria-label="On returning" className="py-20 md:py-28">
      <div className="container max-w-3xl text-center">
        <img
          src={ascendLogo}
          alt=""
          aria-hidden="true"
          className="h-12 md:h-14 w-auto mx-auto mb-8 opacity-90"
        />
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
          This work is not about adding more. It is about returning — to rhythm, to
          presence, to the quiet intelligence that precedes thought.
        </p>
      </div>
    </section>
  );
};

export default ReturningSection;
