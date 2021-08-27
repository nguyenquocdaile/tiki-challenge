import React, {useState, useEffect} from 'react'
import axios from 'axios'
import FLASHSALEBANNER from '../../images/flash-sale-banner.png'
import './index.scss'
import BookItem from '../book-item'

function FlashSale(props) {
  const [flashSaleData, setFlashSaleData] = useState([]);

  useEffect(() => {
    const fetchFlashSaleData = async () => {
      const response = await axios.get('https://tiki.vn/api/personalish/v1/blocks/listings?limit=8&is_mweb=1&category=8322&page=1');
      const flashSaleData = response.data.data;
      setFlashSaleData(flashSaleData);
    };

    fetchFlashSaleData();
  }, [])

  return (
    <div className="flash-sale">
       <div className="flash-sale__banner">
        <img src={FLASHSALEBANNER} alt="flash-sale-banner" />
      </div>
      <ul className="time-list">
        <li className="time-item">10:00</li>
        <li className="time-item">15:00</li>
        <li className="time-item">18:00</li>
        <li className="time-item">20:00</li>
      </ul>
      <div className="flash-sale__list">
        {
          flashSaleData.slice(4).map(item => (
            <BookItem
              key={item.id}
              thumbnailURL={item.thumbnail_url} 
              name={item.name}
              listPrice={item.list_price}
              discount={item.discount}
              price={item.price}
            />
          ))
        }
      </div>
    </div>
  )
}

export default FlashSale

