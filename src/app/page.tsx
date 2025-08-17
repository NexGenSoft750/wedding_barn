import Carousel from "@/components/common/Caraousel";
import LookAround from "@/components/LookAround";

export default function Home() {
  const slides = [
    'https://c4.wallpaperflare.com/wallpaper/26/26/373/full-size-hd-nature-1920x1200-wallpaper-preview.jpg',
    'https://static.showit.co/327/sdJOL-vVSNuHg6oH70u7Pw/105740/bobby_and_ariel_-_march_2022-387_websize.jpg',
    'https://static.showit.co/327/sdJOL-vVSNuHg6oH70u7Pw/105740/bobby_and_ariel_-_march_2022-387_websize.jpg',
  ];

  return (
    <main>
      <Carousel slides={slides}/>
      <LookAround />
    </main>
  );
}
