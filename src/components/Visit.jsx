"use client";

import CalendarAppointment from "./CalendarAppointment";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Visit = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className=" bg-black text-white    py-10  ">
      <h4 className="text-3xl text-white font-bold   text-center mb-10">VISIT US AT CHINOCK CENTRE</h4>
      <div className="map">
        <iframe title="Indochino on map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20087.64328919398!2d-114.09394426523436!3d50.99849610000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170558c817a7b%3A0xa80ab79074859579!2sCF%20Chinook%20Centre!5e0!3m2!1sen!2sbd!4v1718255207943!5m2!1sen!2sbd" width="100%" height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <div className="text-center">
        <Button onClick={() => setShowPopup(true)} className="uppercase   text-csBlueDark mt-10 font-bold" variant="secondary">
          Book an Appointment
        </Button>
        {showPopup && <CalendarAppointment setShowPopup={setShowPopup} />}
      </div>
    </div>
  );
};

export default Visit;
