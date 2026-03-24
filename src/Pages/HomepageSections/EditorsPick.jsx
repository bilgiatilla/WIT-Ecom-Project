function EditorsPick() {
  return (
    <section className="pt-15 text-center justify-center">
      <div className="px-15">
      <h3 className="text-xl font-extrabold">EDITOR'S PICK</h3>
      <p className="text-sm pt-4">Problems trying to resolve the conflict between</p>
      </div>
      <div className="grid p-10 gap-8">
        <div className="relative">
          <img
            src="src\assets\men.jpg"
            alt="Men"
            className="w-full h-120 object-cover"
          />
          <h5 className="absolute bottom-5 left-5 bg-white px-15 py-3 text-md font-bold">MEN</h5>
        </div>

        <div className="relative">
          <img
            src="src\assets\women.jpg"
            alt="Women"
            className="w-full h-120 object-cover"
          />
          <button className="absolute bottom-5 left-10 bg-white px-8 py-3 text-md font-bold">WOMEN</button>
        </div>

        <div className="relative">
          <img
            src="src\assets\accessories.jpg"
            alt="Accessories"
            className="w-full h-60 object-cover"
          />
          <button className="absolute bottom-5 left-4 bg-white px-8 py-3 text-md font-bold">ACCESSORIES</button>
        </div>

        <div className="relative">
          <img src="src\assets\kids.jpg"
               alt="Kids"
               className="w-full h-60 object-cover" />
          <button className="absolute bottom-5 left-4 bg-white px-8 py-3 text-md font-bold">KIDS</button>
        </div>
      </div>
    </section>
  );
}

export default EditorsPick;
