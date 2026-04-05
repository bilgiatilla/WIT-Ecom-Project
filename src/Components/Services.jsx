const logos = [
        "src/assets/Logos/hooli.svg",
        "src/assets/Logos/lyft.svg",
        "src/assets/Logos/pied-piper.svg",
        "src/assets/Logos/stripe.svg",
        "src/assets/Logos/aws.svg",
        "src/assets/Logos/reddit.svg",
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