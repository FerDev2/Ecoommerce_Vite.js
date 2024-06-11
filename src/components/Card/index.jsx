import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

const Card = (data) => {
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
        <svg className="absolute top-2 right-2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#059669" d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" /></svg>
      )
    } else {
      return (
        <button
          className=" text-center bg-green-100 absolute top-2 right-2 p-1 rounded-full w-8 h-8 cursor-pointer"
          onClick={() => addProductsToCart(event, data.data)}>
          +
        </button>
      )
    }

  }

  return (
    <div className="w-1/6 h-1/6 flex flex-col"
      onClick={() => productShow(data.data)}>
      <figure className="relative h-full w-full flex">
        <span className="absolute bottom-5 left-5 bg-white/80 px-5 py-1 rounded-full ">{data.data.category}</span>
        <img src={data.data.image} alt="" className="w-fit h-fit object-fit" />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between px-1 pt-2 text-xl">
        <span>{data.data.title}</span>
        <span>{data.data.price}</span>
      </p>
    </div>
  )
}

export default Card;