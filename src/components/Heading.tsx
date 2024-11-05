import ProfileImg from "../assets/profile.webp";

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

      <div className="mt-4 max-w-[67rem] sm:mt-10">
        {aboutHeading && (
          <img
            src={ProfileImg}
            alt="Lukas Volk profile"
            className="float-left mr-5 mb-1 sm:mr-10 rounded-full w-20 h-20 sm:w-28 sm:h-28 [shape-outside:circle(50%)]"
            loading="lazy"
          />
        )}

        {body && (
          <p className="text-sm text-zinc-500 leading-[22px] whitespace-pre-line">
            {body}
          </p>
        )}
      </div>
    </div>
  );
}
