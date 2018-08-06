import { delay } from 'dva/saga';

export default {
  namespace: 'counter',
  state: {
    count: 1,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // 窗口监听
      window.onresize = () => {
        dispatch({ type: 'add' });
      }
    },
  },
  // 同步请求
  reducers: {
    add(state, action) { // 第一种写法
      return {
        count: state.count + 1,
      }
    },
    // 'add' (state, action) { // 第二种写法，亦可写成‘aa/bb类’
    //   return {
    //     count: state.count + 1,
    //   }
    // },
  },
  // 异步动作
  effects: {
    *asyncAdd({ payload }, { call, put, select }) {
      const counter = yield select(state => state.counter); // 取出state,方法1
      //const counter = yield select(({ counter }) => counter); // 取出state,方法2
      //const counter = yield select(_ => _.counter); // 取出state,方法3
      //const { counter } = yield select(_ => _); // 取出state,方法4
      console.log(counter);
      yield call(delay, 1000);
      yield put({ type: 'add' });
    }
  }
}