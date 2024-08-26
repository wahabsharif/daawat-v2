import ShineBorder from "@/components/magicui/shine-border";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { homePackagesCardsData } from "@/data/HomePackagesCardsData";
import Link from "next/link";

export function HomePackages() {
  return (
    <section className="p-4 sm:p-6 md:p-10 mt-2">
      <div className="p-4">
        <h1 className="text-center uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gradient">
          Corporate Food Catering
        </h1>
      </div>
      <div className="flex flex-wrap gap-4">
        {homePackagesCardsData.map((card, index) => (
          <ShineBorder
            key={index}
            className="relative flex flex-col h-[300px] sm:h-[350px] md:h-[400px] w-full rounded-lg border bg-background md:w-[calc(33.33%-1rem)] md:shadow-xl"
            color={card.colors}
          >
            {/* Background Image */}
            <div className="absolute inset-0 h-full w-full opacity-30 rounded-xl">
              <Image
                src={card.image}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 -z-10"
              />
            </div>

            <div className="flex flex-col justify-between h-full w-full">
              <span className="pointer-events-none p-2 sm:p-4 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl sm:text-3xl md:text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                {card.title}
              </span>

              {/* Social Media Icons */}
              <div className="relative flex flex-col items-center justify-center mt-auto w-full">
                <div className="absolute inset-x-0 bottom-0 h-12 sm:h-14 md:h-16 bg-gradient-to-t rounded-xl from-gray-900 to-transparent dark:from-gray-800 dark:to-transparent" />
                <div className="relative flex space-x-3 sm:space-x-4 z-10 py-2 sm:py-4">
                  <Link href={"https://wa.me/phone_number"}>
                    {" "}
                    {/* Use a valid WhatsApp link */}
                    <IoLogoWhatsapp className="text-xl sm:text-2xl md:text-3xl text-dark dark:text-light" />
                  </Link>
                  <Link href={"tel:phone_number"}>
                    {" "}
                    {/* Use a valid phone link */}
                    <FaPhone className="text-xl sm:text-2xl md:text-3xl text-dark dark:text-light" />
                  </Link>
                </div>
              </div>
            </div>
          </ShineBorder>
        ))}
      </div>
    </section>
  );
}
