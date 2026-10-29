import React, { useEffect } from "react";

import Image1 from "../../assets/woman.png";
import Image2 from "../../assets/shopping.png";
import Image3 from "../../assets/sale.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import AOS from "aos";

import "swiper/css";
import "aos/dist/aos.css";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% Off on Men's Wear",
    description:
      "Discover the latest men's fashion with amazing discounts.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% Off on Women's Wear",
    description:
      "Find your favorite women's fashion at special prices.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% Off on All Products",
    description:
      "Grab amazing deals and shop your favorite products today.",
  },
];

const Hero = ({handleOrderPopup}) => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
      offset: 0,
    });

    // Refresh AOS setelah halaman selesai dimuat
    setTimeout(() => {
      AOS.refreshHard();
    }, 300);
  }, []);

  // ==========================================
  // RESET ANIMATION
  // ==========================================
  const resetAOS = () => {
    const elements = document.querySelectorAll(
      ".hero-aos"
    );

    elements.forEach((element) => {
      element.classList.remove("aos-animate");
    });
  };

  // ==========================================
  // PLAY ANIMATION AGAIN
  // ==========================================
  const playAOS = () => {
    resetAOS();

    setTimeout(() => {
      AOS.refreshHard();

      const activeSlide = document.querySelector(
        ".swiper-slide-active"
      );

      if (activeSlide) {
        const elements = activeSlide.querySelectorAll(
          ".hero-aos"
        );

        elements.forEach((element) => {
          element.classList.add("aos-animate");
        });
      }
    }, 150);
  };

  return (
    <div
      className="
        relative
        overflow-hidden
        min-h-[550px]
        sm:min-h-[650px]
        bg-gray-100
        dark:bg-gray-950
        dark:text-white
        flex
        justify-center
        items-center
        duration-200
      "
    >

      {/* =========================================
          BACKGROUND ORANGE SHAPE
      ========================================== */}
      <div
        className="
          h-[700px]
          w-[700px]
          bg-orange-400/40
          absolute
          -top-1/2
          right-0
          rounded-3xl
          rotate-45
          -z-0
        "
      ></div>


      {/* =========================================
          HERO CONTAINER
      ========================================== */}
      <div
        className="
          container
          relative
          z-10
          pb-8
          sm:pb-0
        "
      >

        <Swiper
          modules={[Autoplay]}

          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}

          loop={true}

          speed={800}

          onInit={() => {
            setTimeout(() => {
              playAOS();
            }, 300);
          }}

          onSlideChangeTransitionStart={() => {
            resetAOS();
          }}

          onSlideChangeTransitionEnd={() => {
            playAOS();
          }}
        >

          {ImageList.map((data) => (

            <SwiperSlide key={data.id}>

              {/* ==================================
                  HERO GRID
              =================================== */}
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2

                  gap-8

                  items-center

                  min-h-[550px]
                  sm:min-h-[650px]
                "
              >

                {/* ==================================
                    LEFT SIDE - TEXT
                =================================== */}
                <div
                  className="
                    order-2
                    sm:order-1

                    flex
                    flex-col
                    justify-center

                    gap-4

                    pl-6
                    sm:pl-12
                    lg:pl-20

                    pr-4
                    sm:pr-8

                    text-center
                    sm:text-left

                    relative
                    z-20
                  "
                >

                  {/* Small Text */}
                  <p
                    className="
                      hero-aos
                      text-orange-500
                      font-semibold
                      text-sm
                      sm:text-base
                    "
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="100"
                  >
                    Welcome to Shopsy
                  </p>


                  {/* ==================================
                      MAIN TITLE
                  =================================== */}
                  <h1
                    className="
                      hero-aos

                      text-4xl
                      sm:text-5xl
                      lg:text-6xl

                      font-bold

                      leading-tight

                      max-w-[650px]
                    "
                    data-aos="zoom-out"
                    data-aos-duration="900"
                    data-aos-delay="150"
                  >
                    {data.title}
                  </h1>


                  {/* ==================================
                      DESCRIPTION
                  =================================== */}
                  <p
                    className="
                      hero-aos

                      text-sm
                      sm:text-base

                      text-gray-600
                      dark:text-gray-300

                      max-w-[500px]

                      mx-auto
                      sm:mx-0
                    "
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="300"
                  >
                    {data.description}
                  </p>


                  {/* ==================================
                      ORDER BUTTON
                  =================================== */}
                  <div
                    className="
                      hero-aos
                      mt-3
                    "
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="450"
                  >
                    <button
                    onClick={handleOrderPopup}
                      className="
                        bg-gradient-to-r
                        from-orange-500
                        to-yellow-400

                        hover:scale-105
                        active:scale-95

                        duration-200

                        text-white

                        py-3
                        px-7

                        rounded-full

                        font-semibold

                        shadow-lg

                        transition
                      "
                    >
                      Order Now
                    </button>
                  </div>

                </div>


                {/* ==================================
                    RIGHT SIDE - IMAGE
                =================================== */}
                <div
                  className="
                    order-1
                    sm:order-2

                    flex
                    justify-center
                    items-center

                    relative
                    z-10

                    min-h-[300px]
                    sm:min-h-0
                  "
                >

                  {/* ==================================
                      IMAGE POP-UP ANIMATION
                  =================================== */}
                  <div
                    className="
                      hero-aos

                      relative

                      flex
                      justify-center
                      items-center
                    "
                    data-aos="zoom-in"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >

                    <img
                      src={data.img}
                      alt={data.title}
                      className="
                        w-[280px]

                        sm:w-[400px]

                        lg:w-[470px]

                        object-contain

                        drop-shadow-2xl

                        mx-auto

                        sm:scale-110
                      "
                    />

                  </div>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </div>
  );
};

export default Hero;