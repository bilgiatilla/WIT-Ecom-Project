import { Search, ShoppingCart, Menu } from "lucide-react";

function Header() {
  return <header>
    <div className="flex justify-between p-10">
    <h3 className="font-bold text-xl">Bandage</h3>
    <div className="flex gap-4 items-center">
    <Search size={20} />
    <ShoppingCart size={20} />
    <Menu size={20} />
    </div>
    </div>
    <div className="grid justify-center gap-2 pt-5 text-[#737373] text-lg font-semibold">
    <a href="">Home</a>
    <a href="">Product</a>
    <a href="">Pricing</a>
    <a href="">Contact</a>
    </div>
  </header>
  
}

export default Header