import { MapPin, Navigation, Phone } from "lucide-react";
import contact from "../assets/contact.png";
import arrow from "../assets/arrow.png";

function ContactPage() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row">
        <div className="text-center px-10 lg:text-start lg:p-40">
          <h5 className="font-bold">CONTACT US</h5>
          <h2 className="text-4xl lg:text-6xl font-bold py-5">
            Get in touch today!
          </h2>
          <h4 className="text-[#737373] py-5">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </h4>
          <h3 className="text-2xl font-semibold">Phone ; +451 215 215 </h3>
          <h3 className="text-2xl font-semibold py-3">Fax : +451 215 215</h3>
          <div className="flex justify-center gap-5">
            <i className="fa-brands fa-x-twitter text-2xl cursor-pointer hover:scale-110 transition-transform"></i>
            <i className="fa-brands fa-square-facebook text-2xl cursor-pointer hover:scale-110 transition-transform"></i>
            <i className="fa-brands fa-instagram text-2xl cursor-pointer hover:scale-110 transition-transform"></i>
            <i className="fa-brands fa-linkedin text-2xl cursor-pointer hover:scale-110 transition-transform"></i>
          </div>
        </div>
        <div className="relative flex justify-center items-center py-10">
          <div className="absolute w-80 lg:w-150 h-80 lg:h-150 bg-pink-200 rounded-full"></div>
          <div className="absolute w-10 h-10 bg-pink-200 rounded-full top-10 left-10"></div>
          <div className="absolute w-4 h-4 bg-purple-400 rounded-full top-20 right-10"></div>
          <div className="absolute w-3 h-3 bg-purple-300 rounded-full bottom-10 left-20"></div>
          <img src={contact} className="relative z-10 lg:w-150" />
        </div>
      </div>
      <div className="text-center bg-[#FAFAFA]">
        <h6 className="font-bold text-lg py-5">VISIT OUR OFFICE</h6>
        <h2 className="font-bold text-3xl px-35 lg:px-160">
          We help small businesses with big ideas
        </h2>
        <div className="flex flex-col lg:flex-row lg:justify-center lg:p-20 gap-5">
          <div className="bg-white w-80 py-12 px-8 flex flex-col items-center text-center gap-4 mx-auto font-bold">
            <Phone className="text-[#23A6F0] size-12" />
            <div className="">
              <h6>georgia.young@example.com</h6>
              <h6>georgia.young@ple.com</h6>
            </div>
            <h5>Get Support</h5>
            <button className="cursor-pointer mt-2 rounded-md border px-5 py-3 text-sm font-bold border-[#23A6F0] text-[#23A6F0]">
              Submit Request
            </button>
          </div>
          <div className="bg-[#252B42] w-80 py-12 px-8 flex flex-col items-center text-center gap-4 mx-auto font-bold">
            <MapPin className="text-[#23A6F0] size-12" />
            <div className="text-[#FFFFFF]">
              <h6>georgia.young@example.com</h6>
              <h6>georgia.young@ple.com</h6>
            </div>
            <h5 className="text-[#FFFFFF]">Get Support</h5>
            <button className="cursor-pointer mt-2 rounded-md border px-5 py-3 text-sm font-bold border-[#23A6F0] text-[#23A6F0]">
              Submit Request
            </button>
          </div>
          <div className="bg-white w-80 py-12 px-8 flex flex-col items-center text-center gap-4 mx-auto font-bold">
            <Navigation className="text-[#23A6F0] size-12" />
            <div className="">
              <h6>georgia.young@example.com</h6>
              <h6>georgia.young@ple.com</h6>
            </div>
            <h5>Get Support</h5>
            <button className="cursor-pointer mt-2 rounded-md border px-5 py-3 text-sm font-bold border-[#23A6F0] text-[#23A6F0]">
              Submit Request
            </button>
          </div>
        </div>
        <div className="bg-white font-bold flex flex-col items-center p-10">
          <img src={arrow} className="size-16" />
          <h5 className="text-lg pt-3">WE Can't WAIT TO MEET YOU</h5>
          <h1 className="text-6xl py-8">Let’s Talk</h1>
          <button className="cursor-pointer mt-2 rounded-md border px-5 py-3 text-sm font-bold bg-[#23A6F0] text-[white]">
            Try it free now
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
