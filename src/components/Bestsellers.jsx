import React from "react";
import data from "../data.json";

function Bestseller() {
  const products = data.products;

  const productsRender = products.map((product, index) => {
    return (
      <div
        key={index}
        className={`mx-[32px] mt-2 flex h-[120px] items-center rounded-3xl ${
          index === 0 ? "mt-0 bg-[#FEF2EE]" : "bg-white"
        }`}
      >
        <img
          src={product.img}
          alt={product.name}
          className="h-[100px] w-[100px] object-contain pl-[18px]"
        />
        <div className={`ml-6 ${index === 0 ? "grid gap-3" : ""}`}>
          <h1 className="text-sm font-semibold tracking-[.25px] text-[#FE805C]">
            {product.name}
          </h1>
          <h3
            className={`text-xs font-normal tracking-[.25px] text-[#AFAFBD] ${
              index === 0 ? "pb-0" : "pb-4"
            }`}
          >
            {product.brand}
          </h3>
          <p className="text-sm font-semibold tracking-[.25px] text-[#12121F]">
            ${product.price}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div
      id="bestsellers"
      className="my-10 mx-auto w-[375px] rounded-3xl bg-white"
    >
      <h1 className="pt-8 pl-8 text-left text-2xl font-semibold">
        Bestsellers
      </h1>
      <div className="mx-auto py-6">{productsRender}</div>
    </div>
  );
}

export default Bestseller;
