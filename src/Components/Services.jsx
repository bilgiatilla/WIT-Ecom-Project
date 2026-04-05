import hooli from "../assets/Logos/hooli.svg";
import lyft from "../assets/Logos/lyft.svg";
import pied from "../assets/Logos/pied-piper.svg";
import stripe from "../assets/Logos/stripe.svg";
import aws from "../assets/Logos/aws.svg";
import reddit from "../assets/Logos/reddit.svg";

const logos = [
        hooli,
        lyft,
        pied,
        stripe,
        aws,
        reddit,
    ] 

function BrandLogos() {

  return (
    <div className="bg-[#FAFAFA] py-10 flex flex-col lg:flex-row lg:justify-center items-center gap-10">
      {logos.map((logo, index) => (
        <div key={index} className="w-32 h-12 flex items-center justify-center">
        <img
          
          src={logo}
          className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100"
        />
        </div>
      ))}
    </div>
  );
}
export default BrandLogos;