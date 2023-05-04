import Navbar from "./Navbar";
import { SocialLinks } from "./SocialLinks";

type HorizontalRuleProps = {
  direction: "left" | "right";
};

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen overflow-hidden bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />

      <HorizontalRule direction="left" />

      <h1 className="z-10 text-5xl text-transparent whitespace-nowrap bg-clip-text bg-white text-edge-outline animate-title duration-1000 sm:text-6xl md:text-9xl">
        Lukas Volk
      </h1>

      <HorizontalRule direction="right" />

      <div className="container max-w-lg my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 mb-4">
          Lead frontend developer currently working at{" "}
          <a
            target="_blank"
            href="https://destinationcore.com"
            className="underline duration-500 hover:text-zinc-300"
          >
            DestinationCore
          </a>
          , based in Barcelona, Spain
        </h2>

        <SocialLinks />
      </div>
    </section>
  );
}

function HorizontalRule({ direction }: HorizontalRuleProps) {
  return (
    <div
      className={`hidden md:block w-screen h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 ${
        direction === "left" ? "animate-fade-left" : "animate-fade-right"
      }`}
    />
  );
}
