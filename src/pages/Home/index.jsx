import { useContext } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'
import CheckoutSide from '../../components/CheckoutSide';
import { ShoppingCartContext } from '../../context'

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => {
            return <Card key={item.id} data={item} />
          })
        )
      } else {
        <div>No existen productos</div>
      }
    } else {
      return (
        context.items?.map(item => {

          return <Card key={item.id} data={item} />
        })
      )
    }
  }

  return (
    <Layout >
      <div>
        <h1>Lista de Produtos</h1>
      </div>
      <input
        type="text"
        placeholder='Buscar Producto'
        className='rounded-lg border border-black w-80 p-4 mb-4'
        onChange={(event) => context.setsearchByTitle(event.target.value)} />
      {
        renderView()
      }
      <ProductDetail />
      <CheckoutSide />
    </Layout >
  )
}

export default Home