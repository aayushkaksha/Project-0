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
import SellersPage from './pages/SellersPage'
import UCard from './components/UCard'
import ProductDesc from './components/ProductDesc'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className='min-h-screen flex-row'>
          <main className='flex-grow'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Men' element={<Men />} />
              <Route path='/Women' element={<Women />} />
              <Route path='/About' element={<About />} />
              <Route path='/ContactPage' element={<ContactPage />} />
              <Route path='/Profile' element={<Profile />} />
              <Route path='/Message' element={<Message />} />
              <Route path='/Cart' element={<Cart />} />
              <Route path='/Shop' element={<Shop />} />
              <Route path='/Seller' element={<SellersPage />} />
              <Route path='/' element={<UCard />} />
              <Route path='/product/:id' element={<ProductDesc />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App
