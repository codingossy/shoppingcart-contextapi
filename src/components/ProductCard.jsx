import React, {useContext} from 'react'

import './ProductCard.css'
import Rating from './Rating'
import CartContext from '../context/Cart/CartContext'



import formatCurrency from 'format-currency'


const ProductCard = ( {product }) => {

  // cart context destructure

  const { addToCart } = useContext(CartContext)

  let opts = { format: "%s%v", symbol: "€" };


  return (
    <div className='productCard__wrapper'>
            <div>
                <img className='productCard__img' src={product.image} alt="" />
                <h4>{product.name}</h4>

                <div className='productCard__price'>
                <h5>{formatCurrency(`${product.price}`, opts)}</h5>

                    <div className='productCard__Rating'>
                            <Rating 
                                value={product.rating}
                                text={`${product.numReviews} reviews`}
                            />
                            
                    </div>

                </div>

                <button onClick={ () => addToCart(product) } className='productCard__button'>Add to Basket</button>
            </div>
    </div>
  )
}

export default ProductCard