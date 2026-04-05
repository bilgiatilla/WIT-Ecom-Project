import menImg from "../../assets/Categories/men.jpg";
import womenImg from "../../assets/Categories/women.jpg";
import kidsImg from "../../assets/Categories/kids.jpg";
import accImg from "../../assets/Categories/accessories.jpg";

function EditorsPick() {
  return (
    <section className="pt-15 text-center justify-center">
      <div className="px-15">
        <h3 className="text-xl font-extrabold">EDITOR'S PICK</h3>
        <p className="text-sm pt-4">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="grid p-10 gap-8 lg:hidden">
        <div className="relative">
          <img
            src={menImg}
            alt="Men"
            className="w-full h-120 object-cover"
          />
          <h5 className="absolute bottom-5 left-5 bg-white px-15 py-3 text-md font-bold">
            MEN
          </h5>
        </div>

        <div className="relative">
          <img
            src={womenImg}
            alt="Women"
            className="w-full h-120 object-cover"
          />
          <h5 className="absolute bottom-5 left-10 bg-white px-8 py-3 text-md font-bold">
            WOMEN
          </h5>
        </div>

        <div className="relative">
          <img
            src={accImg}
            alt="Accessories"
            className="w-full h-60 object-cover"
          />
          <h5 className="absolute bottom-5 left-4 bg-white px-8 py-3 text-md font-bold">
            ACCESSORIES
          </h5>
        </div>

        <div className="relative">
          <img
            src={kidsImg}
            alt="Kids"
            className="w-full h-60 object-cover"
          />
          <h5 className="absolute bottom-5 left-4 bg-white px-8 py-3 text-md font-bold">
            KIDS
          </h5>
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-3 gap-8 p-10">
        <div className="relative">
          <img
            src="src/assets/Categories/men.jpg"
            className="w-full h-120 object-cover"
          />
          <h5 className="absolute bottom-5 left-5 bg-white px-10 py-2 font-bold">
            MEN
          </h5>
        </div>

        <div className="relative">
          <img
            src="src/assets/Categories/women.jpg"
            className="w-full h-120 object-cover"
          />
          <h5 className="absolute bottom-5 left-5 bg-white px-10 py-2 font-bold">
            WOMEN
          </h5>
        </div>

        <div className="grid grid-rows-2 gap-8">
          <div className="relative">
            <img
              src="src/assets/Categories/accessories.jpg"
              className="w-full h-55 object-cover"
            />
            <h5 className="absolute bottom-5 left-4 bg-white px-6 py-2 font-bold">
              ACCESSORIES
            </h5>
          </div>

          <div className="relative">
            <img
              src="src/assets/Categories/kids.jpg"
              className="w-full h-55 object-cover"
            />
            <h5 className="absolute bottom-5 left-4 bg-white px-6 py-2 font-bold">
              KIDS
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditorsPick;
