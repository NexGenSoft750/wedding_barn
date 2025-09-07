import Carousel from "@/components/common/Caraousel";
import LookAround from "@/components/home/look-around/LookAround";
import HomeVenueSection from "@/components/home/venue-section/HomeVenueSection";
import { slides } from "@/data/slides";

export default function Home() {
  return (
    <>
      <Carousel slides={slides} />
      <LookAround />
      <HomeVenueSection />
    </>
  );
}
