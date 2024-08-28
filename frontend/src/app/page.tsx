import HomeBanner from "@/components/home/HomeBanner";
import { HomePackages } from "@/components/home/HomePackages";
import PopUpNotification from "@/components/home/PopUpNotification";

export default function Home() {
  return (
    <main className="">
      <HomeBanner />
      <HomePackages />
      <PopUpNotification />
    </main>
  );
}
