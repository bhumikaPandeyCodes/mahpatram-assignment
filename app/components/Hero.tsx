import Image from "next/image";
import Navbar from "./Navbar";


export default function Hero(){

    return(
        <section className="md:relative h-full md:h-screen w-full bg-gradient-to-br via-42%  from-gray-300 to-black px-4 md:pl-20 md:pr-0">
           
            <Navbar  />
            <main className="flex flex-col items-center md:items-start md:flex-row justify-between ">
            <div className=" flex flex-col gap-10 items-center md:items-start">       
                <div className="flex flex-col gap-5 md:w-[550px]">
                    <h1 className="text-white text-4xl md:text-6xl leading-10 md:leading-20 font-medium">
                        Discover Your Inner Strength and Create A Life You Love
                    </h1>
                    <p className="text-gray-200">Life coaches will guide you through a transformational journey of self-discovery, helping you identify your unique gifts and talents</p>
                </div>
                <div className="flex flex-col items-center md:items-start ">
                    <button className="text-white px-4 py-2 md:px-8 md:py-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-600 text-base md:font-semibold">Get Started</button>
                    <div className="mt-5 flex gap-4">
                        <div className="text-center">
                            <h2 className="text-xl md:text-3xl font-bold text-white">100<span className="text-blue-300 font-bold">+</span></h2>
                            <p className="text-gray-200">Expert Coaches</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl md:text-3xl font-bold text-white">100<span className="text-blue-300 font-bold">+</span></h2>
                            <p className="text-gray-200">Lives Changed</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl md:text-3xl font-bold text-white">100<span className="text-blue-300 font-bold">+</span></h2>
                            <p className="text-gray-200">Workshops Conducted</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:relative flex flex-col items-center mt-8 md:mt-0 ">
                <div className="md:relative h-[300px] w-[300px] md:h-[500px] md:w-[500px] ">
                    <Image
                    alt="Hero image"
                    src="/HeroImage.png"
                    width={500}
                    height={500}
                    className="md:absolute md:top-0 md:right-0 object-contain"
                    />
                </div>
                <div className="md:absolute md:-bottom-[36px] md:right-0 ">
                    <div className="bg-gradient-to-br via-30% from-blue-100 via-blue-200 to-blue-500 rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none w-full md:w-[560px]  px-10 py-5 flex flex-col md:flex-row gap-5 items-center justify-center">
                        <div className="">
                            <div className="flex items-center gap-1"><h2 className="text-xl md:text-3xl font-bold text-white">10+</h2><p className="text-lg font-medium text-white">Years</p></div>
                            <h3 className="text-lg md:text-xl font-semibold">Experience</h3>
                        </div>
                        <p className="text-md text-white ">True transformation is a balance of mind, body, and purpose. These pillars represent the core areas we help you strengthen. Track your journey and celebrate your growth as you progress toward a more empowered and fulfilled life.</p>
                    </div>
                </div>
            </div>
            </main>
        </section>
    )
}