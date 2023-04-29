import { Heading } from "./Heading";
import { ComposableMap, Geographies, Geography, Annotation } from "react-simple-maps";

export default function Contact() {
  return (
    <section id="contact" className="mt-20 pt-10">
      <div className="container">
        <Heading heading="Contact" subheading="Get in touch" />
      </div>

      <div className="mt-20 flex flex-col gap-y-20 lg:relative">
        <div className="container lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:grid lg:grid-cols-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eaque dolor,
            debitis architecto dolorum repellendus voluptate error repudiandae soluta
            reprehenderit quisquam quod quas delectus, illo suscipit! Sed officiis neque
            rerum.
          </p>
        </div>

        <div className="grid lg:grid-cols-2">
          <div className="relative ml-5 lg:ml-20 lg:col-start-2">
            <div className="absolute h-3/4 w-full bg-gradient-to-b from-[#050816]"></div>
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
}

function Map() {
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
        fill="#1d1836"
        stroke="#FFFFFF"
        strokeWidth={1.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
      <Annotation
        subject={[1.6, 41.75]}
        dx={-110}
        dy={-125}
        connectorProps={{
          stroke: "#fff",
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
          Currently based in Barcelona
        </text>
      </Annotation>
    </ComposableMap>
  );
}
