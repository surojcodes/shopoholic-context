import React, { createContext, useReducer } from 'react';
import shoppingListReducer from './shoppingListReducer';
import {
  ADD_ITEM,
  UPDATE_ITEM,
  SET_CURRENT,
  CLEAR_CURRENT,
  DELETE_ITEM,
  CLEAR_ITEMS,
  TOGGLE_BOUGHT,
  CLEAR_BOUGHT,
} from './shoppingListAction';

const initialState = {
  items: [],
  current: null,
};

export const ShoppingListContext = createContext(initialState);
export const ShoppingListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingListReducer, initialState);

  //add item to list
  const addItem = (formData) => {
    dispatch({
      type: ADD_ITEM,
      payload: { ...formData, bought: false },
    });
  };
  //set current
  const setCurrent = (id) => {
    dispatch({
      type: SET_CURRENT,
      payload: id,
    });
  };
  // CLEAR CURRENT
  const clearCurrent = (id) => {
    dispatch({
      type: CLEAR_CURRENT,
      payload: id,
    });
  };
  // update item
  const updateItem = (formData) => {
    dispatch({
      type: UPDATE_ITEM,
      payload: formData,
    });
  };
  // delete item
  const deleteItem = (id) => {
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    });
  };
  //CLEAR ITEMS
  const clearItems = () => {
    dispatch({
      type: CLEAR_ITEMS,
    });
  };
  //Toggle Bought
  const toggleBought = (id) => {
    dispatch({
      type: TOGGLE_BOUGHT,
      payload: id,
    });
  };
  //Clear Bought
  const clearBought = () => {
    dispatch({
      type: CLEAR_BOUGHT,
    });
  };
  return (
    <ShoppingListContext.Provider
      value={{
        items: state.items,
        current: state.current,
        addItem,
        updateItem,
        setCurrent,
        clearCurrent,
        deleteItem,
        clearItems,
        toggleBought,
        clearBought,
      }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};
