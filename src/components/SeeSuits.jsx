import { Button } from "@/components/ui/button";

const SeeSuits = () => {
  return (
    <div className="bg-white container p-10 my-10 text-center max-w-[700px] mx-auto  ">
      <h3 className="text-2xl font-bold">THE MADE TO MEASURE DIFFERENCE</h3>
      <hr className="w-[300px] mx-auto h-[1px] bg-slate-200 mt-2" />
      <p className="my-5">We create suits and shirts customized your exact measurements and personal style, at excellent prices. </p>
      <Button className="uppercase px-7 border-csBlueDark  text-csBlueDark mt-5 font-bold" variant="outline">
        SEE THE SUITS
      </Button>
    </div>
  );
};

export default SeeSuits;
