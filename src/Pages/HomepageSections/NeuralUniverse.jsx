import neuImg from "../../assets/neural-cover.png";

function NeuralUniverse() {
  return <section className="text-center flex flex-col lg:flex-row w-fill lg:max-w-400">
    <div className="pt-20 px-20 lg:order-2 lg:w-1/2 lg:text-start lg:pt-40 flex flex-col gap-5 lg:gap-10">
    <h5 className="text-[#BDBDBD] font-bold lg:text-lg">SUMMER 2020</h5>
    <h2 className="text-4xl font-bold lg:text-6xl">Part of the Neural Universe</h2>
    <h4 className="text-[#BDBDBD] lg:text-2xl font-bold">We know how large objects will act, but things on a small scale.</h4>
    <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:justify-start">
    <button className="bg-[#23A6F0] border border-[#23A6F0] lg:bg-[#2DC071] lg:border-[#2DC071] text-white rounded-sm w-fit justify-self-center px-8 py-3">BUY NOW</button>{" "}
    <button className="border text-[#23A6F0] lg:text-[#2DC071] rounded-sm w-fit justify-self-center px-8 py-3">Learn More</button>
    </div>
    </div>
    <div className="w-full lg:order-1 lg:w-1/2">
      <img src={neuImg} alt="neural" className="w-full"/>
    </div>
  </section>
}

export default NeuralUniverse