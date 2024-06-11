import { useContext } from 'react';
import { ShoppingCartContext } from "../../context";
import './styles.css'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  // console.log(context.productToShow)
  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail z-1 flex-col bg-white fixed h-[calc(100vh-80px)] top-0 bottom-0 m-auto right-5 border-solid border border-black`}>
      <div className="flex flex-col items-center p-5">
        <div className='flex justify-end w-full' onClick={() => context.closeProductDetail()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>

        <div className='flex flex-col gap-2'>
          <figure className='w-full h-50 flex justify-center items-center p-10'>
            <img src={context.productToShow.image} alt="" className='w-fit h-fit' />
          </figure>

          <h4 className='text-center font-bold'>{context.productToShow.title}</h4>
          <p className='text-center font-bold text-xl'>S/ {context.productToShow.price}</p>
          <p className='text-sm text-justify'>{context.productToShow.description}</p>

        </div>

      </div>
    </aside>
  )
}

export default ProductDetail;