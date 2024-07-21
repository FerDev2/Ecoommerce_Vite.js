import { useContext } from 'react';
import { ShoppingCartContext } from "../../context";


function singleProduct(data) {
    const context = useContext(ShoppingCartContext)
    const addProductsToCart = (event, productCart) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setProductCartShow([...context.productCartShow, productCart])
        context.openCheckoutSide()
        context.closeProductDetail()
    }
    const renderIcon = (id) => {
        const isInCart = context.productCartShow.filter(product => product.id === id).length > 0

        if (isInCart) {
            return (
                <svg className=" top-2 right-2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#059669" d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" /></svg>
            )
        } else {
            return (
                <button
                    className="font-bold text-center bg-green-100  top-0 bottom-0 right-0 left-10%  rounded-full w-8 h-8 cursor-pointer"
                    onClick={() => addProductsToCart(event, data.data)}>
                    +
                </button>
            )
        }
    }

    return (
        <section className={`${context.isProductDetailOpen ? 'flex' : 'hidden'}  flex-col `}>
            <div className="flex flex-row items-center justify-center mx-10 md:mx-56 py-48 gap-20">
                {/* <div className='flex justify-end w-full' onClick={() => context.closeProductDetail()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div> */}

                <figure className='w-1/2 h-full flex justify-center items-center'>
                    <img src={context.productToShow.image} alt="" className='w-fit h-60' />
                </figure>
                <div className='flex flex-col gap-5 w-1/2'>
                    <h4 className='text-start font-bold text-3xl'>{context.productToShow.title}</h4>
                    <p className='text-start font-bold text-xl'>S/ {context.productToShow.price}</p>
                    <p className='text-sm text-justify'>{context.productToShow.description}</p>
                </div>

            </div>
        </section>
    )
}

export default singleProduct