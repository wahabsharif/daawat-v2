import HomeBanner from "@/components/home/HomeBanner";
import { HomePackages } from "@/components/home/HomePackages";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HomeBanner />
      <HomePackages />
    </main>
  );
}
