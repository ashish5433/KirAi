import React from 'react'
import Navdash from './Navdash'
import dashboard from "./dashboard.module.css"
import Image from 'next/image';
import Home from './Options/home';
import Graph from './Options/graph';
import { useState } from 'react';
import Partner from './Options/Partner';
import Enquiries from './Options/Enquiries';
import Support from './Options/Support';
import Agents from './Options/Agents';
import Listings from './Options/Listings';






export default function Dashboard() {
  const [showOption,setShowOption] = useState("Home");
  const [dashoption,setDashOption] = useState(true);
  const [show,SetShow]=useState(0)
  return (
    <div>
      <Navdash dashoption={dashoption} setDashOption={setDashOption}/>
      <div>
        <div className='flex flex-col lg:flex-row  border-t-2'>
          <div className={dashoption ? `col-span-2 bg-black pt-4 flex flex-col`: "hidden"} >
            <div onClick={()=>{setShowOption("Home")}} className={`flex flex-row hover:bg-violet-300 text-neutral-50 hover:text-neutral-900  m-2 pointer  py-1 ${showOption ==="Home" ? "bg-violet-300" : "bg-neutral-900"}`}>
              <span className="material-symbols-outlined  border-4 mt-1 ml-10  h-14 w-14 rounded-full border-violet-800 bg-black text-neutral-50">
                home
              </span>
              <span className='my-1 mx-3 px-4 py-2 rounded-xl text-lg text-center font-bold ' >Home</span>
            </div>
            <div onClick={()=>{setShowOption("Partners")}} className={`flex flex-row hover:bg-violet-300 text-neutral-50 hover:text-neutral-900  m-2 pointer  py-1 ${showOption ==="Partners" ? "bg-violet-300" : "bg-neutral-900"}`}>
              <span className="material-symbols-outlined border-4 mt-1 ml-10 h-14 w-14 rounded-full border-violet-800 bg-black text-neutral-50">
              deployed_code_history
              </span>
              <span className='my-1 mx-3 px-4 py-2 rounded-xl text-lg text-center font-bold ' >Partners</span>
            </div>
            <div onClick={()=>{setShowOption("Enquiries")}} className={`flex flex-row hover:bg-violet-300 text-neutral-50 hover:text-neutral-900  m-2 pointer  py-1 ${showOption ==="Enquiries" ? "bg-violet-300" : "bg-neutral-900"}`}>
              <span className="material-symbols-outlined border-4 mt-1 ml-10  h-14 w-14 rounded-full border-violet-800 bg-black text-neutral-50">
                list_alt_add
              </span>
              <span className='my-1 mx-3 px-3  py-2 rounded-xl text-lg text-center font-bold ' >Enquiries</span>
            </div>
            <div onClick={()=>{setShowOption("Listings")}} className={`flex flex-row hover:bg-violet-300 text-neutral-50 hover:text-neutral-900  m-2 pointer  py-1 ${showOption ==="Listings" ? "bg-violet-300" : "bg-neutral-900"}`}>
              <span className="material-symbols-outlined border-4 mt-1 ml-10  h-14 w-14 rounded-full border-violet-800 bg-black text-neutral-50">
                edit_document
              </span>
              <span className='my-1 mx-3 px-4  py-2 rounded-xl text-lg text-center font-bold ' >Listings</span>
            </div>
            <div onClick={()=>{setShowOption("Agents")}} className={`flex flex-row hover:bg-violet-300 text-neutral-50 hover:text-neutral-900  m-2 pointer  py-1 ${showOption ==="Agents" ? "bg-violet-300" : "bg-neutral-900"}`}>
              <span className="material-symbols-outlined border-4 mt-1 ml-10  h-14 w-14 rounded-full border-violet-800 bg-black text-neutral-50">
                link
              </span>
              <span className='my-1 mx-3 px-4  py-2 rounded-xl text-lg text-center font-bold ' >Agents</span>
            </div>
            <div onClick={()=>{setShowOption("Support")}}  className={`flex flex-row hover:bg-violet-300 text-neutral-50 hover:text-neutral-900  m-2 pointer  py-1 ${showOption === "Support" ? "bg-violet-300" : "bg-neutral-900"}`}>
              <span className="material-symbols-outlined border-4 mt-1 ml-10  h-14 w-14 rounded-full border-violet-800 bg-black text-neutral-50">
                redeem
              </span>
              <span className='my-1 mx-3 px-4  py-2 rounded-xl text-lg text-center font-bold' >Support</span>
            </div>
            <div className='mt-16 text-center'>
              <span className='text-neutral-50 px-5 py-3 bg-violet-800 rounded-md'>Affiliate with Us</span>
            </div>
          </div>
          
          {showOption==="Home" ? <>
        
            <div className="m-3 md:col-span-7">
            <Home/>
          </div>

          <div className='col-span-3'>
            <Graph/>
            </div></> : ""
          }

          {
            showOption==="Partners" ? <div className="m-3 col-span-10">
              <Partner/>
              </div>
            : ""
          }

          {
            showOption==="Enquiries" ? <div className="m-3 col-span-10">
              <Enquiries/>
              </div>
            : ""
          }

          {
            showOption==="Support" ? <div className="m-3 col-span-10">
              <Support/>
              </div>
            : ""
          }

          {
            showOption==="Agents" ? <div className="m-3 col-span-10">
              <Agents/>
              </div>
            : ""
          }

          {
            showOption==="Listings" ? <div className="m-3 col-span-10">
            <div className='m-3 col-span-7'>

            </div>
              <Listings/>
              </div>
            : ""
          }
        </div>
      </div>
    </div>
  )
}
