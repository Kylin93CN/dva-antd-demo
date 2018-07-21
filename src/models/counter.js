export default {
  namespace: 'counter',
  state: {
    count: 1,
  },
  reducers: {
    add(state, action) { // 第一种感写法
      return {
        count: state.count + 1,
      }
    },
    // 'add' (state, action) { // 第二种感写法，亦可写成‘aa/bb类’
    //   return {
    //     count: state.count + 1,
    //   }
    // },
  },
}