import { HERO_CONTENT } from "../constants/index.js"; // make sure to export as named export

function Hero() {
  return (
    <section className="pt-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 text-center">
          {/* Hero Text */}
          <div className="flex flex-col gap-2">
            <h1 className="uppercase">{HERO_CONTENT.title}</h1>
            <p>{HERO_CONTENT.subtitle}</p>
          </div>

          {/* Hero Image */}
          <div className="overflow-hidden rounded-xl h-[600px]">
            <img
              src={HERO_CONTENT.image}
              alt={HERO_CONTENT.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
