import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import heroSlide from "../../assets/hero-slide.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MainSlider() {
  return (
    <section>
       <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="hero-swiper h-220"
      >
        <SwiperSlide>
      <div className="h-160 lg:h-220 bg-cover bg-center text-white" 
      style={{ backgroundImage: "url('/src/assets/hero-slide.jpg')"}}>
        <div className="grid text-center lg:text-start pt-40 lg:pt-60 mx-18 lg:mx-30 gap-10">
        <h5 className="font-bold">SUMMER 2020</h5>
        <h2 className="font-bold text-3xl lg:text-6xl">NEW COLLECTION</h2>
        <h4 className="text-[#FAFAFA] lg:text-xl">
          We know how large objects will act, <br></br>but things on a small scale.
        </h4>
        <div className="font-bold">
        <button className="border bg-[#2DC071] border-[#2DC071] px-5 py-2">SHOP NOW</button>
        </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-160 lg:h-220 bg-cover bg-center text-white" 
      style={{ backgroundImage: `url(${heroSlide})`}}>
        <div className="grid text-center lg:text-start pt-40 lg:pt-60 mx-18 lg:mx-30 gap-10">
        <h5 className="font-bold">SUMMER 2020</h5>
        <h2 className="font-bold text-3xl lg:text-6xl">NEW COLLECTION</h2>
        <h4 className="text-[#FAFAFA] lg:text-xl">
          We know how large objects will act, <br></br>but things on a small scale.
        </h4>
        <div className="font-bold">
        <button className="border bg-[#2DC071] border-[#2DC071] px-5 py-2">SHOP NOW</button>
        </div>
        </div>
      </div>
      </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default MainSlider;
