import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ counter, dispatch, counterAsyncAdd, counterAdd}) => {
  return (
    <div>
      <h1>
        {counter.count}
      </h1>
      <button onClick={() => { counterAdd() } }>+</button>
      <button onClick={() => { counterAsyncAdd() } }>async +</button>
    </div>
  )
}

Counter.propTypes = {
  counter: PropTypes.object,
}

export default Counter;