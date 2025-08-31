import React from "react";
import ProductCardContent from "../Check/ProductCardContent";



export default function ProductCard({ products , view}) {
// console.log(products)

  return (
    <div >
      <div className={view ? "product-card-div-row" : "product-card-div-col"}>
        {products?.map((data,key) => (
          <ProductCardContent data={data} view={view}/>
        ))}
      </div>
      
    </div>
  );
}
