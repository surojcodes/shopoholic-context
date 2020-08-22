import React from 'react';

const Home = () => {
  return (
    <div className='container mt-5'>
      <div className='row justify-content-between align-items-center'>
        <div className='col-md-4 mb-5'>
          <h2 className='mb-3'> Add Shopping Item</h2>
          <form>
            <div className='fomr-group'>
              <label htmlFor='item'>Item Name</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter item Name'
              />
              <label htmlFor='item'>Item Quantity</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter item Quantity'
              />
            </div>
            <div className='mt-3'>
              <input
                type='submit'
                value='Add To List'
                className='btn btn-primary'
              />
            </div>
          </form>
        </div>
        <div className='col-md-7 mb-5'>
          <h2 className='mb-3'> Shopping List</h2>
          <table class='table'>
            <thead class='bg-primary'>
              <tr className='text-white'>
                <th scope='col'>#</th>
                <th scope='col'>First</th>
                <th scope='col'>Last</th>
                <th scope='col'>Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
