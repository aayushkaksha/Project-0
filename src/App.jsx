<<<<<<< HEAD
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Message from "./pages/Message";
import SellersPage from "./pages/SellersPage";
=======
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/Women'
import About from './pages/About'
import ContactPage from './pages/ContactPage'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Message from './pages/Message'
import NavBar from './components/NavBar'
import Shop from './pages/Shop'
>>>>>>> 12edabf934bafd21386601e21e47f31e3822d196

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className='flex-row'>
          <Routes>
<<<<<<< HEAD
            <Route path="/" element={<Home />} />
            <Route path="/Men" element={<Men />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/About" element={<About />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Message" element={<Message />} />
            <Route path="/Seller" element={<SellersPage />} />
=======
            <Route path='/' element={<Home />} />
            <Route path='/Men' element={<Men />} />
            <Route path='/Women' element={<Women />} />
            <Route path='/About' element={<About />} />
            <Route path='/ContactPage' element={<ContactPage />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Message' element={<Message />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Shop' element={<Shop />} />
>>>>>>> 12edabf934bafd21386601e21e47f31e3822d196
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
