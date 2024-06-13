"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Slider() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="my-10 p-10">
      <h3 className="text-2xl uppercase text-black font-bold text-center"> INdochino in the news</h3>
      <Carousel plugins={[plugin.current]} className="container mx-auto mt-10 max-w-[800px]  " onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
        <CarouselContent>
          <CarouselItem>
            <div className="flex flex-col items-center justify-center p-6">
              <p className="text-4xl text-center font-semibold"> This service exceeded all my expectations. The attention to detail was impeccable. </p>
              <p className="text-2xl text-center mt-5">- Forbes</p>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="flex flex-col items-center justify-center p-6">
              <p className="text-4xl text-center font-semibold"> A game-changer in the industry! The quality and craftsmanship are unmatched. </p>
              <p className="text-2xl text-center mt-5">- Time Magazine</p>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="flex flex-col items-center justify-center p-6">
              <p className="text-4xl text-center font-semibold"> I never thought custom suits could be so affordable and look this good. </p>
              <p className="text-2xl text-center mt-5">- Emily Johnson</p>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="flex flex-col items-center justify-center p-6">
              <p className="text-4xl text-center font-semibold"> The best investment I have made in my wardrobe. Highly recommend! </p>
              <p className="text-2xl text-center mt-5">- Michael Brown</p>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="flex flex-col items-center justify-center p-6">
              <p className="text-4xl text-center font-semibold"> Absolutely fantastic experience from start to finish. Perfect fit! </p>
              <p className="text-2xl text-center mt-5">- New York Today</p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
