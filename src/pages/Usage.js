import React from 'react';

const Usage = () => {
  return (
    <div className='' style={{ margin: '2em auto 8em auto' }}>
      <div className='container text-center'>
        <h1 className='display-5'>How to use Shopoholic ?</h1>
        <hr style={{ width: '20%' }} />
        <p className='mt-4 lead'>
          Shopoholic is an application that helps you make a list of items you
          want to purchase in your next supermarket visit.
        </p>
        <div
          className='list-group mt-5'
          style={{ width: '70%', margin: 'auto' }}
        >
          <div className='list-group-item list-group-item-action flex-column align-items-start active'>
            <p className='mb-1'>
              <span style={{ fontSize: '1.8em' }}>
                {' '}
                <strong>1.</strong>{' '}
              </span>{' '}
              Add item name and the amount of the item you want to purchase from
              the form at the left side in the home page. <br />
              You can view the items added on the right side of the same page
            </p>
          </div>
          <div className='list-group-item list-group-item-action flex-column align-items-start'>
            <p className='mb-1'>
              <span style={{ fontSize: '1.8em' }}>
                {' '}
                <strong>2.</strong>{' '}
              </span>{' '}
              Update or delete the item name or quantity if you need form the
              table by clicking appropriate button.
            </p>
          </div>
          <div className='list-group-item list-group-item-action flex-column align-items-start active'>
            <p className='mb-1'>
              <span style={{ fontSize: '1.8em' }}>
                {' '}
                <strong>3.</strong>{' '}
              </span>{' '}
              With your shopping list ready, go to supermarket, look at the list
              and pick items in the market. After picking up, check the item as
              biught in the table or mark it unbought if you change your mind
            </p>
          </div>
          <div className='list-group-item list-group-item-action flex-column align-items-start'>
            <p className='mb-1'>
              <span style={{ fontSize: '1.8em' }}>
                {' '}
                <strong>4.</strong>{' '}
              </span>{' '}
              You can clear the list for a brand new list of just cleared bought
              items.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usage;
