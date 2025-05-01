import HeartIcon from "../icons/HeartIcon";
import BusinessIcon from "../icons/BusinessIcon";
import HandshakeIcon from "../icons/HandshakeIcon";
import MentalHealthIcon from "../icons/MentalHealthIcon";
import SpritualIcon from "../icons/SpritualIcon";

export default function Services(){
    return(
        <section className="px-5 sm:px-20 mt-40 sm:mt-20">
            <div className="bg-gradient-to-r from-blue-50 to-blue-300 p-5 rounded-3xl flex flex-col gap-7 items-center">
                <h1 className="text-white text-5xl font-semibold text-center sm:text-start">Our Core Coaching Services</h1>
                <div className="w-full flex justify-evenly gap-5 ">
                    <div className="flex flex-col gap-1 items-center">
                        <div className="bg-[#2387C04D] rounded-full p-2 shadow-sm">
                            <div className="bg-blue-300 rounded-full p-2 text-white">
                                <HeartIcon />
                                
                            </div>
                        </div>
                        <p className="text-white text-base font-semibold">Life Coaching</p>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                        <div className="bg-[#2387C04D] rounded-full p-2 shadow-sm">
                            <div className="bg-blue-300 rounded-full p-2 text-white">
                                <HandshakeIcon />
                                
                            </div>
                        </div>
                        <p className="text-white text-base font-semibold">Business Coaching</p>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                        <div className="bg-[#2387C04D] rounded-full p-2 shadow-sm">
                            <div className="bg-blue-300 rounded-full p-2 text-white">
                                <BusinessIcon />
                                
                            </div>
                        </div>
                        <p className="text-white text-base font-semibold">Business Consultancy</p>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                        <div className="bg-[#2387C04D] rounded-full p-2 shadow-sm">
                            <div className="bg-blue-300 rounded-full p-2 text-white">
                                <MentalHealthIcon />
                                
                            </div>
                        </div>
                        <p className="text-white text-base font-semibold">Mental Health</p>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                        <div className="bg-[#2387C04D] rounded-full p-2 shadow-sm">
                            <div className="bg-blue-300 rounded-full p-2 text-white">
                                <SpritualIcon />
                                
                            </div>
                        </div>
                        <p className="text-white text-base font-semibold">Spritual Awareness</p>
                    </div>
                </div>
            </div>
        </section>
    )
}