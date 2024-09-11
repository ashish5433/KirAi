import GalleryCard from "./GalleryCard.js";
import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";

const play = Bebas_Neue({
  subsets: ["latin"],
  display: 'swap', 
  adjustFontFallback: false, weight: '400'
});

export default function midSection() {
  return (
    <div className="menu-titles">
      <h1 className={play.className}>Product Gallery</h1>
      <hr className="hr_rule" />
      <div>
        <GalleryCard />
      </div>
    </div>
  );
}
