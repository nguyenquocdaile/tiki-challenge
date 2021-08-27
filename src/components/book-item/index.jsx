import React from 'react'
import TIKINOW from '../../images/TikiNOW.png';
import BOOKITEM from '../../images/book-item.png'
import REVIEW from '../../images/Review.png'
import './index.scss';

function BookItem({thumbnailURL, name, listPrice, price, discount, positionHorizontal, id, handleAddToCart}) {
  return (
    <div 
      className={`book-item ${positionHorizontal ? 'horizontal': ''}`}
      onClick={() => handleAddToCart(id)}
    >
      <div className="book-item__image--wrapper" >
        <img className="book-item__image" src={thumbnailURL} alt={name} />
      </div>
      <div className="book-item__info">
        <img className="image-tiki-now" src={TIKINOW} alt="tiki now" />
        <p className="book-item__name">{name} </p>
        <img className="image-review" src={REVIEW} alt="review" />
        <div className="price-discount">
          <div className="price-discount__price-discount-line">
            <div className="price-discount__price">{price} ₫</div>
            <div className="price-discount__discount">-{Math.round((discount/listPrice)*100)}%</div>
          </div>
          <div className="price-discount__crossed-out-price">{listPrice} ₫</div>
        </div>
      </div>
    </div>
  )
}

export default BookItem

