import React from 'react';
import { connect } from 'dva';

const Counter = ({ counter }) => {
  return (
    <div>
      <h1>
        {counter.count}
      </h1>
      <button>+</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}

export default connect(mapStateToProps)(Counter);