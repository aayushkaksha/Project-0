import Carousel from '../components/Carasol'
import HorizontalSlider from '../components/HoriSlider'
import UCard from '../components/UCard'
const Home = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Carousel />

      <HorizontalSlider />

      <div className='cardCont'>
        <div className='Products'>
          <p className='ml-6 mt-12 text-lg font-semibold'>Products</p>
          <UCard />
        </div>
      </div>
    </div>
  )
}

export default Home
