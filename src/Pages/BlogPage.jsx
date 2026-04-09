import { AlarmClock, ChartArea } from "lucide-react";
import featuredImg1 from "../assets/Featured/featuredproducts1.png";
import featuredImg2 from "../assets/Featured/featuredproducts2.png";
import featuredImg3 from "../assets/Featured/featuredproducts3.png";
import featuredImg4 from "../assets/Featured/featuredproducts4.png";
import featuredImg5 from "../assets/Featured/featuredproducts5.png";
import featuredImg6 from "../assets/Featured/featuredproducts6.png";

function BlogPage() {
    const posts = [
        { id: 1, image: featuredImg1 },
        { id: 2, image: featuredImg2 },
        { id: 3, image: featuredImg3 },
        { id: 4, image: featuredImg4 },
        { id: 5, image: featuredImg5 },
        { id: 6, image: featuredImg6 },
      ];
  return (
  <section>
    <div className="flex flex-col lg:flex-row lg:justify-center gap-6 flex-wrap">
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
              <AlarmClock size={15} className="text-[#23A6F0]" />
              <span> 22 April 2021</span>
            </div>
            <div className="flex flex-row gap-2">
              <ChartArea size={15} className="text-[#23856D]" />
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
  )
}
export default BlogPage;
