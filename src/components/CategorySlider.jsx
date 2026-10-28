"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const CategorySlider = () => {
  return (
    <div className="my-4">
      <div className="container">
        <Swiper
          slidesPerView={10}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link href={"/"} className="group">
              <div className="bg-white p-3 w-full rounded-md shadow-md flex items-center justify-center transition group-hover:bg-gray-100">
                <Image
                  src={"/category1.png"}
                  alt="category"
                  width={128}
                  height={128}
                  className="transition group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700 group-hover:text-primary">
                Fruits & Vegetables
              </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="group">
              <div className="bg-white p-3 w-full rounded-md shadow-md flex items-center justify-center transition group-hover:bg-gray-100">
                <Image
                  src={"/category2.png"}
                  alt="category"
                  width={128}
                  height={128}
                  className="transition group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700 group-hover:text-primary">
                Meats & Seafood
              </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="group">
              <div className="bg-white p-3 w-full rounded-md shadow-md flex items-center justify-center transition group-hover:bg-gray-100">
                <Image
                  src={"/category3.png"}
                  alt="category"
                  width={128}
                  height={128}
                  className="transition group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700 group-hover:text-primary">
                Breaksfast & Dairy
              </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="group">
              <div className="bg-white p-3 w-full rounded-md shadow-md flex items-center justify-center transition group-hover:bg-gray-100">
                <Image
                  src={"/category4.png"}
                  alt="category"
                  width={128}
                  height={128}
                  className="transition group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700 group-hover:text-primary">
                Breads & Bakery
              </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="group">
              <div className="bg-white p-3 w-full rounded-md shadow-md flex items-center justify-center transition group-hover:bg-gray-100">
                <Image
                  src={"/category5.png"}
                  alt="category"
                  width={128}
                  height={128}
                  className="transition group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700 group-hover:text-primary">
                Beverages
              </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="group">
              <div className="bg-white p-3 w-full rounded-md shadow-md flex items-center justify-center transition group-hover:bg-gray-100">
                <Image
                  src={"/category6.png"}
                  alt="category"
                  width={128}
                  height={128}
                  className="transition group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700 group-hover:text-primary">
                Frozen Foods
              </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="group">
              <div className="bg-white p-3 w-full rounded-md shadow-md flex items-center justify-center transition group-hover:bg-gray-100">
                <Image
                  src={"/category7.png"}
                  alt="category"
                  width={128}
                  height={128}
                  className="transition group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700 group-hover:text-primary">
                Biscuits & Snacks
              </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="group">
              <div className="bg-white p-3 w-full rounded-md shadow-md flex items-center justify-center transition group-hover:bg-gray-100">
                <Image
                  src={"/category8.png"}
                  alt="category"
                  width={128}
                  height={128}
                  className="transition group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700 group-hover:text-primary">
                Grocery & Staples
              </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="group">
              <div className="bg-white p-3 w-full rounded-md shadow-md flex items-center justify-center transition group-hover:bg-gray-100">
                <Image
                  src={"/category9.png"}
                  alt="category"
                  width={128}
                  height={128}
                  className="transition group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700 group-hover:text-primary">
                Baby & Pregnancy
              </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="group">
              <div className="bg-white p-3 w-full rounded-md shadow-md flex items-center justify-center transition group-hover:bg-gray-100">
                <Image
                  src={"/category10.png"}
                  alt="category"
                  width={128}
                  height={128}
                  className="transition group-hover:scale-105"
                />
              </div>
              <h4 className="text-[15px] font-[600] text-center mt-3 text-gray-700 group-hover:text-primary">
                Healthcare
              </h4>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
