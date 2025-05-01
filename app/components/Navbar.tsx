"use client"

import Image from "next/image";
import MenuIcon from "../icons/MenuIcon";
import { useState } from "react";
import CrossIcon from "../icons/CrossIcon";


export default function Navbar(){
    const [showNav, setShowNav] = useState(true)

    return(
        <nav className="flex gap-16 justify-between md:items-center p-10">
            <div className="h-[40px] w-[100px] sm:h-[60px] sm:w-[140px]">
                <Image
                alt="Logo Image"
                src="/Logo.png"
                height={60}
                width={140}
                className="object-cover"
                />
            </div>
            <div className="">
                    <div className="text-white md:hidden block" onClick={()=>setShowNav(!showNav)}>
                        {showNav?<CrossIcon/>:<MenuIcon />}
                    </div>
                    <div className={`flex flex-col md:flex-row gap-10 text-gray-200 ${showNav?"block":"hidden"} `}>
                        <span className="text-sm lg:text-sm text-nowrap text-white font-semibold">Home</span>
                        <span className="text-sm lg:text-sm text-nowrap">Coaching</span>
                        <span className="text-sm lg:text-sm text-nowrap">Events & Retreat</span>
                        <span className="text-sm lg:text-sm text-nowrap">About Us</span>
                        <span className="text-sm lg:text-sm text-nowrap">Courses</span>
                        <span className="text-sm lg:text-sm text-nowrap">Blogs</span>
                        <span className="text-sm lg:text-sm text-nowrap">Media & Press</span>
                        <span className="text-sm lg:text-sm text-nowrap">Contact Us</span>
                    </div>
            </div>
        </nav>
    )
}