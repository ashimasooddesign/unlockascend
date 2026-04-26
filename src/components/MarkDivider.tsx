import ascendMark from "@/assets/ascend-mark.png";

const MarkDivider = () => {
  return (
    <div className="flex justify-center py-10 md:py-14 bg-background">
      <img
        src={ascendMark}
        alt=""
        aria-hidden="true"
        className="w-[15%] max-w-[140px] min-w-[64px] h-auto"
      />
    </div>
  );
};

export default MarkDivider;
