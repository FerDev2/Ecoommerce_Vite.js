import { useContext } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
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
      <div className='flex'>
        <input
          type="text"
          placeholder='Search Product'
          className='rounded-lg border border-black  p-4 my-4'
          onChange={(event) => context.setsearchByTitle(event.target.value)} />
      </div>

      <div className='flex flex-col justify-center items-center md:flex-row flex-wrap gap-10 mx-5 md:mx-20 my-28'>
        {
          renderView()
        }
      </div>

      <CheckoutSide />
    </Layout >
  )
}

export default Home