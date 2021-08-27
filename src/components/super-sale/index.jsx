import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookItem from '../book-item';
import './index.scss';
import SlickDot from '../../images/Slick.svg'

const SuperSale = ({handleAddToCart}) => {
  const [superSaleData, setSupperSaleData] = useState([]);

  useEffect(() => {
    const fetchSupperSaleData = async () => {
      const response = await axios.get('https://tiki.vn/api/personalish/v1/blocks/listings?limit=8&is_mweb=1&category=316&page=1');
      const supperSaleData = response.data.data;
      setSupperSaleData(supperSaleData);
    };
    fetchSupperSaleData();
  }, [])

  let settings = {
    customPaging: function(i) {
      return (
      <div className="slick-dot"></div>
        // <a>
        //   <img src={SlickDot} alt="slick-icon" />
        // </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots custom-slick",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="supper-sale">
      <h5 className="title">Siêu sale mở bán ngày 23/04</h5>
      <div className="supper-sale__list">
        <Slider {...settings}>
          {
            superSaleData.map(item => (
              <BookItem
                key={item.id} 
                item={item}
                handleAddToCart={handleAddToCart}
                positionHorizontal={true}
              />
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default SuperSale

