import Link from "next/link";

export default function Experience() {
  let experience = [
    {
      id: 1,
      title: "Web Developer",
      company: "Disruptive Advertising",
      companyDescription:
        "Disruptive Advertising is a leading digital marketing agency specializing in PPC management, social media advertising, and conversion rate optimization.",
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
      responsibilities: [
        "Web development (HTML, CSS, JavaScript, React, Python).",
        "Implemented custom website changes and created landing pages for multiple clients.",
        "Google Analytics, Facebook, and Google Ads tracking changes and implementations.",
        "Skilled in Front-end Web Development with a strong focus on Conversion Rate Optimization.",
        "Execute dev-focused in-platform strategy, leading to measurable results.",
        "Conduct UX, development, and speed audits to pinpoint areas of improvement on client websites.",
        "Troubleshoot and solve technical issues on client websites, ensuring optimal performance and user experience.",
        "Experienced in working with multiple e-commerce and lead generation platforms, including WordPress, Shopify, BigCommerce, and others.",
      ],
    },
    {
      id: 2,
      title: " Data Specialist and HR Representative",
      company: "Brambles",
      companyDescription:
        "Brambles is a global provider of logistics solutions, connecting the world’s supply chains through its operations, people and technology.",
      date: "2016 - 2019",
      technologies: [
        "Workday",
        "HRIS",
        "Data Entry Software",
        "Microsoft Office",
      ],
      responsibilities: [
        "Managed Human Resources data entry software, Workday.",
        "Investigated, identified, and resolved errors in employees' information in the data entry software.",
        "Created standard operating procedures to update and improve the data entry process.",
        "Assisted the HRIS team in troubleshooting new changes and implementations to the data entry software.",
        "Handled and resolved a wide variety of queries, relating to HR policy and employee benefits.",
      ],
    },
  ];

  return (
    <section id="experience" className="mt-5 mb-10">
      {experience.map((exp) => (
        <div className="card card-border bg-base-100 w-full mb-5">
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
            <p className="mb-1.5! text-base">{exp.companyDescription}</p>
            <p className="text-sm">{exp.date}</p>
            <ul className="mb-3 text-base">
              {exp.responsibilities.map((responsibilities, index) => (
                <li className="list-disc ml-5" key={index}>
                  {responsibilities}
                </li>
              ))}
            </ul>
            <div className="flex gap-2 mt-2 flex-wrap">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="p-2 px-3 bg-secondary text-primary-content rounded font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
