import React, { useState, useContext, useEffect } from 'react';
import { ShoppingListContext } from '../context/shoppingListState';
import { v4 } from 'uuid';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const AddItem = () => {
  const { addItem, current, clearCurrent, updateItem } = useContext(
    ShoppingListContext
  );
  useEffect(() => {
    if (current) {
      setFormData(current);
    } else {
      setFormData({
        itemName: '',
        quantity: '',
      });
    }
  }, [current]);
  const [formData, setFormData] = useState({
    itemName: '',
    quantity: '',
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const clearForm = () => {
    setFormData({
      itemName: '',
      quantity: '',
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.itemName === '' || formData.quantity === '') {
      toast.error('Please enter all fields');
    } else {
      if (current === null) {
        addItem({ ...formData, id: v4() });
        toast.success('Item added to your shopping list!');
      } else {
        updateItem(formData);
        toast.info('Item updated!');
        clearCurrent();
      }
      clearForm();
    }
  };

  return (
    <div className='col-md-4 mb-5 p-4'>
      <h2 className='mb-3'>
        {' '}
        {current === null ? 'Add Shopping Item' : 'Update Shopping Item'}
      </h2>

      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='itemName'>Item Name</label>
          <input
            type='text'
            name='itemName'
            className='form-control'
            placeholder='Enter item Name'
            value={formData.itemName}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='quantity'>Item Quantity</label>
          <input
            type='text'
            name='quantity'
            className='form-control'
            placeholder='Enter item Quantity'
            value={formData.quantity}
            onChange={onChange}
          />
        </div>
        <div className='mt-3'>
          <input
            type='submit'
            value={current === null ? 'Add to List' : 'Update Item'}
            className='btn btn-primary'
          />
          {current === null ? (
            ''
          ) : (
            <button
              className='btn btn-outline-dark  ml-2'
              onClick={(e) => {
                e.preventDefault();
                clearForm();
                clearCurrent();
              }}
            >
              Back to Add
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddItem;
