import React, {useState, useEffect} from 'react'
import BannerBlock from './banner-block';
import UniqueSale from './unique-sale';
import SuperSale from './super-sale';
import FlashSale from './flash-sale';
import Header from './header';

const  Home =({handleAddToCart}) => {
  
  return (
    <>
      <Header />
      <BannerBlock />
      <UniqueSale handleAddToCart={handleAddToCart}/>
      <SuperSale />
      <FlashSale />
    </>
  )
}


export default Home

