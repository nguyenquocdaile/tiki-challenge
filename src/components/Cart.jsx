import React from 'react'
import CartItem from './cart-item';

const Cart = ({cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items) =>
  items.reduce((ack, item) => ack + item.amount * item.price, 0);
  return (
    <div className="cart">
      <div className="cart-header">
        Giỏ hàng
      </div>
      <p>Chi tiết đơn hàng</p>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      <div className="cart-body">
          {
            cartItems.map(item =>  
              <CartItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart} 
              />
            )
          }
      </div>
      <div>
        <span>Tạm tính</span>
      </div>
      <div>
        <span>Phí vận chuyển</span>
      </div>
      <div>
        <span>Tổng cộng</span>
      </div>
    </div>
  )
}

export default Cart

