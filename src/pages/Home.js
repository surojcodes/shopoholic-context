import React from 'react';

import ItemForm from '../components/ItemForm';
import ShoppingList from '../components/ShoppingList';

//provider
import { ShoppingListProvider } from '../context/shoppingListState';

const Home = () => {
  return (
    <div className='container mt-5'>
      <div className='row justify-content-between align-items-center'>
        <ShoppingListProvider>
          <ItemForm />
          <ShoppingList />
        </ShoppingListProvider>
      </div>
    </div>
  );
};

export default Home;
