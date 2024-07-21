import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from "../../context";
import OrderCard from '../OrderCard';
import './styles.css'
import { totalPrice } from '../../utils';

const CheckoutSide = () => {
    const context = useContext(ShoppingCartContext)

    const closeCheckout = () => {
        context.closeCheckoutSide()
        context.closeProductDetail()
    }

    const handleDelete = (id) => {
        const filterProduct = context.productCartShow.filter(product => product.id != id)
        context.setProductCartShow(filterProduct)
    }
    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: context.productCartShow,
            totalProducts: context.productCartShow.lenght,
            totalPrice: totalPrice(context.productCartShow)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setProductCartShow([])
    }

    // console.log(context.productToShow)
    return (
        <aside className={`${context.isCheckoutSideOpen ? 'flex' : 'hidden'} w-[300px] md:w-[500px] z-1 flex-col bg-white fixed h-[calc(100vh-80px)] px-5 top-0 bottom-0 m-auto right-5 border-solid border border-gray rounded-md`}>
            <div className="flex flex-col items-center p-5 overflow-y-scroll">
                <div className='flex justify-between items-center w-full pb-5'>
                    <h2 className='text-2xl font-bold'>My Order</h2>
                    <div className='cursor-pointer' onClick={() => closeCheckout()}>
                        <svg className='cursor-pointer w-7 h-7' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div className='flex flex-col gap-5 '>
                    {
                        context.productCartShow.map(product => (
                            <OrderCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                imageUrl={product.image}
                                price={product.price}
                                handleDelete={handleDelete} />
                        ))
                    }
                </div>
            </div>

            <div className='text-xl font-bold'>
                Precio Total: S/ {totalPrice(context.productCartShow)}
            </div>
            <Link to='/my-orders/last'>
                <button className='flex items-center gap-2 pt-5' onClick={() => handleCheckout()}>Go to Checkout <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-4 4l4-4m-4-4l4 4" /></svg></button>
            </Link>

        </aside>
    )
}

export default CheckoutSide;