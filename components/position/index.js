Component({
  data: {},
  // 设置默认属性
  props: {
    position: ''
  },
  didMount() {
  },
  methods: {
    selectCity() {
      my.navigateTo({
        url: '/pages/cities/index'
      })
    },
    selectBusiness() {
      console.log('选择商业');
    }
  },
});