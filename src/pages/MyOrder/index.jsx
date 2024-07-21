import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import OrderCard from '../../components/OrderCard'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if (index === 'last') index = context.order?.length - 1

  return (
    <Layout>

      <div className='flex justify-start items-center gap-2 w-full px-10'>
        <Link to='/my-orders'>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="#000055" d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z" /></svg>
        </Link>
        <h2>My Orders</h2>
      </div>

      <div className='flex flex-col gap-10 w-full px-10 py-10'>
        {
          context.order?.[index]?.products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price} />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder