import image from './custum.png'

const Customers = () => {
  return (
    <div className="w-[1200px] mx-auto text-center mt-5">
        <h4 className="text-4xl font-semibold text-[#1e2967] mb-8">Khách Hàng Và Đối Tác</h4>
        <div>
            <img src={image} alt="" className='w-full' />
        </div>
    </div>
  )
}

export default Customers