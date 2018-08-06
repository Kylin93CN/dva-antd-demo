import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'dva/router'; // 高阶组件跳转

const Counter = ({ counter, dispatch, counterAsyncAdd, counterAdd, history }) => {
  return (
    <div>
      <h1>
        {counter.count}
      </h1>
      <Link to='/'>go home</Link>
      <br/>
      <button onClick={() => history.push('/')}>go back home</button>
      <br/>
      <button onClick={() => { counterAdd() } }>+</button>
      <button onClick={() => { counterAsyncAdd() } }>async +</button>
    </div>
  )
}

Counter.propTypes = {
  counter: PropTypes.object,
}

export default Counter;