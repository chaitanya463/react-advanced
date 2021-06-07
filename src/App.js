import {useEffect} from 'react';
import {useSelector} from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {

  const isCartVisible = useSelector((state) => state.ui.cartIsVisible);
  // const fetchItems = async () => {
  //   try {
  //     const result = await fetch('https://react-http-dd09a-default-rtdb.firebaseio.com/Products.json');

  //     if (!result.ok) {
  //       throw new Error("Something went wrong!");
  //     }
  //     const data = await result.json();
  //     const transformedData = []
  //     for (let i in data) {
  //       transformedData.push({
  //         title: data[i].title,
  //         price: data[i].price,
  //         description: data[i].description
  //       })
  //     }
  //   } catch (error) {

  //   }
  // }

  // useEffect(() => {
  //   fetchItems();
  // }, []);


  return (
    <Layout>
      {isCartVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
