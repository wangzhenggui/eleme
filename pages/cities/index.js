import { ACTION_TYPE } from '../../constants'
const app = getApp()
const Store = app.Store
const dispatch = Store.dispatch
const subscribe = Store.subscribe

Page({
  data: {
    cityNumber: ''
  },
  updateData() {
    const State = Store.getState().home // 这个地方一个reduce对应一个页面级的State，每个js里面都有一个订阅函数
    this.setData({...State})
  },
  onLoad(query) {
    // 页面加载
    this.unsubscribe = subscribe(() => {
      this.updateData() // 订阅Store
    })
  },
  onUnload() {
    this.unsubscribe() // 取消订阅
  },
  bindModal: () => {
    dispatch({
      type: ACTION_TYPE.RESET_ALL,
      data: 123,
    });
  }
})