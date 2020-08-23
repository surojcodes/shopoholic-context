import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/shoppingListState';
import { toast } from 'react-toastify';

const ShoppingList = () => {
  const {
    items,
    setCurrent,
    deleteItem,
    clearItems,
    toggleBought,
    clearBought,
    clearCurrent,
  } = useContext(ShoppingListContext);
  const updateForm = (e) => {
    setCurrent(e.target.id);
  };

  return (
    <div className='col-md-7 mb-5 p-4'>
      <div className='mb-5'>
        <h2> Shopping List</h2>
        <button
          className='btn btn-sm btn-outline-dark d-inline float-right ml-3'
          onClick={() => clearBought()}
        >
          Clear Bought
        </button>
        <button
          className='btn btn-sm btn-primary d-inline float-right'
          onClick={() => clearItems()}
        >
          Clear List
        </button>
      </div>
      <table className='table'>
        <thead className='bg-primary'>
          <tr className='text-white'>
            <th scope='col'>Item</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Status</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td className='text-center' colSpan='4'>
                No items in list!
              </td>
            </tr>
          ) : (
            items.map((item) => (
              <tr key={item.id} className={item.bought ? 'bg-light' : ''}>
                <td>{item.itemName}</td>
                <td>{item.quantity}</td>
                <td>
                  {' '}
                  <div className='custom-control custom-switch'>
                    <input
                      type='checkbox'
                      className='custom-control-input'
                      id={`customSwitch${item.id}`}
                    />
                    <label
                      className='custom-control-label'
                      htmlFor={`customSwitch${item.id}`}
                      onClick={() => {
                        toggleBought(item.id);
                        clearCurrent();
                      }}
                    ></label>
                    {item.bought ? (
                      <small className='text-success'>
                        <strong>Bought</strong>
                      </small>
                    ) : (
                      <small className='text-danger'>
                        <strong>Not Bought</strong>
                      </small>
                    )}
                  </div>
                </td>
                <td>
                  {item.bought ? (
                    ''
                  ) : (
                    <button
                      className='btn btn-sm btn-outline-dark mr-2'
                      id={item.id}
                      onClick={updateForm}
                    >
                      Edit
                    </button>
                  )}

                  <button
                    className='btn btn-sm btn-outline-primary'
                    onClick={() => {
                      deleteItem(item.id);
                      toast.info('Item Deleted!');
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingList;
