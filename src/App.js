import React, {useState} from 'react'
import './App.scss';
import Home from './components/Home';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Cart from './components/cart';
import TabPanel from './components/tab-pannel';

function App() {
  const [value, setValue] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (clickedItem) => {
    setCartItems(prev => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
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
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [])
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
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

      <TabPanel className="home-tab" value={value} index={0}>
        <Home handleAddToCart={handleAddToCart}/>
      </TabPanel>

      <TabPanel value={value} index={1}>      
        <Cart 
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </TabPanel>

    </div>
  );
}

export default App;
