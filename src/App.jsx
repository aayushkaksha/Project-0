import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactPage from "./pages/contactPage";
import Men from "./pages/Men";
import Women from "./pages/Women";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

const App = () => {
  return (
    <div>


      {/* <About /> */}
      <BrowserRouter>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/Men" element={<Men />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/About" element={<About />} />
          </Routes>

          <Footer />
      </BrowserRouter >
      </div>

      );
};

      export default App;
