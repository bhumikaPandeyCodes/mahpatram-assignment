import Image from "next/image";

export default function Ourteam(){
    return(
        <section className="flex flex-col items-center gap-8 p-20">
            <h1 className="text-black text-5xl font-bold text-center sm:text-start">Meet Our Awesome Coach</h1>
            <div className="flex flex-col sm:flex-row gap-4  justify-center items-center">
                <div className="bg-gradient-to-br via-40% from-gray-300 to-gray-600 rounded-xl py-8 px-6 flex flex-col gap-3 items-center">
                    <div className="rounded-full w-20 h-20">
                        <Image 
                        src="/Image1.png"
                        alt="coach image"
                        width={100}
                        height={100}
                        className="object-cover"
                        />
                    </div>
                    <h3 className="text-white text-2xl">Dianne Russell</h3>
                    <p className="text-gray-100 text-base ">More than 20 years of experience in the field architecture and has worked on porject up to 100+</p>
                </div>
                <div className="bg-gradient-to-br via-40% from-gray-300 to-gray-600 rounded-xl py-8 px-6 flex flex-col gap-3 items-center">
                    <div className="rounded-full w-20 h-20">
                        <Image 
                        src="/Image2.png"
                        alt="coach image"
                        width={100}
                        height={100}
                        className="object-cover"
                        />
                    </div>
                    <h3 className="text-white text-2xl">Oliver Bennett</h3>
                    <p className="text-gray-100 text-base ">More than 20 years of experience in the field architecture and has worked on porject up to 100+</p>
                </div>
                <div className="bg-gradient-to-br via-40% from-gray-300 to-gray-600 rounded-xl py-8 px-6 flex flex-col gap-3 items-center">
                    <div className="rounded-full w-20 h-20">
                        <Image 
                        src="/Image3.png"
                        alt="coach image"
                        width={100}
                        height={100}
                        className="object-cover"
                        />
                    </div>
                    <h3 className="text-white text-2xl">Emma Brooks</h3>
                    <p className="text-gray-100 text-base ">More than 20 years of experience in the field architecture and has worked on porject up to 100+</p>
                </div>
                <div className="bg-gradient-to-br via-40% from-gray-300 to-gray-600 rounded-xl py-8 px-6 flex flex-col gap-3 items-center">
                    <div className="rounded-full w-20 h-20">
                        <Image 
                        src="/Image4.png"
                        alt="coach image"
                        width={100}
                        height={100}
                        className="object-cover"
                        />
                    </div>
                    <h3 className="text-white text-2xl">Ethan Carter</h3>
                    <p className="text-gray-100 text-base ">More than 20 years of experience in the field architecture and has worked on porject up to 100+</p>
                </div>
            </div>
        </section>
    )
}