import { PORTFOLIO_PROJECTS } from "../constants/index.js";

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container flex flex-col gap-10">
        <h2 className="uppercase text-center">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <a
              href={project.link}
              key={index}
              rel="noreferrer"
              className="relative overflow-hidden rounded-lg group"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-5">
                <h3 className="text-white mb-2">{project.name}</h3>
                <p className="text-gray-200">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
