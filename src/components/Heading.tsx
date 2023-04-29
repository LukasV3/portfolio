type HeadingProps = {
  heading: string;
  subheading: string;
  center?: boolean;
};

export function Heading({ heading, subheading, center = false }: HeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="text-zinc-500 text-sm uppercase tracking-wider sm:text-lg">
        {subheading}
      </p>

      <h2 className="text-white font-black text-3xl sm:text-5xl md:text-6xl">
        {heading}.
      </h2>
    </div>
  );
}
