import React from "react";
import CartItems from "./CartItems";
import { Button } from "@mui/material";

const Cart = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container">
        <div className="flex w-[80%] m-auto gap-10">
          <div className="col1 bg-white rounded-md shadow-md w-[70%]">
            <div className="p-5 border-b-[1px] border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[20px] text-gray-700 font-[500]">
                Your Cart
              </h2>
              <p className="text-[15px] text-gray-700 font-[400]">
                There are <span className="text-primary font-bold">7</span>{" "}
                products in your cart
              </p>
            </div>

            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
          </div>

          <div className="col2 w-[30%]">
            <div className="bg-white rounded-md shadow-md w-full">
              <div className="p-5 border-b-[1px] border-[rgba(0,0,0,0.1)]">
                <h2 className="text-[20px] text-gray-700 font-[500]">
                  Cart Totals
                </h2>
              </div>

              <div className="info p-5">
                <div className="flex items-center justify-between text-[17px] font-[500] text-gray-700 py-2">
                  <span>Subtotal</span>
                  <span className="text-[#CB0000] font-[600]">$2,133</span>
                </div>

                <div className="flex items-center justify-between text-[17px] font-[500] text-gray-700 py-2">
                  <span>Shipping</span>
                  <span className="font-[600]">Free</span>
                </div>

                <div className="flex items-center justify-between text-[17px] font-[500] text-gray-700 py-2">
                  <span>Estimate For</span>
                  <span className="font-[600]">Nepal</span>
                </div>

                <div className="flex items-center justify-between text-[17px] font-[500] text-gray-700 py-2">
                  <span>Total</span>
                  <span className="text-[#CB0000] font-[600]">$2,133</span>
                </div>
              </div>

              <div className="px-5 flex w-full pb-5">
                <Button className="btn-g w-full">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
