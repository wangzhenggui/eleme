import { ACTION_TYPE } from '../../constants'
const app = getApp()
const Store = app.Store
const dispatch = Store.dispatch
const subscribe = Store.subscribe

Page({
  data: {
    hh: ''
  },
  up: () => {
    debugger;
  },
  onLoad(query) {
    // 页面加载
    dispatch({
      type: ACTION_TYPE.RESET_ALL,
      data: 123,
    });
    subscribe(() => {
      debugger;
    })
  },
})