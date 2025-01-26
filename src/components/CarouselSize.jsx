import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import FrappuccinoCaramelRibbon from "../images/1.webp";
import FrappuccinoAlgarrobinaCreme from "../images/2.webp";
import FrappuccinoTripleMocha from "../images/3.webp";
import FrappuccinoMatcha from "../images/4.webp";
import FrappuccinoMolten from "../images/5.webp";
import FrappuccinoVainillaCreme from "../images/6.webp";
import Cacao from "../images/cacao.webp";

const frapuccinoItems = [
  { id: 1, name: "Caramel Ribbon", image: FrappuccinoCaramelRibbon },
  { id: 2, name: "Algarrobina Creme", image: FrappuccinoAlgarrobinaCreme },
  { id: 3, name: "Triple Mocha", image: FrappuccinoTripleMocha },
  { id: 4, name: "Matcha Frappuccino", image: FrappuccinoMatcha },
  { id: 5, name: "Molten Frappuccino", image: FrappuccinoMolten },
  { id: 6, name: "Vainilla Crème", image: FrappuccinoVainillaCreme },
];

function CarouselSize() {
  const [api, setApi] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (api) {
      api.on("select", () => {
        setCurrentIndex(api.selectedScrollSnap());
      });
    }
  }, [api]);

  return (
    <section className="flex items-center mt-20">
      <img
        src={Cacao.src}
        alt="Cacao img"
        className="w-36 h-32 md:flex hidden absolute"
      />

      <div className="container">
        <div className="bg-starbucksBg rounded-[35px] max-w-[530px] lg:max-w-[780px] xl:max-w-[1050px] 2xl:max-w-[1300px] mx-auto flex items-center justify-center py-5">
          <Carousel opts={{ loop: false }} setApi={setApi} className="w-full relative">
            <CarouselContent>
              {frapuccinoItems.map((frapuccinoItem, index) => (
                <CarouselItem
                  key={frapuccinoItem.id}
                  className={`sm:basis-full lg:basis-1/2 xl:basis-1/3 relative -top-14 transition-transform duration-300 ${index === currentIndex ? 'scale-125' : 'scale-100'}`}
                >
                  <div className="flex flex-col items-center justify-center">
                    <img
                      alt={frapuccinoItem.name}
                      src={frapuccinoItem.image.src}
                      className="h-40 w-40"
                    />
                    <div className="text-center">
                      <h4 className="text-white text-sm font-medium">
                        {frapuccinoItem.name}
                      </h4>
                      <p className="text-white text-sm font-extralight">
                        Add to order +
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-8" />
            <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-8" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default CarouselSize;