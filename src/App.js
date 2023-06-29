import "./styles/App.css";
import MainFooter from "./components/mainFooter";
import MainHeader from "./components/mainHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageComponent from "./components/HomePageComponent";
import ProductsComponent from "./components/ProductsComponent";
import AboutUSComponent from "./components/AboutUsComponent";
import ServicesComponent from "./components/ServicesComponent";
import PartnersComponent from "./components/PartnersComponent";
import FeedbackComponent from "./components/FeedbackComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="/about" element={<AboutUSComponent />} />
          <Route path="/products" element={<ProductsComponent />} />
          <Route path="/services" element={<ServicesComponent />} />
          <Route path="/partners" element={<PartnersComponent />} />
          <Route path="/feedback" element={<FeedbackComponent />} />
        </Routes>
        <MainFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;

