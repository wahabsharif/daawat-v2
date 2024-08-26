import cateringImage from "@/assets/home/catering-1.jpg";
import cateringImageTwo from "@/assets/home/catering-2.jpg";
import cateringImageThree from "@/assets/home/catering-3.jpg";
import { StaticImageData } from "next/image";

interface HomePackagesCard {
  title: string;
  image: StaticImageData; // This type helps with the image import
  colors: string[];
}

export const homePackagesCardsData: HomePackagesCard[] = [
  {
    title: "Silver",
    image: cateringImage,
    colors: ["#A07CFE", "#FE8FB5", "#FFBE7B"],
  },
  {
    title: "Gold",
    image: cateringImageTwo,
    colors: ["#A07CFE", "#FE8FB5", "#FFBE7B"],
  },
  {
    title: "Platinum",
    image: cateringImageThree,
    colors: ["#A07CFE", "#FE8FB5", "#FFBE7B"],
  },
];
