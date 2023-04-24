import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <Navbar />

      <h1 className="text-4xl sm:text-6xl md:text-9xl whitespace-nowrap">Lukas Volk</h1>

      <h2 className="text-sm">
        Hi, my name is Lukas and I'm a self-taught frontend developer at DestinationCore
      </h2>
    </section>
  );
}
