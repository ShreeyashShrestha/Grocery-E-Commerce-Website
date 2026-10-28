import CategorySlider from "@/components/CategorySlider";
import HomeSlider from "@/components/HomeSlider";

export default function Home() {
  return (
    <div className="sliderWrapper bg-[#FAFAFA] py-4">
      <HomeSlider />
      <CategorySlider />
    </div>
  );
}
