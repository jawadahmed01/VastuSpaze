import { REVIEWS } from '../constants/index.js';

function Reviews() {
  return (
    <section id='reviews'>
      <div className="container flex flex-col gap-12">
        {/* Section Heading */}
        <div className="flex flex-col gap-5 text-center max-w-[750px] mx-auto">
          <h2>REVIEWS</h2>
          <p>{REVIEWS.text}</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.reviews.map((review, index) => (
            <div
              className="flex flex-col justify-between gap-10 p-6 rounded-lg border border-gray-400"
              key={index}
            >
              <p>{review.review}</p>
              <div className="flex justify-center items-center gap-5">
                <img
                  src={review.image}
                  alt={review.name}
                  className="rounded-full w-[70px] h-[70px]"
                />
                <div className="flex flex-col">
                  <h4>{review.name}</h4>
                  <p className="text-[16px]">{review.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
