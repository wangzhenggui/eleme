
export const fetchGet = (url,params,actionCreator) => {
  return (dispatch) => {
    const promise = new Promise((resolve,reject) => {
     my.request({
      url,
      method: 'GET',
      dataType: 'json',
      success: function(res) {
        resolve(res)
      },
      fail: function(res) {
        reject(res)
      }
    })
  })
  promise.then((response)=>{
      if (response.data) {
        return response.data;
      }
    }).then((jsonData)=>{
      dispatch(actionCreator(jsonData.info))
    }).catch((data)=>{
      console.log(data)
    })
  }
}

export const apiLocation = (actionCreator) => {
  return (dispatch) => {
      const promise = new Promise((resolve,reject) => {
        if(my.canIUse('getLocation.object.type')) {
          my.getLocation({
            cacheTimeout:30,
            type: 3,
            success:({city,district,pois}) => {
              resolve({city,district,address: pois ? pois[0].address : ''})
            },
            fail: () => {
              reject()
            },
          })
        } else {
            my.showToast({
              type: 'fail',
              content: '当前版本不支持定位信息',
              duration: 2000,
            })
          }
      })
      promise.then((response)=>{
          dispatch(actionCreator(response))
        }).catch(()=>{
           my.alert({ title: '定位失败' });
        })
      }
}