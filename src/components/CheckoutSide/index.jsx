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
        <aside className={`${context.isCheckoutSideOpen ? 'flex' : 'hidden'} product-detail z-1 flex-col bg-white fixed h-[calc(100vh-80px)] top-0 bottom-0 m-auto right-5 border-solid border border-black`}>
            <div className="flex flex-col items-center p-5 overflow-y-scroll">
                <div className='flex justify-end w-full' onClick={() => closeCheckout()}>
                    <h2>My Order</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='flex flex-col gap-2 '>
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

            <div>
                ${totalPrice(context.productCartShow)}
            </div>
            <Link to='/my-orders/last'>
                <button onClick={() => handleCheckout()}>Checkout</button>
            </Link>

        </aside>
    )
}

export default CheckoutSide;