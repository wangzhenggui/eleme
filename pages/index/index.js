import API from '../../services';
const app = getApp()
const Store = app.Store
const dispatch = Store.dispatch
const subscribe = Store.subscribe
const order = ['blue', 'red', 'green', 'yellow'];

Page({
  data:{
    city:'北京市',
    district:'朝阳区',
    address:'',
    cityNumber: '',
    items: [
      {
        title: '单行列表',
        extra: '详细信息',
      },
    ],
    items2: [
      {
        title: '多行列表',
        arrow: true,
      },
      {
        title: '多行列表',
        arrow: 'up',
      },
      {
        title: '多行列表',
        arrow: 'down',
      },
      {
        title: '多行列表',
        arrow: 'empty',
      },
      {
        title: '多行列表',
      },
    ],
  },
  storeUpdate() {
    const data = Store.getState().home
    this.setData(data)
  },
  onLoad(query) {
    dispatch(API.getLocation())
    dispatch(API.getJsonData())
    this.unsubscribe = subscribe(()=>{
      this.storeUpdate();
    })
  },
  onReady() {
  },
  onShow() {
    console.log('onShow')
    // 页面显示
  },
  onHide() {
    console.log('页面隐藏')
    // 页面隐藏
  },
  onUnload() {
    console.log('页面关闭')
    // 页面被关闭
    this.unsubscribe()
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
  callbackCity(city,adCode) {
    console.log(city,adCode)
  }
});
