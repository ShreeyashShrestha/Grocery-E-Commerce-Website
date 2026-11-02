"use client";
import React, { useState } from "react";
import ProductZoom from "./ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "./QuantityBox";
import { Button } from "@mui/material";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";

const ProductDetailsComponent = ({ productid }) => {
  const [isActiveTab, setIsActiveTab] = useState(0);
  const [value, setValue] = useState(2);
  return (
    <>
      <div className="flex gap-10 items-center">
        <ProductZoom />

        <div className="content">
          <h1 className="text-[30px] font-bold text-gray-800">
            Lay&apos;s American Style Cream & Onion Potato Chips 82 g
          </h1>

          <div className="flex items-center gap-4 my-4">
            <p className="text-[18px] text-gray-500 font-[400] flex items-center gap-3">
              Brand: <span className="font-[500]">Lay&apos;s</span>
            </p>
            <Rating name="read-only" value={4} readOnly />

            <span className="text-[18px] font-[400] text-gray-800 cursor-pointer text-primary hover:text-secondary">
              Review (0)
            </span>
          </div>

          <div className="flex items-center gap-5 my-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[#CB0000] text-[25px] font-bold">
                $25.99
              </span>
              <span className="text-[#A4A4A4] text-[25px] font-bold line-through">
                $38.10
              </span>
            </div>

            <p className="text-[18px] text-gray-600 flex items-center gap-3">
              Available in stock:
              <span className="text-primary font-bold">74,853 Items</span>
            </p>
          </div>

          <p className="text-[16px] font-light text-gray-600 leading-8 pr-40">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            vitae nam est rerum mollitia placeat? Id officia dolorum, veritatis
            commodi non amet! Nihil expedita cupiditate aliquam consectetur ipsa
            ullam! Pariatur?
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            reprehenderit dolor nihil nisi vel ullam voluptatem molestiae magni
            sint. Eveniet debitis nostrum delectus vitae eum architecto sint
            obcaecati quos deserunt.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <QuantityBox />

            <Button className="btn-g !px-8 !h-[45px] gap-1">
              <IoCartOutline size={25} />
              Add to cart
            </Button>

            <Tooltip title="Add to Wishlist" placement="top">
              <Button className="!w-[45px] !min-w-[45px] !h-[45px] !rounded-full !border !border-[rgba(0,0,0,0.2)] !text-gray-700 hover:!bg-gray-200">
                <FaRegHeart size={20} className="text-gray-600" />
              </Button>
            </Tooltip>
          </div>
        </div>

        <div>
          <p>Product ID: {productid}</p>
        </div>
      </div>

      <div className="flex items-center gap-8 mt-8 mb-5">
        <span
          className={`text-[18px] text-gray-800 font-[500] cursor-pointer flex pb-1 border-b-2 ${isActiveTab === 0 ? "border-primary text-primary" : "text-gray-800 border-transparent"}`}
          onClick={() => setIsActiveTab(0)}
        >
          Description
        </span>
        <span
          className={`text-[18px] text-gray-800 font-[500] cursor-pointer flex pb-1 border-b-2 ${isActiveTab === 1 ? "border-primary text-primary" : "text-gray-800 border-transparent"}`}
          onClick={() => setIsActiveTab(1)}
        >
          Reviews
        </span>
      </div>

      {isActiveTab === 0 && (
        <p className="text-[16px] font-light text-gray-600 leading-8 pr-40 w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          vitae nam est rerum mollitia placeat? Id officia dolorum, veritatis
          commodi non amet! Nihil expedita cupiditate aliquam consectetur ipsa
          ullam! Pariatur?
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          reprehenderit dolor nihil nisi vel ullam voluptatem molestiae magni
          sint. Eveniet debitis nostrum delectus vitae eum architecto sint
          obcaecati quos deserunt.
        </p>
      )}

      {isActiveTab === 1 && (
        <div className="reviewSection w-[70%]">
          <h2 className="text-[18px] font-[500] text-gray-700 mb-8">
            Customer questions & answers
          </h2>

          <div className="scroll max-h-[300px] overflow-y-scroll flex flex-col gap-5">
            <div className="flex gap-4">
              <div className="imgWrapper">
                <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full overflow-hidden">
                  <img
                    src={"/profile1.jpg"}
                    alt="profile image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="info flex flex-col gap-1 w-[]70%">
                <h3 className="text-[15px] text-gray-700 font-[500]">
                  Shreeyash Shrestha
                </h3>
                <span className="text-[14px] text-gray-700 font-[400]">
                  2025-08-18
                </span>
                <p className="text-[15px] font-light text-gray-600 leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum vitae nam est rerum mollitia placeat? Id officia
                  dolorum, veritatis commodi non amet! Nihil expedita cupiditate
                  aliquam consectetur ipsa ullam! Pariatur?
                </p>
              </div>

              <div className="w-[30%] flex justify-end">
                <Rating name="read-only" value={4} readOnly size="small" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="imgWrapper">
                <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full overflow-hidden">
                  <img
                    src={"/profile2.jpg"}
                    alt="profile image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="info flex flex-col gap-1 w-[]70%">
                <h3 className="text-[15px] text-gray-700 font-[500]">
                  Shreeyash Shrestha
                </h3>
                <span className="text-[14px] text-gray-700 font-[400]">
                  2025-08-18
                </span>
                <p className="text-[15px] font-light text-gray-600 leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum vitae nam est rerum mollitia placeat? Id officia
                  dolorum, veritatis commodi non amet! Nihil expedita cupiditate
                  aliquam consectetur ipsa ullam! Pariatur?
                </p>
              </div>

              <div className="w-[30%] flex justify-end">
                <Rating name="read-only" value={4} readOnly size="small" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="imgWrapper">
                <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full overflow-hidden">
                  <img
                    src={"/profile3.jpg"}
                    alt="profile image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="info flex flex-col gap-1 w-[]70%">
                <h3 className="text-[15px] text-gray-700 font-[500]">
                  Shreeyash Shrestha
                </h3>
                <span className="text-[14px] text-gray-700 font-[400]">
                  2025-08-18
                </span>
                <p className="text-[15px] font-light text-gray-600 leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum vitae nam est rerum mollitia placeat? Id officia
                  dolorum, veritatis commodi non amet! Nihil expedita cupiditate
                  aliquam consectetur ipsa ullam! Pariatur?
                </p>
              </div>

              <div className="w-[30%] flex justify-end">
                <Rating name="read-only" value={4} readOnly size="small" />
              </div>
            </div>
          </div>

          <div className="reviewsForm w-[70%] mt-8">
            <h2 className="text-[18px] font-[500] text-gray-700 mb-3">
              Add a review
            </h2>
            <form className="flex flex-col gap-5">
              <TextField
                id="reviewInput"
                label="Write a review"
                variant="outlined"
                multiline
                rows={5}
                className="w-full"
              />

              <Rating
                name="simple-controlled"
                defaultValue={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />

              <div className="btnWrapper">
                <Button className="btn-g !px-5 !py-2">Submit Review</Button>
              </div>
            </form>
          </div>
        </div>
      )}
      
    </>
  );
};

export default ProductDetailsComponent;
