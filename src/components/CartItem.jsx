import React, {useContext} from 'react'
import './CartItem.css'
import CartContext from '../context/Cart/CartContext'
import formatCurrency from "format-currency";




const CartItem = ( {item }) => {

    const {removeItem} = useContext(CartContext)
    let opts = { format: "%s%v", symbol: "€" };


  return (
     <li className='CartItem__item'>
      <img src={item.image} alt='' />
      <div>
        {item.name} {formatCurrency(`${item.price}`, opts)}
      </div>
      <button className='CartItem__button' onClick={() => removeItem(item._id)}>
        Remove item
      </button>
    </li>
  )
}

export default CartItem