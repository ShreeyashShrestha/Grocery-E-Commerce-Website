"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSmall = useRef();

  const goToSlide = (index) => {
    setSlideIndex(index);
    zoomSliderSmall.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  return (
    <div className="imageWrapper w-[30%]">
      <div className="isSliderWrapper border border-[rgba(0,0,0,0.2)] rounded-lg overflow-hidden">
        <Swiper className="bigSlider" ref={zoomSliderBig}>
          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={"/productImg1.jpg"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={"/productbackImg1.jpg"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={"/productImg2.jpg"}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="smallSliderWrappper pt-4">
        <Swiper
          className="smallSlider"
          slidesPerView={5}
          spaceBetween={10}
          ref={zoomSliderSmall}
        >
          <SwiperSlide>
            <div
              className={`item border ${slideIndex === 0 ? "border-[rgba(0,0,0,0.4)]" : "border-[rgba(0,0,0,0.1)]"} border-[rgba(0,0,0,0.1)] p-3 cursor-pointer rounded-md`}
              onClick={() => goToSlide(0)}
            >
              <Image
                src={"/productImg1.jpg"}
                alt="product img"
                className="w-full"
                width={80}
                height={80}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item border ${slideIndex === 1 ? "border-[rgba(0,0,0,0.4)]" : "border-[rgba(0,0,0,0.1)]"} border-[rgba(0,0,0,0.1)] p-3 cursor-pointer rounded-md`}
              onClick={() => goToSlide(1)}
            >
              <Image
                src={"/productbackImg1.jpg"}
                alt="product img"
                className="w-full"
                width={80}
                height={80}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item border ${slideIndex === 2 ? "border-[rgba(0,0,0,0.4)]" : "border-[rgba(0,0,0,0.1)]"} border-[rgba(0,0,0,0.1)] p-3 cursor-pointer rounded-md`}
              onClick={() => goToSlide(2)}
            >
              <Image
                src={"/productImg2.jpg"}
                alt="product img"
                className="w-full"
                width={80}
                height={80}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductZoom;
