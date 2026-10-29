import Link from "next/link";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import ProductSlider from "./ProductSlider";

const ProductRow = ({title}) => {
  return (
    <section className="bg-white py-5">
      <div className="container">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[20px] text-gray-800 font-[600]">
            {title}
          </h2>
          <Link
            href={"/"}
            className="flex items-center gap-1 text-[16px] text-gray-700 font-[600] hover:text-primary"
          >
            View All <MdOutlineArrowRightAlt size={25} />
          </Link>
        </div>
        <ProductSlider />
      </div>
    </section>
  );
};

export default ProductRow;
