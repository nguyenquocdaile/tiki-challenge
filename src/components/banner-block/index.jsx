import React, {useState, useEffect} from 'react'
import axios from 'axios'


const  BannerBlock = ({imageURL, imageTitle}) => {
  const [bannerData, setBannerData] = useState('');

  useEffect(() => {
    const fetchBannerData = async () => {
      const response = await axios.get('https://tiki.vn/api/v2/widgets/banners_home');
      const bannerData = response.data.row1;
      setBannerData(bannerData);
    };
    fetchBannerData();
  }, [])
  return (
    <div>
      <img src={bannerData[0]?.mobile_url} alt={bannerData[0]?.title} />
    </div>
  )
}

export default BannerBlock

