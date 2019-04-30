Page({
  data:{
    city:'北京市',
    district:'朝阳区',
    address:'',
  },
  onLoad(query) {
    // 页面加载
    console.log('onLoad')
  },
  onReady() {
    console.log('onReady')
    // 页面加载完成
    if(my.canIUse('getLocation.object.type')) {
      my.getLocation({
        cacheTimeout:30,
        type: 3,
        success:({city,district,pois}) => {
          this.setData({
            city,
            district,
            address : pois ? pois[0].address : this.data.address
          })
        },
        fail: () => {
          my.alert({ title: '定位失败' });
        },
      })
    } else {
      my.showToast({
        type: 'fail',
        content: '当前版本不支持定位信息',
        duration: 2000,
      })
    }
    console.log(my)
  },
  onShow() {
    console.log('onShow')
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
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
