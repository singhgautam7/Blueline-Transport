/* The eyebrow + title (+ optional intro) block repeated across sections. */
export function SectionHeading({
  eyebrow,
  heading,
  intro,
  headingClassName = "mb-3 max-w-[640px]",
  introClassName = "mb-[34px] max-w-[620px]",
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  headingClassName?: string;
  introClassName?: string;
}) {
  return (
    <>
      <div className="mb-[14px] flex items-center gap-[10px]">
        <span className="h-[2px] w-[26px] bg-accent" />
        <span className="font-display text-[12px] font-bold uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </span>
      </div>
      <h2
        className={`font-display text-[29px] font-extrabold leading-[1.06] tracking-[-0.015em] text-blued site:text-[42px] ${headingClassName}`}
      >
        {heading}
      </h2>
      {intro ? <p className={`text-[16px] text-body ${introClassName}`}>{intro}</p> : null}
    </>
  );
}
