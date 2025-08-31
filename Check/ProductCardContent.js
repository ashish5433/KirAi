import { Raleway, Bebas_Neue } from "next/font/google";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const play = Bebas_Neue({
  subsets: ["latin"], 
  display: 'swap', 
  adjustFontFallback: false, weight: '400'
});

const specifications = ["200HP |", " 2019 |", " 44km/l", " Electric"];

// const ProductCardContent = ({ data, view }) => {
//   // const [showBuy, setShowBuy] = useState(false);
//   const [fillHeart, setFillHeart] = useState("#FFFFFF");
//   const router = useRouter();

//   return (
//     <div>
//       <div  className={view ? "product-wrapper-col " : "product-wrapper-row "}>
//         <div className="product-cards">
//           <Image style={{ width: "300px", height: "200px" }}
//               // setShowBuy(true);

//             className="product--image hover:rounded-xl"
//             src={data.image}
//             width={300}
//             height={200}
//           />
//         </div>
//         <div style={{ width: "300px", height: "100px" }} >
//           <div className="flex flex-row">
//             {view ? <div className="flex">
//               <div className="mx-4 -mt-14 rounded-sm brand-name bg-slate-300 px-2 py-2">
//                 Brand
//               </div>
//                 <button onClick={()=>{router.push("/components/ProductPage")}} className="-mt-12 mx-2 w-20 px-2  rounded-md  product-buynow text-neutral-50  pointer">
//                   <p style={{"fontSize":"14px"}}>Buy Now</p>
//                 </button>

//             </div> : ""
//             }

//             <div className="flex justify-end ml-18 -mt-10 mb-8  pointer">
//               <svg className="mx-10"
//                 onClick={() => {
//                   fillHeart === "#FFFFFF" ? setFillHeart("#FF1694") : setFillHeart("#FFFFFF")
//                 }}
//                 onMouseEnter={() => {
//                   setShowBuy(true);
//                 }}

//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 fill={fillHeart}
//                 class="bi bi-heart-fill"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className={view===true ? "product-details-div-row" : "product-details-div-col"}>
//             <div className="text-red-300 ">
//               <h6 className="px-2  text-xs font-bold">
//                 {
//                   specifications.map((item) => {
//                     return item
//                   })
//                 }
//               </h6>
//             </div>
//             <div className="product-details-inner ">

//               <div className="flex flex-col ">

//                 <div className="">
//                   <h6 className="px-2 text-xs">Product Brand</h6>
//                 </div>
//                 <div className=" px-2 -mt-3">
//                   <span className="text-xl font-semibold space-x-0">Product Name</span>
//                 </div>
//                 <div className=" px-2 text-indigo-900 -mt-2">
//                   <span className="text-xs font-bold">Jonanthan Bikes</span>
//                 </div>
//               </div>
//               {/* <div className="product-company-icon bg-purple-700">

//               </div> */}
//               <div className="text-neutral-900 flex flex-col">
//                 <span style={{ fontSize: "10px", fontWeight: "800" }}>EUR USD INR</span>
//                 <span style={{color:"indigo"}} className="font-bold">$500,000,000</span>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

const ProductCardContent = ({ data, view }) => {
  // if (data.commonName === "bikeBhardwaj")
  //   (data.commonName === "carBhardwaj")(data.commonName === "iotBhardwaj")(
  //     data.commonName === "plotBhardwaj"
  //   );
  return (
    <div>
      <div className="p-main">
        <div className="p-imagediv">
          <Image
            src={data.image}
            className="p-image"
            width={350}
            height={300}
            alt="Product"
          />
        </div>
        <div className="p-detailsdiv">
          {data.commonName === "bikeBhardwaj" ? (
            <Link
              href={`/Products/bike_ProductPage2`}
              className="p-detailsdivlink"
            >
              <button className={play.className}>Rent Now</button>
            </Link>
          ) : data.commonName === "carBhardwaj" ? (
            <Link
              href={`/Products/ProductPage2`}
              className="p-detailsdivlink"
            >
              <button className={play.className}>Rent Now</button>
            </Link>
          ) : data.commonName === "iotBhardwaj" ? (
            <Link
              href={`/Products/appliances_ProductPage2`}
              className="p-detailsdivlink"
            >
              <button className={play.className}>Rent Now</button>
            </Link>
          ) : (
            <Link
              href={`/Products/estate_ProductPage2`}
              className="p-detailsdivlink"
            >
              <button className={play.className}>Rent Now</button>
            </Link>
          )}
          <div>
            <p className={play.className}>Color:</p>
            <p className={play.className}>Black</p>
          </div>
          <div>
            <p className={play.className}>Year:</p>
            <p className={play.className}>2019</p>
          </div>
          <div>
            <p className={play.className}>Mileage:</p>
            <p className={play.className}>44kmpl</p>
          </div>
          <div>
            <p className={play.className}>Engine:</p>
            <p className={play.className}>200HP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardContent;
