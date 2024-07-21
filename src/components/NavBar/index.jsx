import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../context';

const NavBar = () => {

  const context = useContext(ShoppingCartContext)
  // Objeto para obtener links y llaves de contenido

  const openMenu = () => {
    const menu = document.querySelector('.menu')
    menu.classList.toggle('!flex')
  }
  const link_top = {
    "My Orders": "/my-orders",
    "My Account": "/my-account",
    "Sign In": "/singin"
  }
  const link_page = {
    "All": "/",
    "Clothes": "/clothes",
    "Electronics": "/electronics",
    "Furnitures": "/furnitures",
    "Toys": "/toys",
    "Others": "/others"
  }

  return (
    <nav className='flex flex-col justify-center px-10 py-5 shadow-md'>
      <div className='flex justify-between items-center py-4'>

        <h1 className='text-center text-md md:text-3xl font-bold'>Tienda Online</h1>
        <ul className='flex items-center gap-3 '>
          {
            // lista de objectos con el nombre de la pagina y el link
            Object.keys(link_top).map(element => (
              <li key={element} className="hidden md:flex hover:boder-solid hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out">
                <NavLink
                  to={link_top[element]}>
                  {element}
                </NavLink>
              </li>
            ))
          }
          <li className='flex items-center gap-2 cursor-pointer' onClick={() => context.openCheckoutSide()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 16 16"><path fill="#000055" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607L1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479l9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4a2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2" /></svg>
            {
              context.count
            }
          </li>
          <li className='flex md:hidden' onClick={() => openMenu()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000000" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" /></svg>
          </li>
        </ul>
      </div>



      <ul className='menu hidden fixed top-0 left-0 p-10 bg-yellow-100 w-full h-full z-50 flex-col md:static md:flex md:bg-transparent md:flex-row md:py-3 md:px-0 gap-5'>
        <div className='flex justify-end md:hidden' onClick={() => openMenu()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"><path fill="#000000" fill-rule="evenodd" d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94z" clip-rule="evenodd" /></svg>
        </div>
        {
          Object.keys(link_page).map(element => (
            <li key={element} className="hover:boder-solid hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out">
              <NavLink
                to={link_page[element]}>
                {element}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default NavBar