import HomeBanner from "@/components/home/HomeBanner";
import { HomePackages } from "@/components/home/HomePackages";
import PopUpNotification from "@/components/home/PopUpNotification";
import MenuGrid from "@/components/menu/MenuGrid";

export default function HomePage() {
  return (
    <>
      <PopUpNotification />
      <HomeBanner />
      <HomePackages />
      <MenuGrid />
    </>
  );
}
