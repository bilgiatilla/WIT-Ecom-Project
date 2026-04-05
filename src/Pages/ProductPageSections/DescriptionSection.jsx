import { ChevronRight } from "lucide-react";
import cardCover5 from "../../assets/ShopCards/card-cover-5.jpg";

function DescriptionSection() {
  return (
    <div className="p-5">
      <div className="flex flex-row justify-between lg:justify-center lg:gap-10 font-bold">
        <a href="">Description</a>
        <a href="">Additional Information</a>
        <a href="">
          Reviews<span>(0)</span>
        </a>
      </div>
      <div className="flex flex-col lg:flex-row">
      <div className="w-80 aspect-square overflow-hidden rounded-xl shadow-xl mx-auto mt-15 flex-1">
        <img
          className="w-full h-full object-cover object-center"
          src={cardCover5}
        ></img>
      </div>
      <div className="pt-10 mx-7 flex-1">
        <h3 className="text-center lg:text-start text-2xl font-bold">
          the quick fox jumps over{" "}
        </h3>
        <p className="py-5 text-[#737373]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <p className="py-5 text-[#737373]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <p className="py-5 text-[#737373]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
      </div>
      <div className="flex-1">
        <h1 className="text-center lg:text-start text-2xl font-bold py-10">
          the quick fox jumps over{" "}
        </h1>
        <ul className="">
          <li className="flex py-1 text-[#737373]">
            <ChevronRight className="mr-5" />
            the quick fox jumps over the lazy dog
          </li>
          <li className="flex py-1 text-[#737373]">
            <ChevronRight className="mr-5" />
            the quick fox jumps over the lazy dog
          </li>
          <li className="flex py-1 text-[#737373]">
            <ChevronRight className="mr-5" />
            the quick fox jumps over the lazy dog
          </li>
          <li className="flex py-1 text-[#737373]">
            <ChevronRight className="mr-5" />
            the quick fox jumps over the lazy dog
          </li>
        </ul>
        <h1 className="text-center lg:text-start text-2xl font-bold py-10">
          the quick fox jumps over{" "}
        </h1>
        <ul className="">
          <li className="flex py-1 text-[#737373]">
            <ChevronRight className="mr-5" />
            the quick fox jumps over the lazy dog
          </li>
          <li className="flex py-1 text-[#737373]">
            <ChevronRight className="mr-5" />
            the quick fox jumps over the lazy dog
          </li>
          <li className="flex py-1 text-[#737373]">
            <ChevronRight className="mr-5" />
            the quick fox jumps over the lazy dog
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default DescriptionSection;
