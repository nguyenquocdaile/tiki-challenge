import React, {useState} from 'react'
import './App.scss';
import Home from './components/Home';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Cart from './components/Cart';

function App() {
  const [value, setValue] = useState(0);
  const [cartItems, setCartItems] = useState([
    {
      id: '',
      amount: 0
    }
  ]);

  console.log('cartItems', cartItems);

  const handleAddToCart = (clickedItem) => {
    console.log('handle Add To Cart');
    setCartItems(prev => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.order_count + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.order_count - 1 }];
        } else {
          return [...ack, item];
        }
      }, [])
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="App">
      <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs"
        >
          <Tab icon={<HomeOutlinedIcon />} label="Trang chủ" />
          <Tab icon={<ShoppingCartOutlinedIcon />} label="Giỏ hàng" />
      </Tabs>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <div className="home-tab" value={value} index={0}>
          <Home handleAddToCart={handleAddToCart}/>
        </div>
        <div value={value} index={1}>      
          <Cart 
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </div>
      </SwipeableViews>
    </div>
  );
}

export default App;
