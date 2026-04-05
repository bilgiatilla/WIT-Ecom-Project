import BestsellerProducts from "./HomepageSections/BestsellerProducts";
import EditorsPick from "./HomepageSections/EditorsPick";
import Featured from "./HomepageSections/Featured";
import MainSlider from "./HomepageSections/MainSlider";
import NeuralUniverse from "./HomepageSections/NeuralUniverse";
import VitaClassic from "./HomepageSections/VitaClassic";

function HomePage() {
  return <div>
      <MainSlider />
      <EditorsPick />
      <BestsellerProducts />
      <VitaClassic />
      <NeuralUniverse />
      <Featured />
      </div>;
}

export default HomePage;