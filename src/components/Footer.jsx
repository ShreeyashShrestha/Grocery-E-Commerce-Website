import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { BsWallet2 } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaPinterestP } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";
import { LiaGiftSolid, LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] py-8 mt-5">
      <div className="container">
        <div className="flex items-center justify-center gap-2 py-3 lg:py-8 pb-0 lg:pb-8 px-0 lg:px-5">
          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
            <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
            <p className="text-[13px] font-[500] text-gray-600">
              For all Orders Over $100
            </p>
          </div>
          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <PiKeyReturnLight className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
            <h3 className="text-[16px] font-[600] mt-3">30 Days Returns</h3>
            <p className="text-[13px] font-[500] text-gray-600">
              For an Exchange Product
            </p>
          </div>
          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <BsWallet2 className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
            <h3 className="text-[16px] font-[600] mt-3">Secured Payment</h3>
            <p className="text-[13px] font-[500] text-gray-600">
              Payment Cards Accepted
            </p>
          </div>
          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <LiaGiftSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
            <h3 className="text-[16px] font-[600] mt-3">Special Gifts</h3>
            <p className="text-[13px] font-[500] text-gray-600">
              Our First Product Order
            </p>
          </div>
          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
            <h3 className="text-[16px] font-[600] mt-3">Support 24/7</h3>
            <p className="text-[13px] font-[500] text-gray-600">
              Contact us Anytime
            </p>
          </div>
        </div>
        <hr />

        <div className="flex justify-between py-8">
          <div className="col1 w-[20%] flex flex-col gap-4 border-r-[1px] border-[rgba(0,0,0,0.1)]">
            <h3 className="text-[20px] font-[600] text-gray-600">Contact Us</h3>
            <p className="text-[14px] font-normal">
              BroBazar - Mega Super Store
              <br />
              507-Union Trade Centre France
            </p>

            <Link
              href={"mailto:someone@example.com"}
              className="text-gray-700 font-[600] text-[15px] hover:text-primary"
            >
              someone@example.com
            </Link>

            <span className="text-[20px] font-bold text-primary">
              (+977) 9876543210
            </span>

            <div className="flex items-center gap-3">
              <IoChatboxOutline className="text-[40px] text-primary" />
              <span className="text-[16px] font-[600] text-gray-700">
                Online Chat <br /> Get Expert Help
              </span>
            </div>
          </div>

          <div className="col2 w-[35%] flex justify-between gap-5 pl-10">
            <div className="box">
              <h3 className="text-[20px] font-[600] text-gray-600">Products</h3>
              <ul className="list mt-5">
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href="/"
                    className="link text-[15px] font-[600] text-gray-600 hover:text-primary"
                  >
                    Price drop
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href="/"
                    className="link text-[15px] font-[600] text-gray-600 hover:text-primary"
                  >
                    New Products
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href="/"
                    className="link text-[15px] font-[600] text-gray-600 hover:text-primary"
                  >
                    Best sales
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href="/"
                    className="link text-[15px] font-[600] text-gray-600 hover:text-primary"
                  >
                    Contact us
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href="/"
                    className="link text-[15px] font-[600] text-gray-600 hover:text-primary"
                  >
                    Sitemap
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href="/"
                    className="link text-[15px] font-[600] text-gray-600 hover:text-primary"
                  >
                    Stores
                  </Link>
                </li>
              </ul>
            </div>

            <div className="box">
              <h3 className="text-[20px] font-[600] text-gray-600">
                Our Company
              </h3>
              <ul className="list mt-5">
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href="/"
                    className="link text-[15px] font-[600] text-gray-600 hover:text-primary"
                  >
                    Delivery
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href="/"
                    className="link text-[15px] font-[600] text-gray-600 hover:text-primary"
                  >
                    Legal Notice
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href="/"
                    className="link text-[15px] font-[600] text-gray-600 hover:text-primary"
                  >
                    Terms and conditions of use
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href="/"
                    className="link text-[15px] font-[600] text-gray-600 hover:text-primary"
                  >
                    About us
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href="/"
                    className="link text-[15px] font-[600] text-gray-600 hover:text-primary"
                  >
                    Secure payment
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link
                    href="/"
                    className="link text-[15px] font-[600] text-gray-600 hover:text-primary"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col3 w-[45%] pl-20">
            <h3 className="text-[20px] font-[600] text-gray-600">
              Subscribe to newsletter
            </h3>
            <p className="text-[14px] mt-3">
              Subscribe to our newsletter to get news about special discounts.
            </p>

            <form className="flex flex-col gap-5 w-[500px] mt-5">
              <input
                type="text"
                className="w-full h-[40px] bg-white border border-[rgba(0,0,0,0.1)] outline-none rounded-lg px-4"
                placeholder="Your email address"
              />
              <div className="btn">
                <Button className="btn-g">Subscribe</Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <hr />

      <div className="bottomStrip py-3">
        <div className="container flex items-center justify-between">
          <div className="socials flex items-center gap-2">
            <Link
              href={"/"}
              className="flex items-center justify-center bg-white rounded-full border border-[rgba(0,0,0,0.1)] w-[40px] h-[40px] hover:bg-primary hover:text-white group transition"
            >
              <FaFacebook
                size={20}
                className="text-gray-600 group-hover:text-white"
              />
            </Link>
            <Link
              href={"/"}
              className="flex items-center justify-center bg-white rounded-full border border-[rgba(0,0,0,0.1)] w-[40px] h-[40px] hover:bg-primary hover:text-white group transition"
            >
              <AiOutlineYoutube
                size={20}
                className="text-gray-600 group-hover:text-white"
              />
            </Link>
            <Link
              href={"/"}
              className="flex items-center justify-center bg-white rounded-full border border-[rgba(0,0,0,0.1)] w-[40px] h-[40px] hover:bg-primary hover:text-white group transition"
            >
              <FaPinterestP
                size={20}
                className="text-gray-600 group-hover:text-white"
              />
            </Link>
            <Link
              href={"/"}
              className="flex items-center justify-center bg-white rounded-full border border-[rgba(0,0,0,0.1)] w-[40px] h-[40px] hover:bg-primary hover:text-white group transition"
            >
              <FaInstagram
                size={20}
                className="text-gray-600 group-hover:text-white"
              />
            </Link>
          </div>

          <p className="text-center">&copy; Grocery Store</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
