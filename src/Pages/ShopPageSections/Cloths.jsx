function Cloths() {
  const posts = [
    { id: 1, image: "src/assets/ShopCards/card-cover-5.jpg" },
    { id: 2, image: "src/assets/ShopCards/card-cover-6.jpg" },
    { id: 3, image: "src/assets/ShopCards/card-cover-7.jpg" },
    { id: 4, image: "src/assets/ShopCards/card-cover-8.jpg" },
    { id: 5, image: "src/assets/ShopCards/card-cover-9.jpg" },
  ];
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center gap-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-[#FAFAFA] p-10">
          <div className="relative w-full aspect-square">
            <img src={post.image} className="h-full lg:w-100 object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 gap-6">
              <h3 className="text-lg font-bold">CLOTHS</h3>
              <p className="text-sm font-bold">5 Items</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cloths;
