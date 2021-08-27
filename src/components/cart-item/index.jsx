import React from 'react'


const CartItem = ({item, addToCart, removeFromCart}) => {

  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img src="" alt="" />
      </div>
      <div className="cart-item__info">
        <p>product name</p>
        <div><span>price</span> <span>price discount</span> </div>
        <div className="cart-item__action">
          <button onClick={() => removeFromCart(item.id)}>
            -
          </button>
          <div>quantity</div>
          <button onClick={() => addToCart(item.id)}>
            +
          </button>
        </div>
      </div>
      <button onClick={() => removeFromCart(item.id)}>
        <span>remove</span>
      </button>
    </div>
  )
}


export default CartItem

