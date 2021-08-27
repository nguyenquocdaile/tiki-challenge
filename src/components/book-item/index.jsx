import React from 'react'
import TIKINOW from '../../images/TikiNOW.png';
import BOOKITEM from '../../images/book-item.png'
import REVIEW from '../../images/Review.png'
import './index.scss'
import numberWithDots from '../../utils';

function BookItem({item, positionHorizontal, handleAddToCart}) {
  return (
    <div 
      className={`book-item ${positionHorizontal ? 'horizontal': ''}`}
      onClick={() => handleAddToCart(item)}
    >
      <div className="book-item__image--wrapper" >
        <img className="book-item__image" src={item.thumbnail_url} alt={item.name} />
      </div>
      <div className="book-item__info">
        <img className="image-tiki-now" src={TIKINOW} alt="tiki now" />
        <p className="book-item__name">{item.name} </p>
        <img className="image-review" src={REVIEW} alt="review" />
        <div className="price-discount">
          <div className="price-discount__price-discount-line">
            <div className="price-discount__price">{numberWithDots(item.price)} ₫</div>
            <div className="price-discount__discount">-{Math.round((item.discount/item.list_price)*100)}%</div>
          </div>
          <div className="price-discount__crossed-out-price">{numberWithDots(item.list_price)} ₫</div>
        </div>
      </div>
    </div>
  )
}

export default BookItem

