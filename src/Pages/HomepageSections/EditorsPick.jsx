import menImg from "../../assets/Categories/men.jpg";
import womenImg from "../../assets/Categories/women.jpg";
import kidsImg from "../../assets/Categories/kids.jpg";
import accImg from "../../assets/Categories/accessories.jpg";

function EditorsPick() {
  return (
    <section className="pt-16 text-center">
      <div className="px-6">
        <h3 className="text-xl font-extrabold">EDITOR'S PICK</h3>
        <p className="pt-4 text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="grid gap-6 p-6 lg:hidden">
        <div className="relative group overflow-hidden">
          <img
            src={menImg}
            alt="Men"
            className="h-105 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <h5 className="absolute bottom-5 left-5 bg-white px-8 py-3 text-md font-bold">
            MEN
          </h5>
        </div>

        <div className="relative group overflow-hidden">
          <img
            src={womenImg}
            alt="Women"
            className="h-105 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <h5 className="absolute bottom-5 left-5 bg-white px-8 py-3 text-md font-bold">
            WOMEN
          </h5>
        </div>

        <div className="relative group overflow-hidden">
          <img
            src={accImg}
            alt="Accessories"
            className="h-55 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <h5 className="absolute bottom-5 left-4 bg-white px-6 py-3 text-md font-bold">
            ACCESSORIES
          </h5>
        </div>

        <div className="relative group overflow-hidden">
          <img
            src={kidsImg}
            alt="Kids"
            className="h-55 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <h5 className="absolute bottom-5 left-4 bg-white px-6 py-3 text-md font-bold">
            KIDS
          </h5>
        </div>
      </div>

      <div className="hidden gap-6 p-6 lg:grid lg:grid-cols-3">
        <div className="relative group overflow-hidden">
          <img
            src={menImg}
            alt="Men"
            className="h-125 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <h5 className="absolute bottom-5 left-5 bg-white px-8 py-3 font-bold cursor-pointer">
            MEN
          </h5>
        </div>

        <div className="relative group overflow-hidden">
          <img
            src={womenImg}
            alt="Women"
            className="h-125 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <h5 className="absolute bottom-5 left-5 bg-white px-8 py-3 font-bold cursor-pointer">
            WOMEN
          </h5>
        </div>

        <div className="grid grid-rows-2 gap-6">
          <div className="relative group overflow-hidden">
            <img
              src={accImg}
              alt="Accessories"
              className="h-60 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <h5 className="absolute bottom-5 left-4 bg-white px-6 py-3 font-bold cursor-pointer">
              ACCESSORIES
            </h5>
          </div>

          <div className="relative group overflow-hidden">
            <img
              src={kidsImg}
              alt="Kids"
              className="h-60 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <h5 className="absolute bottom-5 left-4 bg-white px-6 py-3 font-bold cursor-pointer">
              KIDS
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditorsPick;