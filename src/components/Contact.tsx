import { Heading } from "./Heading";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";
import { SocialLinks } from "./SocialLinks";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  return (
    <section id="contact" className="mt-20 pt-10">
      <div className="flex flex-col gap-y-20 lg:relative">
        <div className="container lg:grid lg:grid-cols-2">
          <div className="bg-[#100d25] p-8 rounded-2xl border-b-2 lg:mr-28 lg:mb-10">
            <div className="flex justify-between">
              <Heading heading="Contact" subheading="Get in touch" />

              <SocialLinks iconSize="md" />
            </div>

            <Form />
          </div>
        </div>

        <div className="lg:w-full lg:h-full lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:grid lg:grid-cols-2 lg:content-end lg:-z-10">
          <div className="relative ml-5 lg:col-start-2">
            <div className="absolute h-1/3 w-full bg-gradient-to-b from-background"></div>

            <Map />
          </div>
        </div>
      </div>
    </section>
  );
}

function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    if (!formRef.current) throw Error("formRef is not assigned");

    emailjs
      .sendForm(
        "service_wezhe4i",
        "template_euq8rfv",
        formRef.current,
        "AqfnYHMt-gd9qsfAD"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mt-12 flex flex-col gap-8"
    >
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Your Name*</span>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="bg-primary-dark py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Your Email*</span>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="bg-primary-dark py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Your Message*</span>
        <textarea
          rows={4}
          name="message"
          placeholder="Message"
          required
          className="bg-primary-dark py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
        />
      </label>

      <button
        className="w-fit ml-auto bg-primary-dark py-2 px-8 rounded-xl outline-none text-white font-bold border border-white hover:bg-white hover:text-primary-dark duration-300"
        type="submit"
      >
        {loading ? "Sending" : "Send"}
      </button>

      {success && <p className="text-center">Your message has been sent!</p>}
    </form>
  );
}

function Map() {
  const mapColors = {
    fill: "#1d1836",
    stroke: "#e3e3e3",
  };

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1100,
      }}
    >
      <Geographies
        geography="/features.json"
        fill={mapColors.fill}
        stroke={mapColors.stroke}
        strokeWidth={1.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[0.8, 52.1]}
        dx={-110}
        dy={-125}
        connectorProps={{
          stroke: mapColors.stroke,
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text
          x="-15"
          textAnchor="end"
          alignmentBaseline="baseline"
          fill="#fff"
          className="text-base font-bold"
        >
          Currently based in Essex, UK
        </text>
      </Annotation>
    </ComposableMap>
  );
}
