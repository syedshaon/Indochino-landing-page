import { Button } from "@/components/ui/button";
import Link from "next/link";

const SeeSuits = () => {
  return (
    <div className="bg-black w-screen p-10">
      <div className=" text-white container  my-10 text-center max-w-[700px] mx-auto  ">
        <h3 className="text-2xl font-bold">THE MADE TO MEASURE DIFFERENCE</h3>
        <hr className="w-[300px] mx-auto h-[1px] bg-slate-200 mt-2" />
        <p className="my-5">We create suits and shirts customized your exact measurements and personal style, at excellent prices. </p>
        <Button className="uppercase px-7 border-csBlueDark  text-csBlueDark mt-5 font-bold" variant="outline">
          <Link href="#yetlightbox">SEE THE SUITS</Link>
        </Button>
      </div>
    </div>
  );
};

export default SeeSuits;
