import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaQuoteRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Sarah",
    text: "Great products and excellent shopping experience.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Michael",
    text: "The product quality is really good. I love shopping here.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Jessica",
    text: "I really enjoyed shopping here. The products are amazing.",
    img: "https://picsum.photos/104/104",
  },
];

const Testimonials = () => {
  return (
    <section className="py-10 mt-10">
      <div className="container mx-auto px-4">

        {/* Header Section */}
        <div
          className="text-center mb-10 max-w-[600px] mx-auto"
          data-aos="fade-up"
        >
          <p className="text-sm text-orange-500">
            What our customers are saying
          </p>

          <h1 className="text-3xl font-bold dark:text-white">
            Testimonials
          </h1>

          <p className="text-xs text-gray-400 mt-2">
            Lorem ipsum dolor sit amet
          </p>
        </div>

        {/* Testimonials Slider */}
        <div data-aos="fade-up">

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {testimonialData.map((data) => (
              <SwiperSlide key={data.id} className="px-3 py-4">

                <div
                  className="
                    relative
                    bg-white
                    dark:bg-gray-800
                    shadow-md
                    rounded-2xl
                    p-6
                    text-center
                    min-h-[220px]
                    transition-colors
                    duration-300
                    z-10
                  "
                >

                  {/* Decorative background card */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-orange-400/30
                      dark:bg-orange-500/20
                      rounded-2xl
                      translate-x-3
                      translate-y-3
                      -z-10
                    "
                  ></div>

                  {/* Quote Icon */}
                  <FaQuoteRight
                    className="
                      absolute
                      top-5
                      right-5
                      text-3xl
                      text-orange-200
                      dark:text-orange-400/30
                    "
                  />

                  {/* Profile Image */}
                  <img
                    src={data.img}
                    alt={data.name}
                    className="
                      w-20
                      h-20
                      rounded-full
                      mx-auto
                      object-cover
                      mb-4
                    "
                  />

                  {/* Name */}
                  <h3 className="font-bold text-lg dark:text-white">
                    {data.name}
                  </h3>

                  {/* Testimonial */}
                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                    {data.text}
                  </p>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;