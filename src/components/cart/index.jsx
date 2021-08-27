import React from 'react'
import CartItem from '../cart-item';
import Header from '../header';
import './index.scss'

const Cart = ({cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items) =>items.reduce((ack, item) => ack + item.amount * item.price, 0);
  return (
    <>
      <Header isBackroundOrange={true}/>
      <div className="cart">
        <div className="cart-header">
          Giỏ hàng
        </div>
        <p className="detail-text">Chi tiết ơn hàng</p>
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
        <div className="prices">
          <div className="prices__item">
            <span>Tạm tính</span>
            <span style={{fontWeight: '700'}}>100.000 đ</span>
          </div>
          <div className="prices__item">
            <span>Phí vận chuyển</span>
            <span style={{fontWeight: '700'}}>15.000 đ</span>
          </div>
          <div className="prices__item">
            <span>Tổng cộng</span>
            <span style={{fontWeight: '700'}}>115.000 đ</span>
          </div>
        </div>
        <div className="price-pay">
          <div className="prices__item">
            <span>Tổng cộng</span>
            <span style={{fontWeight: '700'}}>115.000 đ</span>
          </div>
          <button className="pay-button">Thanh toán</button>
        </div>
      </div>
    </>
  )
} 

export default Cart

