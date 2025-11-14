import { SERVICES_CONTENT } from "../constants/index.js";

function Services() {
  return (
    <section id="services">
      <div className="container flex flex-col gap-16">
        {SERVICES_CONTENT.map((item, index) => {
          const isEven = index % 2 === 1; // flip every second card

          return (
            <div
              className={`flex flex-col-reverse lg:flex-row justify-center items-center gap-5 lg:gap-10 ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
              key={index}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={item.image}
                  alt={item.altText}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-3">
                <h2>{item.title}</h2>
                <p className="max-w-[520px]">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
