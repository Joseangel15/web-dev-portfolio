import Link from "next/link";

export default function Experience() {
  let experience = [
    {
      id: 1,
      title: "Web Developer",
      company: "Disruptive Advertising",
      companyLink: "https://disruptiveadvertising.com/",
      linkColor: "#da2128",
      companyDescription:
        "Disruptive Advertising is a leading digital marketing agency specializing in PPC management, social media advertising, and conversion rate optimization.",
      date: "2019 - 2025",
      technologies: [
        "JavaScript",
        "HTML & CSS",
        "WordPress",
        "Shopify",
        "React",
        "Conversion Rate Optimization (CRO)",
        "Google Analytics",
        "Google Tag Manager",
        "Git",
        "Github",
        "Figma",
        "Adobe XD",
        "SEO",
        "Next.js",
        "Node.js",
        "Python"
      ],
      responsibilities: [
        "Engineered dynamic and responsive user interfaces using React, HTML5, and CSS (leveraging Tailwind CSS for rapid development), consistently delivering visually appealing and highly performant web applications across diverse devices.",
        "Developed and integrated RESTful APIs with Node.js and PostgreSQL, demonstrating full-stack proficiency and seamless data flow between front-end and back-end systems.",
        "Implemented A/B testing methodologies and applied SEO best practices to enhance user engagement and improve search engine rankings, resulting in quantifiable improvements in conversion rates and organic traffic.",
        "Proficiently managed codebase using Git version control, ensuring collaborative development, efficient code reviews, and streamlined deployment workflows.",
        "Executed dev-focused in-platform strategy, leading to measurable results.",
        "Configured and deployed Google Analytics and Google Ads tracking via Google Tag Manager (GTM), meticulously collecting granular user behavior data to inform design optimizations, track campaign performance, and drive data-driven product enhancements.",
        "Troubleshot and solved technical issues on client websites, ensuring optimal performance and user experience.",
        "I implemented highly responsive web applications from concept to deployment, ensuring optimal user experiences and consistent visual integrity across a wide range of devices and screen sizes using modern CSS techniques and media queries.",
        "Experienced in working with multiple e-commerce and lead generation platforms, including WordPress, Shopify, BigCommerce, and others.",
      ],
    },
    {
      id: 2,
      title: " Data Specialist and HR Representative",
      company: "Brambles",
      companyLink: "https://www.brambles.com/",
      linkColor: "#004b87",
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
      <h2 className="card-title text-2xl card-body items-start">Professional Experience</h2>
      {experience.map((exp) => (
        <div key={exp.id} className="card card-border bg-base-100 w-full mb-5">
          <div className="card-body">
            <h3 className="card-title text-1xl">
              {exp.title} -{" "}
              <Link
                href={exp.companyLink}
                target="_blank"
                className={`no-underline hover:underline hover:text-primary`}
              >
                {exp.company}
              </Link>
            </h3>
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
              {exp.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="p-2 px-3 bg-secondary text-primary-content rounded color-accent font-bold tracking-wide"
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
