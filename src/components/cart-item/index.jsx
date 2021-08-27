import React from 'react'
import './index.scss'
import numberWithDots from '../../utils'


const CartItem = ({item, addToCart, removeFromCart}) => {

  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img src={item.thumbnail_url} alt={item.name} />
      </div>
      <div className="cart-item__infor">
        <div style={{width: '200px', fontSize: '1.4rem'}}>{item.name}</div>
        <div className="cart-item__price">
          <span className="price">{numberWithDots(item.price)} ₫</span> 
          <span className="list-price">{numberWithDots(item.list_price)} ₫</span> 
        </div>
        <div className="cart-item__action">
          <button className="negative" onClick={() => removeFromCart(item.id)}>
            -
          </button>
          <div className="amount">{item.amount}</div>
          <button className="positive" onClick={() => addToCart(item)}>
            +
          </button>
        </div>
      </div>
      {/* <button onClick={() => removeFromCart(item.id)}>
        <span>remove</span>
      </button> */}
    </div>
  )
}


export default CartItem

