export default function Resume() {
  return (
    <section id="resume-sect" className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title"></h2>
        <div className="card-actions justify-center">
          <a href="/files/jao_2024.pdf" download className="btn btn-primary">
            <button className="btn btn-primary">Download Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}
