//index.js
//获取应用实例
const app = getApp()

Page({
  onIndexTap(){
    wx.switchTab({
      url: '../posts/posts',
    })
  },
  onTap(){
    
    wx.getUserInfo({
      success:res=>{
        this.setData({name:res.userInfo.nickName});
        
        this.setData({ img: res.userInfo.avatarUrl });
      }
    })
  },
  data:{
    name:'',
    img: ''
  }
})
