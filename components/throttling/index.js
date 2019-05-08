let timer = null
Component({
  methods:{
    throttling(){
      if(timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(()=>{
        this.props.onCallback()
      },300)
    }
  }
})