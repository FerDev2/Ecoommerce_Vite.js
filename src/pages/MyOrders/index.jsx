import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../context'
import Layout from '../../components/Layout'
import OrderCards from '../../components/OrderCards'

function MyOrders() {
    const context = useContext(ShoppingCartContext)


    return (
        <Layout>
            <div>
                <Link to='/my-order'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="#000055" d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z" /></svg>
                </Link>
                <h2>My Orders list</h2>
            </div>

            {
                context.order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>

                        <OrderCards
                            totalPrice={order.total}
                            totalProducts={order.totalProducts} ></OrderCards>
                    </Link>
                ))
            }
        </Layout>
    )
}

export default MyOrders