import Bestseller from "./HomepageSections/Bestseller";
import EditorsPick from "./HomepageSections/EditorsPick";
import Featured from "./HomepageSections/Featured";
import MainSlider from "./HomepageSections/MainSlider";
import NeuralUniverse from "./HomepageSections/NeuralUniverse";
import VitaClassic from "./HomepageSections/VitaClassic";

function HomePage() {
  return <div>
      <MainSlider />
      <EditorsPick />
      <Bestseller />
      <VitaClassic />
      <NeuralUniverse />
      <Featured />
      </div>;
}

export default HomePage;