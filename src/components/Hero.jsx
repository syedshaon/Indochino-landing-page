"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CalendarAppointment from "./CalendarAppointment";
import { useState } from "react";

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="w-screen blueBG h-auto px-5 ">
      <div className="container flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8 ">
        <div className="left  ">
          <Image priority className=" h-[300px] md:h-[400px] md:min-h-[600px] w-auto" src="/tahsan.webp" alt="Man dressed indochino" height={800} width={534} />
        </div>
        <div className="right text-white  max-w-[400px] text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-2xl md:text-4xl  font-bold uppercase">The Tailor is in</h2>
          <p className="mt-3 md:mt-5 ">The ultimate custom menswear experience is now open in Chinock Centre.</p>
          <hr className="w-full h-[1px] bg-white my-3 md:my-10" />
          <p>Visit us by April 30 to be entered in a draw for a perfectly tailored wardrobe</p>
          <Button onClick={() => setShowPopup(true)} className="uppercase  text-csBlueDark mt-5 font-bold" variant="secondary">
            Book an Appointment
          </Button>
          {showPopup && <CalendarAppointment setShowPopup={setShowPopup} />}
        </div>
      </div>
    </div>
  );
};

export default Hero;
