

function VitaClassic() {
  return (
     <div className="lg:flex lg:flex-row lg:h-150 lg:w-full">
    <section className="bg-[#23856D] h-100 lg:h-full pt-40 lg:w-1/2">
    <div className="text-center lg:text-left text-[#FFFFFF] px-15 lg:px-40 grid gap-5">
    <h4 className="lg:text-2xl">SUMMER 2020</h4>
    <h2 className="text-3xl lg:text-6xl font-bold">Vita Classic Product</h2>
    <h4 className="lg:text-2xl">We know how large objects will act, but things on a small scale.</h4>
    <div className="lg:flex lg:flex-row lg:gap-10">
    <h3 className="font-bold text-2xl lg:text-3xl">$16.48</h3>
    <button className="bg-[#2DC071] font-bold px-5 py-2 text-sm rounded-sm">ADD TO CART</button>
    </div>
    </div>
  </section>
  <section className="bg-[#23856D] lg:w-1/2 flex justify-center">
    <img src="src/assets/vita-cover.png" alt="cover" className="lg:w-auto lg:h-full lg:object-contain pt-20" />
  </section>
  </div>
  );
}

export default VitaClassic;
