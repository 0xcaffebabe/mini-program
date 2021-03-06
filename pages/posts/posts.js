// pages/posts/posts.js
Page({
  onPostTap(event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: './post-detail/post-detail?id='+id,
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    swiper:[]
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
    wx.request({
      url: 'https://travel.ismy.wang/api/post_list.json',
      success: data => {
        this.setData({list:data.data.list})
        console.log(data.data.list);
      }
    })
    wx.request({
      url: 'https://travel.ismy.wang/api/swiper.json',
      success: data => {
        this.setData({ swiper: data.data.swiper })
      }
    })
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