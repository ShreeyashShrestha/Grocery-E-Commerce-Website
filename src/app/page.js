import Banners from "@/components/Banners";
import CategorySlider from "@/components/CategorySlider";
import HomeSlider from "@/components/HomeSlider";
import PopularProducts from "@/components/PopularProducts";
import ProductRow from "@/components/ProductRow";
import ProductSlider from "@/components/ProductSlider";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function Home() {
  return (
    <div className="sliderWrapper bg-[#F1F1F1] py-5 pb-0">
      <HomeSlider />
      <CategorySlider />
      <PopularProducts />
      <Banners />

      <ProductRow title={"Latest Products"} />
      <ProductRow title={"Featured Products"} />
      <ProductRow title={"Breakfast & Dairy"} />
    </div>
  );
}
