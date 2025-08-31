import Link from "next/link";
import classes from "./ProductPage2.module.css";
import Navbar1 from "./navbar";
import Image from "next/image";
import Navbar2 from "./navbar2";
import { db,storage } from "@/firebase/firebase";
import {collection,getDocs,addDoc} from 'firebase/firestore'
// import { getDocs } from "firebase/firestore";
import { useState } from "react";
import { useRouter } from "next/router";
export default function estate_ProductPage2({data}) {
  const [productName,setProductName]=useState("")
  const orders=collection(db,"Order_Details");
  const date =new Date()
  const showTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const datenow = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  const createData=async()=>{
    await addDoc(orders,{ProductName:"Eiffel 2BHK Apartments", Seller:"Ashish",price:43000,Time:showTime,Date:datenow})
    // alert("Rented Successfully")
  }
  // console.log(data);
  const router=useRouter();
  const pusher=()=>{
    router.push("/components/History");
  }
  return (
    <div>
      {/* <div className="nav2productlist">

      <Navbar2 />
      </div> */}
      <div className={classes.first}>
        <h1>Eiffel 2BHK Apartments</h1>
        <h3>~ Ashish</h3>
        <div>
          <div className={classes.big_image_div}>
            {/* <div className={classes.share_and_like}>
              <Image
                className={classes.icons}
                src="/share_4.png"
                width={30}
                height={30}
              />
              <Image
                className={classes.icons}
                src="/heart3.png"
                width={35}
                height={35}
              />
            </div> */}
            <Image
              className={classes.big_image}
              src="/estatecarousel5.jpg"
              width={1920}
              height={1080}
              alt="Main Product"

            />
            <div className={classes.overlay_big}></div>
            <div className={classes.small_image_div}>
              <Image
                className={classes.small_image}
                src="/estatecarousel4.jpg"
                width={1920}
                height={1080}
                alt="Small Product Image"

              />
              <Image
                className={classes.small_image}
                src="/estatecarousel3.jpg"
                width={1920}
                height={1080}
                alt="Small Product Image"

              />
              <Image
                className={classes.small_image}
                src="/estatecarousel7.jpg"
                width={1920}
                height={1080}
                alt="Small Product Image"

              />
              <Image
                className={classes.small_image}
                src="/estatecarousel6.jpg"
                width={1920}
                height={1080}
                alt="Small Product Image"

              />
              <div className={classes.more_div}>
                <h3>more photos</h3>
              </div>
            </div>
          </div>
          <div className={classes.price_and_others}>
            <h1>
              <span>&#8377; </span> 430,000.00 /month
            </h1>
            <div className={classes.currencies}>
              <p>inr</p>
              <p>usd</p>
              <p>eur</p>
            </div>
            <button onClick={createData}>rent now</button>
            <button onClick={pusher}>View History</button>
            <h3>add to wishlist</h3>
            <div className={classes.icons2_div}>
              <div>
                <Image
                  className={classes.icons2}
                  src="/location-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="small icons"

                />
                <p>visit</p>
              </div>
              <div>
                <Image
                  className={classes.icons2}
                  src="/call-phone-heart-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="small icons"

                />
                <p>call</p>
              </div>
              <div>
                <Image
                  className={classes.icons2}
                  src="/chat-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="small icons"

                />
                <p>chat</p>
              </div>
              <div>
                <Image
                  className={classes.icons2}
                  src="/live-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="small icons"

                />
                <p>live view</p>
              </div>
              <div>
                <Image
                  className={classes.icons2}
                  src="/meeting-of-a-couple-of-men-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="small icons"

                />
                <p>meet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.agent_card}>
        <div>
          <Image
            className={classes.agent_card_img}
            src="/estatecarousel3.jpg"
            width={1920}
            height={1080}
            alt="Agent Cover"

          />
          <div className={classes.agent_card_overlay}></div>
          <div className={classes.agent_profile}>
            <Image
              className={classes.agent_card_profile}
              src="/estatecarousel3.jpg"
              width={500}
              height={500}
              alt="Agent Image"

            />
            
          </div>
          <div className={classes.agent_detail}>
            <div className={classes.agent_name_and_functions}>
              <h1>Ashish</h1>
              <div className={classes.agent_functions}>
                <div>
                  <Image
                    className={classes.icons2}
                    src="/call-phone-heart-svgrepo-com.svg"
                    width={50}
                    height={50}
                    alt="Contact Image"

                  />
                  <p>call</p>
                </div>
                <div>
                  <Image
                    className={classes.icons2}
                    src="/chat-svgrepo-com.svg"
                    width={50}
                    height={50}
                    alt="Contact Image"

                  />
                  <p>chat</p>
                </div>
                <div>
                  <Image
                    className={classes.icons2}
                    src="/meeting-of-a-couple-of-men-svgrepo-com.svg"
                    width={50}
                    height={50}
                    alt="Contact Image"

                  />
                  <p>meet</p>
                </div>
              </div>
            </div>
            <p>Direct owner / broker at sunseeker</p>
            <div>
              <div>
                <span>• </span>
                <span>Location : </span>
                <span>Chennai</span>
              </div>
              <div>
                <span>• </span>
                <span>Listings : </span>
                <span>21</span>
              </div>
              <div>
                <span>• </span>
                <span>Sold : </span>
                <span>5</span>
              </div>
              <div>
                <span>• </span>
                <span>Role : </span>
                <span>Owner</span>
              </div>
              <div>
                <span>• </span>
                <span>Reviews : </span>
                <span>19</span>
              </div>
            </div>
            <div className={classes.company_details}>
              <Image
                className={classes.company_logo}
                src="/company.png"
                width={200}
                height={200}
                alt="Company Logo"

              />
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
                       