import { Swiper, SwiperSlide } from "swiper/react";
import HelloWorldImg from "../../assets/600x400.svg";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperSection() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[70vh]"
      >
        {[
          ...Array(6)
            .fill(0)
            .map((_, inx) => (
              <SwiperSlide key={inx} className="w-full px-2">
                <a href="">
                  <img
                    onError={(e) => (e.currentTarget.src = HelloWorldImg)}
                    src={"https://placehold.co/600x400?text=Hello+World"}
                    className="w-full h-[70vh] rounded-xl object-cover"
                    alt=""
                  />
                </a>
              </SwiperSlide>
            )),
        ]}
      </Swiper>
    </>
  );
}
