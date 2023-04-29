type HeadingProps = {
  heading: string;
  subheading: string;
  body?: string;
  center?: boolean;
};

export function Heading({ heading, subheading, body, center }: HeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="text-zinc-500 text-sm uppercase tracking-wider sm:text-lg">
        {subheading}
      </p>

      <h2 className="text-white font-black text-3xl sm:text-5xl md:text-6xl">
        {heading}.
      </h2>

      {body && (
        <p className="text-sm text-zinc-500 mt-4 text-secondary max-w-3xl leading-[22px]">
          {body}
        </p>
      )}
    </div>
  );
}
