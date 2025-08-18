import Carousel from "@/components/common/Caraousel";
import LookAround from "@/components/home/look-around/LookAround";
import HomeVenueSection from "@/components/home/venue-section/HomeVenueSection";

export default function Home() {
  const slides = [
    'https://www.villacenci.it/wp-content/uploads/2024/04/214801503_352711262878790_1480070040761242172_n.jpg',
    'https://owenhouseweddingbarn.co.uk/wp-content/uploads/2023/10/18077025_1991161167766668_6391971413047393111_o.webp',
    'https://images.squarespace-cdn.com/content/v1/673cdd7b13abb72871e617c8/642dcd80-030b-49cf-b079-ea8c59228457/AndreaPaul_0006.jpg',
    'https://images.squarespace-cdn.com/content/v1/673cdd7b13abb72871e617c8/1ef9588f-64a4-4aa0-a3fe-8f58fbc624a9/AndreaPaul_0922.jpg?format=2500w',
  ];

  return (
    <main>
      <Carousel slides={slides}/>
      <LookAround />
      <HomeVenueSection />
    </main>
  );
}
