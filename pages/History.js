import React, { useEffect, useState } from 'react';
import { Unica_One, Bebas_Neue } from "next/font/google";

import classes from "@/styles/history.module.css"
import Navbar2 from '@/components/navbar2'
import { db, storage } from '@/firebase/firebase'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
const player = Bebas_Neue({
    subsets: ["latin"],
    display: 'swap',
    adjustFontFallback: false, weight: '400'
});
const play = Unica_One({
    subsets: ["latin"],
    display: 'swap',
    adjustFontFallback: false, weight: '400'
});
const History = () => {
    const [data, setData] = useState([])
    const orders = collection(db, "Order_Details")
    const q = query(orders, orderBy("Date", "desc"),)
    useEffect(() => {
        getDocs(q).then((res) => {
            setData(res.docs.map((dta) => ({
                ...dta.data(), id: dta.id
            })))
        })
    }, [])
    // console.log(data);
    return (<div className={classes.back}>
        {/* <Navbar2 /> */}
        <div className={classes.main}>
            <h1 className={player.className}>Order History</h1>
            <table className={classes.container}>
                <thead>
                    <tr>
                        <th><h1 className={play.className}>Product</h1></th>
                        <th><h1 className={play.className}>Seller</h1></th>
                        <th><h1 className={play.className}>Price</h1></th>
                        <th><h1 className={play.className}>Date</h1></th>
                        <th><h1 className={play.className}>Time</h1></th>

                    </tr>
                </thead>
                {data.map((value,key) => {
                    return <tbody>

                        <tr>
                            <td className={play.className}>{value.ProductName}</td>
                            <td className={play.className}>{value.Seller}</td>
                            <td className={play.className}>{value.price}</td>
                            <td className={play.className}>{value.Date}</td>
                            <td className={play.className}>{value.Time}</td>

                        </tr>

                    </tbody>
                })}

            </table></div>
    </div>
    )
}

export default History