import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import mainImg from "../assets/Team/team-main.png"
import TeamSection from "./TeamSections/TeamSection";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const smallImages = [
    { id: 1, src: mainImg, alt: "Model 1" },
    { id: 2, src: mainImg, alt: "Model 2" },
    { id: 3, src: mainImg, alt: "Model 3" },
    { id: 4, src: mainImg, alt: "Model 4" },
  ];

function TeamPage() {
  return (
    <div>
      <div>
        <div className="text-center px-10">
          <h5 className="text-lg">WHAT WE DO</h5>
          <h2 className="text-3xl font-bold">Innovation tailored for you</h2>
        </div>
        <div className="flex flex-row justify-center gap-5 pt-5 font-bold">
          <Link to="/">Home</Link>
          <ChevronRight />
          <h6 className="text-[#737373]">Team</h6>
        </div>
      </div>
      <section className="w-full mx-auto bg-white py-10 flex flex-col lg:flex-row gap-1">
      <div className="w-full lg:w-1/2">
        <img
          src={mainImg}
          alt="Main model"
          className="w-full h-101 object-cover block"
        />
      </div>
      <div className="w-full lg:w-1/2 grid grid-cols-2 gap-1">
        {smallImages.map((item) => (
          <div key={item.id}>
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-50 object-cover block"
            />
          </div>
        ))}
      </div>
    </section>
    <section className="items-center text-center">
        <h2 className="text-3xl font-bold px-25">Meet Our Team</h2>
        <TeamSection/>
    </section>
    <section className=" py-20 px-6 text-center">
      <div className="max-w-125 mx-auto flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] leading-snug">
          Start your <br /> 14 days free trial
        </h2>
        <p className="text-[#737373] text-sm md:text-base max-w-100">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="mt-2 bg-[#23A6F0] text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
          Try it free now
        </button>
        <div className="flex gap-6 mt-6 text-xl">
          <FaXTwitter className="text-[#23A6F0] cursor-pointer" />
          <FaFacebookF className="text-[#3b5998] cursor-pointer" />
          <FaInstagram className="text-black cursor-pointer" />
          <FaLinkedinIn className="text-[#0A66C2] cursor-pointer" />
        </div>

      </div>
    </section>
    </div>
  );
}

export default TeamPage;
