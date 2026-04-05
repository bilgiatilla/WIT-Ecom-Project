import { Route, Routes } from "react-router-dom"
import Footer from './Layouts/Footer'
import Header from "./Layouts/Header"
import PageContent from './Layouts/PageContent'
import HomePage from "./Pages/Homepage";
import ProductPage from './Pages/ProductPage';
import ShopPage from "./Pages/ShopPage";

function App() {
  return (
    <div className="font-[montserrat]">
      <Header />
      <PageContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </PageContent>
      <Footer/>
    </div>
  )
}

export default App
