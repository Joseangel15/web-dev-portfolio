export default function Projects() {

  const projects = [
    {
      id: 1,
      title: "Card Title",
      description:
        "A card component has a figure, a body part, and inside body there are title and actions parts",
    },
  ];

  return (
    <section id="projects" className="mt-5 mb-10">
      {
        projects.map((projects) => (
          <div key={projects.id} className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{projects.title}</h2>
              <p>{projects.description}</p>
            </div>
          </div>
        ))
      }
    </section>
  );
}
