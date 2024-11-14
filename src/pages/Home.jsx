import Carousel from '../components/Carasol'
import HorizontalSlider from '../components/HoriSlider'
import Card from '../components/Card'
const Home = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Carousel />

      <HorizontalSlider />

      <div className='cardCont'>
        <div className='popular'>
          <p className='ml-8 mt-16 text-lg font-semibold'>Popular</p>
          <Card />
        </div>

        <div className='recommended'>
          <p className='ml-8 mt-16 text-lg font-semibold'>Recommended</p>
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Home
