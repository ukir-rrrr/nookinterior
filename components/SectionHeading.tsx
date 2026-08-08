type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p className="mb-2 text-xs tracking-[0.2em] text-accent-2 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-xl text-text sm:text-2xl md:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-[#6b6b6b] md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
