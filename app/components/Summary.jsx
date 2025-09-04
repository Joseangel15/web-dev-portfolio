export default function Summary() {
  const title = "Frontend Software Engineer";

  return (
    <section id="summary" className="card card-border bg-base-100 w-full mb-5">
      <div className="card-body pb-0 ">
        <h2 className="card-title text-2xl">My Story So Far</h2>
        <p>
          As a <strong className="text-primary">{title}</strong> I specialize in leveraging <strong className="text-primary">React</strong> to build dynamic, high-performance web experiences that drive business growth. With 5+ years of experience, my expertise lies in combining technical proficiency with a growth-focused mindset to create visually compelling user interfaces. I excel at optimizing web applications for <strong className="text-primary">SEO</strong>, implementing <strong className="text-primary">A/B testing</strong> campaigns, and integrating advanced <strong className="text-primary">analytics solutions</strong> to deliver measurable results. I am passionate about tackling complex challenges and consistently evolving my skills in React and the broader web development ecosystem to meet the demands of a dynamic digital landscape."
        </p>
        <p>
          I build high-performance applications using a modern tech stack including <strong className="text-primary">React</strong>, <strong className="text-primary">JavaScript</strong>, <strong className="text-primary">CSS</strong>, <strong className="text-primary">HTML</strong>, and
          <strong className="text-primary"> PostgreSQL</strong> and others. I thrive on the challenge of creating new solutions and am passionate about continuous learning and growth as I tackle complex problems.
        </p>
        <p>
          When I'm not coding, I love hitting the road for some exploring and
          adventure. I'm a big fan of road trips 🚙, but I also enjoy photography 📷, the occasional videogame 🎮, and video production 🎬.
        </p>
      </div>
    </section>
  );
}
