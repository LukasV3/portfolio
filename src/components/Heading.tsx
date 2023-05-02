import ProfileImg from "../assets/profile.jpg";

type HeadingProps = {
  heading: string;
  subheading: string;
  body?: string;
  center?: boolean;
  aboutHeading?: boolean;
};

export function Heading({
  heading,
  subheading,
  body,
  center,
  aboutHeading,
}: HeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="text-zinc-500 text-sm uppercase tracking-wider sm:text-lg">
        {subheading}
      </p>

      <h2 className="text-white font-black text-3xl sm:text-5xl md:text-6xl">
        {heading}.
      </h2>

      <div className="mt-4 max-w-3xl">
        {aboutHeading && (
          <img
            src={ProfileImg}
            className="float-left mr-5 sm:mr-10 mt-1.5 rounded-full w-20 h-20 sm:w-28 sm:h-28 [shape-outside:circle(50%)]"
          />
        )}

        {body && (
          <p className="text-sm text-zinc-500 text-secondary leading-[22px]">{body}</p>
        )}
      </div>
    </div>
  );
}
