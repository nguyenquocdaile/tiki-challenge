import React, { useState, useEffect} from 'react'
import axios from 'axios'
import BookItem from '../book-item'
import './index.scss';
import UNIQUESALEBANNER from '../../images/unique-sale-banner.png'

const UniqueSale = ({handleAddToCart}) => {
  const [uniqueSaleData, setUniqueSaleData] = useState([]);

  useEffect(() => {
    const fetchUniqueSaleData = async () => {
      const response = await axios.get('https://tiki.vn/api/personalish/v1/blocks/listings?limit=8&is_mweb=1&category=8322&page=1');
      const uniqueSaleData = response.data.data;
      setUniqueSaleData(uniqueSaleData);
    };

    fetchUniqueSaleData();
  }, [])

  return (
    <> 
      <div className="unique-sale__banner">
        <img src={UNIQUESALEBANNER} alt="unique-sale-banner" />
      </div>
      <div className="unique-sale">
        {
          uniqueSaleData.slice(4).map(item => (
            <BookItem
              key={item.id} 
              item={item}
              handleAddToCart={handleAddToCart}
            />
          ))
        }
      </div>
    </>
  )
}

export default UniqueSale

