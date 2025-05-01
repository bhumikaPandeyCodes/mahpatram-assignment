import Image from "next/image";

export default function Footer(){
    return(
        <footer className="mt-10 px-5 md:px-20 py-8 bg-gray-600 flex  justify-between ">
            <div>
                    <Image
                    alt="Logo Image"
                    src="/Logo.png"
                    height={60}
                    width={140}
                    />
                    <h3 className="text-gray-200 mt-4">+9176547890</h3>
            </div>
            <div className="text-gray-200 flex gap-5 md:gap-10">
                <ul>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Contact Us</li>
                    <li className="cursor-pointer">Courses</li>
                    <li className="cursor-pointer">Coaching</li>
                    <li className="cursor-pointer">Events & Retreat</li>
                    <li className="cursor-pointer">Media & Press</li>
                    <li className="cursor-pointer">Blogs</li>
                </ul>
                <ul>
                    <li className="cursor-pointer">LinkedIn</li>
                    <li className="cursor-pointer">Youtube</li>
                    <li className="cursor-pointer">X (Twitter)</li>
                </ul>
            </div>
        </footer>
    )
}