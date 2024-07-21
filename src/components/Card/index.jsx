import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { Link } from 'react-router-dom'

const Card = (data) => {

  const transition_hover = 'hover:[&_img]:scale-125 scale-100 hover:[&_img]:transition-all hover:[&_img]:duration-500 hover:[&_img]:ease-in-out [&_img]:transition-all [&_img]:duration-500 [&_img]:ease-in-out'

  const context = useContext(ShoppingCartContext)

  const productShow = (productData) => {
    context.setProductToShow(productData)
    context.openProductDetail()
  }

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
        <div className="font-bold text-center bg-green-500  rounded-md p-3 cursor-pointer ">
          In cart
        </div>
      )
    } else {
      return (
        <button
          className="font-bold text-center bg-green-100  rounded-md p-3 cursor-pointer transition-all duration-300 ease-in-out hover:bg-green-500 hover:transition-all hover:duration-300 hover:ease-in-out"
          onClick={() => addProductsToCart(event, data.data)}>
          Add cart
        </button>
      )
    }
  }

  return (
    <div className={` ${transition_hover} overflow-hidden  w-[300px] h-full flex flex-col flex-wrap justify-between items-center border-solid border-2 border-gray rounded-xl shadow-md py-5 px-5`}
      onClick={() => productShow(data.data)}>
      <div className="mx-auto px-4 py-2 font-bold my-5 bg-yellow-100 rounded-full ">{data.data.category}</div>
      <Link to='/single-product' state={data.data}>
        <figure className="relative h-[400px] w-[200px] flex items-center justify-center">
          <img src={data.data.image} alt="" className="w-full h-1/2 object-contain" />
        </figure>
      </Link>
      <p className="relative flex flex-col justify-center items-center px-1 pt-2 text-12">
        {renderIcon(data.data.id)}
        <span className="text-center mt-5">{data.data.title}</span>
        <span>S/ {data.data.price}</span>
      </p>
    </div>
  )
}

export default Card;