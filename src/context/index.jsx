import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  const [isCheckoutSideOpen, setIsCheckoutSideOpen] = useState(false)
  const openCheckoutSide = () => setIsCheckoutSideOpen(true)
  const closeCheckoutSide = () => setIsCheckoutSideOpen(false)

  const [productToShow, setProductToShow] = useState({})
  //sHOP TO CART
  const [productCartShow, setProductCartShow] = useState([])

  //SHOP TO ORDER
  const [order, setOrder] = useState([])
  // console.log('COUNT:', count)

  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)

  const [searchByTitle, setsearchByTitle] = useState(null)

  console.log('SEARCH BY TITLE', searchByTitle)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
  }, [items, searchByTitle])

  console.log('FILTERED ITEMS', filteredItems)

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      openCheckoutSide,
      closeCheckoutSide,
      isCheckoutSideOpen,
      productToShow,
      setProductToShow,
      productCartShow,
      setProductCartShow,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setsearchByTitle,
      filteredItems
    }}>

      {children}
    </ShoppingCartContext.Provider>
  )
}
