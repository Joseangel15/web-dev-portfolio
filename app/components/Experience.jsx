import Link from "next/link";

export default function Experience() {
  return (
    <section id="experience" className="mt-5 mb-10">
      <div className="card card-border bg-base-100 w-full">
        <div className="card-body">
          <h2 className="card-title text-2xl">
            Web Developer -
            <Link
              href="https://disruptiveadvertising.com/"
              className="hover:text-[#da2128] underline hover:no-underline"
            >
              Disruptive Advertising
            </Link>
          </h2>
          <p className="text-sm">2019 - Present</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div>
            <ul className="flex flex-wrap gap-5">
              <li className="p-2 bg-blue-900 rounded ">JavaScript</li>
              <li className="p-2 bg-blue-900 rounded ">HTML & CSS</li>
              <li className="p-2 bg-blue-900 rounded ">WordPress</li>
              <li className="p-2 bg-blue-900 rounded ">Shopify</li>
              <li className="p-2 bg-blue-900 rounded ">React</li>
              <li className="p-2 bg-blue-900 rounded ">
                Conversion Rate Optimization (CRO)
              </li>
              <li className="p-2 bg-blue-900 rounded ">Google Analytics</li>
              <li className="p-2 bg-blue-900 rounded ">Google Tag Manager</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
