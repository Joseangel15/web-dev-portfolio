import Link from "next/link";

export default function Education() {
  const educationData = [
    {
      Institution: "DevMountain",
      Location: "Provo, Utah",
      Link: "https://devmountain.com/",
      Degree: "Full-Stack Web Development Bootcamp",
      Year: "2018",
    },
    {
      Institution: "Universidad del Sagrado Corazón",
      Location: "San Juan, Puerto Rico",
      Link: "https://www.sagrado.edu/",
      Degree: "Bachelor of Arts in Communications",
      Year: "2009 - 2013",
    },
  ];

  return (
    <section id="education" className="mt-5 mb-10">
      <div className="card card-border bg-base-100 w-full mb-5">
        <div className="card-body">
          <h2 className="text-2xl mb-4 font-bold">Education</h2>
          {educationData.map((edu, index) => (
            <div key={index}>
              <h3 className="card-title text-xl">{edu.Degree}</h3>
              <Link
                className="mb-1.5! text-base hover:underline"
                target="_blank"
                href={edu.Link}
              >
                {edu.Institution}
              </Link>
              <p className="text-sm mb-1!">{edu.Location}</p>
              <p className="text-sm">{edu.Year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
