import Sidebar from '../components/Sidebar'
import CardiB from '../components/CardiB'
import Card from '../components/Card'

import Shopheader from '../components/Shopheader'

const Shop = () => {
  return (
    <div>
      <Sidebar />
      <div className='lg:ml-[320px]'>
        <Shopheader />
        <CardiB />
      </div>
    </div>
  )
}

export default Shop
