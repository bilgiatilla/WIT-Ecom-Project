import { AlarmClock, ChartArea } from "lucide-react";

function Featured() {
  const posts = [
    { id: 1, image: "src/assets/Featured/featuredproducts1.png" },
    { id: 2, image: "src/assets/Featured/featuredproducts2.png" },
    { id: 3, image: "src/assets/Featured/featuredproducts3.png" },
  ];
  return (
    <div>
      <section>
        <div className="flex flex-col text-center p-15 gap-3">
          <h6 className="text-[#23A6F0] font-bold lg:text-xl">Practice Advice</h6>
          <h2 className="text-4xl lg:text-6xl font-bold">Featured Products</h2>
          <p className="text-[#737373] lg:text-xl">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row lg:justify-center gap-6 ">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow p-4">
              <div className="relative">
              <img src={post.image} className="w-full lg:w-100 mb-3" />

              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded absolute top-5 left-5">
                NEW
              </span>
              </div>
              <div className="flex gap-2 text-xs text-gray-400 mt-2">
                <span className="text-blue-500">Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>

              <h3 className="font-bold mt-2">
                Loudest à la Madison #1 (L'integral)
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                We focus on ergonomics and meeting you where you work...
              </p>

              <div className="flex justify-between text-xs mt-3 text-gray-500">
                <div className="flex flex-row gap-2">
                <AlarmClock size={15} className="text-[#23A6F0]"/>
                <span> 22 April 2021</span>
                </div>
                <div className="flex flex-row gap-2">
                <ChartArea size={15} className="text-[#23856D]"/>
                <span>10 comments</span>
                </div>
              </div>

              <a className="text-sm font-semibold mt-3 inline-block">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Featured;
