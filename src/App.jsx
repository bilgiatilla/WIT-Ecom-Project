import { Route, Routes } from "react-router-dom"
import Footer from './Layouts/Footer'
import Header from "./Layouts/Header"
import PageContent from './Layouts/PageContent'
import HomePage from "./Pages/Homepage";
import ProductPage from './Pages/ProductPage';
import ShopPage from "./Pages/ShopPage";
import ContactPage from "./Pages/Contact.Page";
import TeamPage from "./Pages/TeamPage";
import AboutPage from "./Pages/AboutPage";
import SignupPage from "./Pages/SignupPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Pages/LoginPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyToken } from "./store/thunks/clientThunks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);
  return (
    <div className="font-[montserrat]">
      <Header />
      <PageContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:gender/:categoryName/:categoryId" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/team" element={<TeamPage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <ToastContainer />
      </PageContent>
      <Footer/>
    </div>
  )
}

export default App
