import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';

const Counter = ({ counter, dispatch}) => {
  return (
    <div>
      <h1>
        {counter.count}
      </h1>
      <button onClick={() => {dispatch({ type: 'counter/add' })}}>+</button>
    </div>
  )
}

Counter.propTypes = {
  counter: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}

export default connect(mapStateToProps)(Counter);