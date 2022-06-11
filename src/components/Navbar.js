import React, {useContext} from 'react'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import './Navbar.css'

import CartContext from '../context/Cart/CartContext'

const Navbar = () => {

    const {cartItems, showHideCart } = useContext(CartContext)


  return (
    <nav className=''>
        <div className="nav__left">Store</div>

        <div className="nav__middle">
            <div className='input__wrapper'>
                <input type="text" />
                <FaSearch />
            </div>
        </div>

        <div className="nav__right">

             <div className="cart__icon">

                 <FaShoppingCart 
                    className=''
                    aria-hidden='true'
                    onClick={showHideCart}
                 />
                 
                 { cartItems.length > 0 && <div className='item__count'>
                   <span>{cartItems.length}</span>
                   </div>}
             </div>
        </div>
    </nav>
  )
}

export default Navbar