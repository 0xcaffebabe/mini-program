// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        title:'TypeScript －系统入门到项目实战',
        img: 'https://img2.mukewang.com/szimg/5e1d990f0885d97306000338-360-202.jpg',
        author: {
          img: 'https://img1.sycdn.imooc.com/user/5abe468b0001664107390741-100-100.jpg',
          name: 'Dell'
        },
        date: '2020 / 02 / 11',
        level: '中级',
        people : 3761
      },
      {
        title: '2020 重学C++ 重构你的C++知识体系',
        img: 'https://img1.mukewang.com/szimg/5e26a9f909ef95b512000676-360-202.png',
        author: {
          img: 'https://img.mukewang.com/user/545850c80001ebf202200220-100-100.jpg',
          name: 'quickzhao'
        },
        date: '2020 / 02 / 10',
        level: '中级',
        people: 179
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})