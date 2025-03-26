// components/Hero.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import sli_hero from '@/asset/sli_hero.jpg'
import sli_img1 from '@/asset/sli_img1.jpg'
import Cards from "@/utility_items/Cards"
export default function Hero() {
  return (
    <section className="flex gap-4 text-black h-screen   items-center justify-center">
<Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}

      breakpoints={{
        // When the window width is >= 640px (tablet)
        640: {
          slidesPerView: 1, // Still 1 slide, but could increase
          spaceBetween: 20, // Add some space between slides
        },
        // When the window width is >= 768px (small desktop)
        768: {
          slidesPerView: 1, // 1 slide on smaller desktop
          spaceBetween: 30,
        },
        // When the window width is >= 1024px (large desktop)
        1024: {
          slidesPerView: 1, // Show 2 slides on larger screens
          spaceBetween: 0,
        },
      }}
    >

         {/* Slide 1 */}
      <SwiperSlide>
        <div className="h-screen bg-cover bg-center mt-[0px]" style={{ backgroundImage: `url(${sli_hero.src})`}}>
          <div className="flex h-full  items-center justify-center">
            <Cards className="justify-center w-[1000px] h-[400px] 
             pt-[100px] text-[3rem] textShadow-lg
               shadow-amber-500 text-white font-bold bg-amber-600/50">
          <p >Welcome to Classic Systems Infotech</p>
            </Cards>
          </div>
        </div>
      </SwiperSlide>

       {/* Slide 2 */}
       <SwiperSlide>
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${sli_img1.src})`}}>
          <div className="flex h-full items-center justify-center">
          <Cards className="justify-center w-[1000px] h-[400px] 
             pt-[100px] text-[3rem] textShadow-lg
               shadow-amber-500 text-white font-bold bg-amber-600/50">
          <h1>Discover Our Services</h1>
            </Cards>
          </div>
        </div>
      </SwiperSlide>


    </Swiper>

      
    </section>
  );
}
