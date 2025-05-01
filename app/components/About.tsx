import Image from "next/image";

export default function About(){

    return(
        <section className="h-screen w-full flex flex-col sm:flex-row items-center gap-20 mt-10 px-5 sm:px-20">
            <div className="flex flex-col items-center sm:items-start">
                
                <h1 className="text-4xl font-bold">Our Story</h1>
                <h1 className="text-4xl font-bold mt-2">Who we are</h1>
                <p className="text-gray-200 mt-8">
                    At Mahpatram, we believe in the limitless potential of every individual and the power of collaboration to drive success and well-being.
                </p>
                <p className="text-gray-200 mt-2">
                    MAHPATRAM is dedicated to empowering individuals, businesses, and coaches to unlock their full potential. With a focus on transformation and growth, we provide holistic solutions that foster personal and professional excellence.
                </p>
                <button className="text-white mt-6 px-8 py-4 rounded-lg bg-blue-600 text-base font-semibold">Learn More</button>
            </div>
                
            <div className="relative ">
                <span className=" absolute top-9 -left-16 h-2 w-20 bg-gradient-to-r from-blue-50 to-blue-300"></span>
                <figure className=" w-[360px] h-[360px] sm:w-[500px] sm:h-[500px]">
                    <Image
                        src="/GroupImage.png"
                        alt="Group-image"
                        width={500}
                        height={500}
                        className="object-cover"
                        />
                </figure>
            </div>
        </section>
    )
    
}