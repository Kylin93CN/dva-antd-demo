import React from 'react';
import { connect } from 'dva';
import Counter from '../components/Counter';

import { counterAdd, counterAsyncAdd } from '../actions';

const CounterPage = (props) => {
  return (
    <div>
      Counter Page.
      <Counter
        counterAdd={props.counterAdd} 
        counterAsyncAdd={props.counterAsyncAdd}
        counter={ props.counter }
        dispatch={ props.dispatch }
        history={ props.history }
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}

export default connect(mapStateToProps, { counterAdd, counterAsyncAdd })(CounterPage);