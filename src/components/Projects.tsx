import { Heading } from "./Heading";

export default function Projects() {
  const section = {
    heading: "Projects",
    subheading: "My Work",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque eligendi fugit sunt nostrum placeat, officia dolores earum, quia modi assumenda suscipit quod totam eaque consectetur, provident cumque explicabo a iusto.",
  };

  return (
    <section id="projects" className="container my-20 py-10">
      <Heading
        heading={section.heading}
        subheading={section.subheading}
        body={section.body}
      />
    </section>
  );
}
