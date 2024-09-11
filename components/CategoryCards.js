import { Unica_One, Quicksand, Bebas_Neue, Raleway } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const play = Raleway({
  subsets: ["latin"],
  display: 'swap', 
  adjustFontFallback: false, weight: '400'
});

export default function CategoryCard({ products }) {
  return (
    <div className="product-category-card-div">

      {products?.map((data) => (
      <Link
            href={`/components/ProductsList/${data.name}`}
            className="product-category-link"
          >
        <div className="product-category-image-outer-div">
          <Image
            className="product-category-image-bg"
            src={data.bg}
            width={450}
            height={300}
            alt="Category Card Cover Image"
          />

          
            <div className="product-category-wrapper">
              <div className="product-category-cards">
                <div className="product-category-image-overlay"></div>
                <Image
                  className="product-category-image"
                  src={data.image}
                  width={200}
                  height={200}
                  alt="Category Card Image"
                />
              </div>
              <h1>{data.name}</h1>
            </div>
        </div>
          </Link>
      ))}
    </div>
  );
}
