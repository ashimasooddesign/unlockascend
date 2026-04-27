import ascendMark from "@/assets/seam-mark.png";

/**
 * Decorative section mark that visually bridges two sections.
 * It is absolutely centered on the seam between the previous and next
 * section so it overlaps both, while staying responsive on small screens.
 */
const MarkDivider = () => {
  return (
    <div
      aria-hidden="true"
      className="relative h-0 z-10 pointer-events-none"
    >
      <img
        src={ascendMark}
        alt=""
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-auto w-[22vw] sm:w-[16vw] md:w-[12vw] lg:w-[10vw] max-w-[120px] min-w-[56px]"
      />
    </div>
  );
};

export default MarkDivider;
