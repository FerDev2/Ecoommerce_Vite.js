import { useRoutes, BrowserRouter } from 'react-router-dom';

import Home from '../Home';
import MyAccount from '../Myaccount';
import MyOrder from '../MyOrder';
import NotFound from '../NotFound';
import Singin from '../Singin';
import MyOrders from '../MyOrders';
import SingleProduct from '../Single-Product';
import NavBar from '../../components/NavBar/'

import { ShoppingCartProvider } from '../../context';


import './App.css'

const AppRoutes = () => {
  const routes = [
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/single-product', element: <SingleProduct /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/singin', element: <Singin /> },
    { path: '*', element: <NotFound /> }
  ]

  return useRoutes(routes)

}

function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />

      </BrowserRouter>
    </ShoppingCartProvider>

  )
}

export default App
