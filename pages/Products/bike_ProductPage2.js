import Link from "next/link";
import classes from "../../components/ProductPage2.module.css";
import Navbar1 from "../../components/navbar";
import Image from "next/image";
import Navbar2 from "../../components/navbar2";
import { db, storage } from "@/firebase/firebase";
import { collection, getDocs, addDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";

export default function bike_ProductPage2({ data }) {
  const { user } = useAuth();
  const [bigImageSrc, setBigImageSrc] = useState("/bikecarousel4.jpg");

  // Currency state
  const [selectedCurrency, setSelectedCurrency] = useState("inr");
  const conversionRates = {
    inr: 1,
    usd: 0.012,
    eur: 0.011,
  };
  const priceInINR = 4500;
  const convertedPrice = (priceInINR * conversionRates[selectedCurrency]).toFixed(2);

  const addToCart = async () => {
    if (!user) {
      alert("You need to be logged in to add items to your cart");
      return;
    }

    const productId = "Suzuki_Hayabusa";
    const productRef = doc(db, 'users', user.uid, 'cart', productId);
    const productSnap = await getDoc(productRef);

    if (productSnap.exists()) {
      await setDoc(productRef, {
        quantity: productSnap.data().quantity + 1
      }, { merge: true });
    } else {
      await setDoc(productRef, {
        productName: "Suzuki Hayabusa",
        productOwner: "ashish bhardwaj",
        productPrice: 4500,
        quantity: 1,
      });
    }
  };

  const router = useRouter();
  const pusher = () => {
    router.push("/components/History");
  };

  const handleImageClick = (src) => {
    setBigImageSrc(src);
  };

  return (
    <div>
      <div className={classes.first}>
        <h1>Suzuki Hayabusa</h1>
        <h3>~ ashish bhardwaj</h3>
        <div>
          <div className={classes.big_image_div}>
            <Image
              className={classes.big_image}
              src={bigImageSrc}
              width={1920}
              height={1080}
              alt="Main Product"
            />
            <div className={classes.overlay_big}></div>
            <div className={classes.small_image_div}>
              <Image className={classes.small_image} src="/bikecarousel3.jpg" width={1920} height={1080} alt="Small Product" onClick={() => handleImageClick("/bikecarousel3.jpg")} />
              <Image className={classes.small_image} src="/bikecarousel5.jpg" width={1920} height={1080} alt="Small Product" onClick={() => handleImageClick("/bikecarousel5.jpg")} />
              <Image className={classes.small_image} src="/bikecarousel7.jpg" width={1920} height={1080} alt="Small Product" onClick={() => handleImageClick("/bikecarousel7.jpg")} />
              <Image className={classes.small_image} src="/bikecarousel6.jpg" width={1920} height={1080} alt="Small Product" onClick={() => handleImageClick("/bikecarousel6.jpg")} />
              <div className={classes.more_div}><h3>more photos</h3></div>
            </div>
          </div>

          <div className={classes.price_and_others}>
            <h1>
              <span>
                {selectedCurrency === "inr" ? "₹" : selectedCurrency === "usd" ? "$" : "€"}{" "}
              </span>
              {convertedPrice} /day
            </h1>

            <div className={classes.currencies}>
              {["inr", "usd", "eur"].map((curr) => (
                <p
                  key={curr}
                  onClick={() => setSelectedCurrency(curr)}
                  style={{
                    cursor: "pointer",
                    fontWeight: selectedCurrency === curr ? "bold" : "normal",
                    textDecoration: selectedCurrency === curr ? "underline" : "none",
                  }}
                >
                  {curr}
                </p>
              ))}
            </div>

            <button onClick={addToCart}>rent now</button>
            <button onClick={pusher}>View History</button>
            <h3>add to wishlist</h3>

            {/* Icons Section with Links */}
            <div className={classes.icons2_div}>
              <div onClick={() => window.open("https://www.google.com/maps?q=Chennai", "_blank")} style={{ cursor: "pointer" }}>
                <Image className={classes.icons2} src="/location-svgrepo-com.svg" width={50} height={50} alt="map" />
                <p>visit</p>
              </div>
              <div>
                <a href="tel:+918690585728" style={{ textDecoration: "none", color: "inherit" }}>
                  <Image className={classes.icons2} src="/call-phone-heart-svgrepo-com.svg" width={50} height={50} alt="call" />
                  <p>call</p>
                </a>
              </div>
              <div>
                <a href="https://wa.me/918690585728" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                  <Image className={classes.icons2} src="/chat-svgrepo-com.svg" width={50} height={50} alt="chat" />
                  <p>chat</p>
                </a>
              </div>
              <div onClick={() => alert("Live view is currently unavailable")} style={{ cursor: "pointer" }}>
                <Image className={classes.icons2} src="/live-svgrepo-com.svg" width={50} height={50} alt="live view" />
                <p>live view</p>
              </div>
              <div onClick={() => alert("Meeting link will be shared soon")} style={{ cursor: "pointer" }}>
                <Image className={classes.icons2} src="/meeting-of-a-couple-of-men-svgrepo-com.svg" width={50} height={50} alt="meet" />
                <p>meet</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className={classes.seller}>About Seller</h1>
      <div className={classes.agent_card}>
        <div>
          <Image className={classes.agent_card_img} src="/bikecarousel3.jpg" width={1920} height={1080} alt="Agent Cover" />
          <div className={classes.agent_card_overlay}></div>
          <div className={classes.agent_profile}>
            <Image className={classes.agent_card_profile} src="/bikecarousel3.jpg" width={500} height={500} alt="Agent Profile" />
          </div>
          <div className={classes.agent_detail}>
            <div className={classes.agent_name_and_functions}>
              <h1>ashish bhardwaj</h1>
              <div className={classes.agent_functions}>
                <div>
                  <a href="tel:+918690585728" style={{ textDecoration: "none", color: "inherit" }}>
                    <Image className={classes.icons2} src="/call-phone-heart-svgrepo-com.svg" width={50} height={50} alt="call" />
                    <p>call</p>
                  </a>
                </div>
                <div>
                  <a href="https://wa.me/918690585728" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                    <Image className={classes.icons2} src="/chat-svgrepo-com.svg" width={50} height={50} alt="chat" />
                    <p>chat</p>
                  </a>
                </div>
              </div>
            </div>
            <p>Direct owner / broker at sunseeker</p>
            <div>
              <div><span>• </span><span>Location : </span><span>Chennai</span></div>
              <div><span>• </span><span>Listings : </span><span>21</span></div>
              <div><span>• </span><span>Sold : </span><span>5</span></div>
              <div><span>• </span><span>Role : </span><span>Owner</span></div>
              <div><span>• </span><span>Reviews : </span><span>19</span></div>
            </div>
            <div className={classes.company_details}>
              <Image className={classes.company_logo} src="/company.png" width={200} height={200} alt="Company Logo" />
              <div>
                <h2>Company Name</h2>
                <p>direct owner / broker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
