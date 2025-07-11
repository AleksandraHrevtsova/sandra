"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const companies = [
  {
    name: "GoIT",
    image: "/logos/goit-color.png",
    url: "https://goit.global/",
  },
  {
    name: "GoITeens",
    image: "/logos/goiteens-color.png",
    url: "https://courses-all.goiteens.com/",
  },
  {
    name: "Justwell",
    image: "/logos/justwell-color.png",
    url: "https://justwell.io/",
  },
  {
    name: "NT Academy",
    image: "/logos/nt-color.svg",
    url: "https://nt.ua/academy",
  },
  {
    name: "Tulka",
    image: "/logos/tulka-color.png",
    url: "https://www.tulka.com/",
  },
  {
    name: "Luona",
    image: "/logos/luona-color.webp",
    url: "https://luona.fi/uk/digivok",
  },
  {
    name: "Mini Zoo",
    image: "/logos/minizoo-color.png",
    url: "https://www.minizoo.kiev.ua/",
  }

];

export default function CompanyLogos() {
  return (
    <section className="py-10 px-6 bg-[#f5f7fa]">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Companies I&apos;ve Worked With
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 40 },
        }}
      >
        {companies.map((company, idx) => (
          <SwiperSlide key={company.name}>
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-20"
            >
              <Image
                width={240}
                height={240}
                priority={idx < 3} 
                src={company.image}
                alt={company.name}
                className="w-full h-full object-contain max-h-16 transition-transform hover:scale-105"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
