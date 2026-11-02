import React from "react";
import ProductDetailsComponent from "@/components/ProductDetails";
import ProductRow from "@/components/ProductRow";

const ProductDetails = async ({ params }) => {
  const { productid } = await params;
  return (
    <section className="py-10 bg-white">
      <div className="container pb-5">
        <ProductDetailsComponent productid={productid} />
      </div>

      <ProductRow title={"Related Products"}/>
      
    </section>
  );
};

export default ProductDetails;
