import about from "../assets/About/about.png";
import video from "../assets/About/video.png";
import pink from "../assets/About/pink.jpg";
import BrandLogos from "../Components/Services";
import TeamSection from "./TeamSections/TeamSection";

function AboutPage() {
  const stats = [
    { value: "15K", label: "Happy Customers" },
    { value: "150K", label: "Monthly Visitors" },
    { value: "15", label: "Countries Worldwide" },
    { value: "100+", label: "Top Partners" },
  ];
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div className="text-center items-center lg:items-start lg:pt-60 lg:px-40 p-20 flex flex-col gap-10">
          <h2 className="text-3xl lg:text-6xl font-bold">ABOUT US</h2>
          <h4 className="text-[#737373]">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </h4>
          <button className="mt-2 rounded-md border px-5 py-3 text-sm font-bold bg-[#23A6F0] text-[white]">
            Get Quote Now
          </button>
        </div>
        <div className="relative flex justify-center items-center py-10">
          <div className="absolute w-80 lg:w-150 h-80 lg:h-150 bg-pink-200 rounded-full"></div>
          <div className="absolute w-10 h-10 bg-pink-200 rounded-full top-10 left-10"></div>
          <div className="absolute w-4 h-4 bg-purple-400 rounded-full top-20 right-10"></div>
          <div className="absolute w-3 h-3 bg-purple-300 rounded-full bottom-10 left-20"></div>
          <img src={about} className="relative z-10 lg:w-150" />
        </div>
      </div>
      <div className="text-center lg:text-start px-10 ">
        <p className="text-[#E74040] lg:px-10">Problems trying</p>
        <div className="flex flex-col lg:flex-row">
          <h3 className="text-2xl font-bold py-5 px-10">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
          <p className="text-[#737373] py-5">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
      <div className="text-center lg:justify-center flex flex-col lg:flex-row gap-20 py-15">
        {stats.map((item, index) => (
          <div key={index}>
            <h1 className="text-5xl font-bold">{item.value}</h1>
            <h5 className="text-gray-500 font-bold">{item.label}</h5>
          </div>
        ))}
      </div>
      <div className="w-80 lg:w-240 mx-auto relative py-20">
        <img src={video} alt="" className="rounded-xl w-full lg:h-120" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  bg-[#23A6F0] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer transition scale-100 hover:scale-110"
        >
          <i className="fa-solid fa-play text-white text-sm ml-1"></i>
        </div>
      </div>
      <div className="text-center px-20 py-5">
        <h2 className="text-4xl font-bold ">Meet Our Team</h2>
        <p className="py-10 text-[#737373] ">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <TeamSection />
      <div className="bg-[#FAFAFA] text-center p-10">
        <h2 className="font-bold text-4xl p-10">Big Companies Are Here</h2>
        <p className="text-[#737373]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <BrandLogos />
      <div className="lg:flex lg:flex-row lg:w-full">
      <div className="bg-[#2A7CC7] text-center text-white p-20 lg:text-start lg:p-60">
        <h5 className="text-xl font-bold mt-4">WORK WITH US</h5>
        <h2 className="text-4xl font-bold mt-4 lg:my-8">Now Let’s grow Yours</h2>
        <p className="text-[#FFFFFF] mt-4">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th{" "}
        </p>
        <button className="mt-6 border border-white rounded-md px-8 py-2 text-[12px] font-bold cursor-pointer">
          APPLY
        </button>
      </div>
      <img src={pink} className="hidden lg:block w-150"/>
      </div>
    </div>
  );
}

export default AboutPage;
