export default function Summary() {
  const title = "Frontend Software Engineer";

  return (
    <section id="summary" className="card card-border bg-base-100 w-full mb-5">
      <div className="card-body pb-0 ">
        <h2 className="card-title text-2xl">My Story So Far</h2>
        <p>
          Hey there. I am a <strong className="text-primary">{title}</strong> with 5+ years of specialized
          experience in marketing-driven web development. Proven track record
          optimizing and <strong className="text-primary">SEO</strong> performance, executing successful <strong className="text-primary">A/B</strong> testing
          campaigns, and implementing advanced <strong className="text-primary">analytics</strong> solutions across 100+
          client websites. Expert in landing page development and
          conversion-focused design. Combines technical expertise with a growth
          mindset, consistently delivering measurable results while adapting to
          evolving technologies and client needs.
        </p>
        <p>
          I've got experience using tools like <strong className="text-primary">React</strong>, <strong className="text-primary">JavaScript</strong>, <strong className="text-primary">CSS</strong>, <strong className="text-primary">HTML</strong>, and
          <strong className="text-primary"> PostgreSQL</strong>, and I love the challenge of creating something new with
          each project. I also love the opportunity to learn and grow as a
          developer while tackling complex problems.
        </p>
        <p>
          When I'm not coding, I love hitting the road for some exploring and
          adventure. I'm a big fan of road trips 🚙, but I also enjoy photography 📷, the occasional videogame 🎮, and video production 🎬.
        </p>
      </div>
    </section>
  );
}
