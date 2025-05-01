import Image from "next/image";

export default function Brands(){
    return(
        <section className="flex justify-evenly mt-20">
            <Image 
            alt=""
            src="/AdiraLogo.png"
            width={120}
            height={44}
            className="object-contain border-2 "
            />
            <Image 
            alt=""
            src="/AdhimixLogo.png"
            width={110}
            height={44}
            className="object-contain border-2 "
            />
            <Image 
            alt=""
            src="/HolcimLogo.png"
            width={100}
            height={44}
            className="object-contain border-2 "
            />
            <Image 
            alt=""
            src="/MncLogo.png"
            width={120}
            height={44}
            className="object-contain border-2 "
            />
            <Image 
            alt=""
            src="/TelkomselLogo.png"
            width={120}
            height={44}
            className="object-contain border-2 "
            />
        </section>
    )
}