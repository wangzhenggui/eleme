let flag = true
Component({
  methods:{
    throttling(){
      return function() {
        console.log(flag)
        if(!flag) return
        flag = false
        setTimeout(()=>{
          this.props.onCallback()
          flag = true
        },1000)
      }
    },
    throttle() {
      this.throttling().call(this)
    }
  }
})