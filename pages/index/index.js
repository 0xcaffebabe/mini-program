//index.js
//获取应用实例
const app = getApp()

Page({
  onTap(){
    wx.switchTab({
      url: '../posts/posts',
    })
  }
})
