import Link from "next/link";

export default function Experience() {
  let experience = [
    {
      id: 1,
      title: "Web Developer",
      company: "Disruptive Advertising",
      date: "2019 - Present",
      technologies: [
        "JavaScript",
        "HTML & CSS",
        "WordPress",
        "Shopify",
        "React",
        "Conversion Rate Optimization (CRO)",
        "Google Analytics",
        "Google Tag Manager",
      ],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  return (
    <section id="experience" className="mt-5 mb-10">
      <div className="card card-border bg-base-100 w-full">
        {experience.map((exp) => (
          <div key={exp.id} className="card-body">
            <h2 className="card-title text-2xl">
              {exp.title} -{" "}
              <Link
                href="https://disruptiveadvertising.com/"
                className="hover:text-[#da2128] underline hover:no-underline"
              >
                {exp.company}
              </Link>
            </h2>
            <p className="text-sm">{exp.date}</p>
            <p>{exp.description}</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              {exp.technologies.map((tech) => (
                <span key={tech} className="p-2 px-3 bg-secondary text-primary-content rounded font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
