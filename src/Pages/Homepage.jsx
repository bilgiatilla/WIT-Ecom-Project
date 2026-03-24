import Bestseller from "./HomepageSections/Bestseller";
import EditorsPick from "./HomepageSections/EditorsPick";
import Featured from "./HomepageSections/Featured";
import MainSlider from "./HomepageSections/MainSlider";
import NeutrelUniverse from "./HomepageSections/NeutrelUniverse";
import VitaClassic from "./HomepageSections/VitaClassic";

function HomePage() {
  return <div>
      <MainSlider />
      <EditorsPick />
      <Bestseller />
      <VitaClassic />
      <NeutrelUniverse />
      <Featured />
      </div>;
}

export default HomePage;