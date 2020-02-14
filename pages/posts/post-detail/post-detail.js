// pages/posts/post-detail/post-detail.js
Page({
  onMusicTap(){
    var app =getApp();
    this.setData({ musicState: !this.data.musicState})
    app.globalData.musicState = this.data.musicState;
    var au = wx.getBackgroundAudioManager();
    au.onPause(()=>{
      this.setData({ musicState: true })
    });
    au.onPlay(()=>{
      this.setData({ musicState: false })
    })
    if (!this.data.musicState){
      au.title = this.data.course.title;
      au.src = this.data.course.music;
      au.play();
    }else {
      au.pause();
    }
    
  },
  onBuyLongTap() {
    wx.showActionSheet({
      itemList: ['分享到QQ-100¥', '分享到微信-200¥'],
      success: res => {
        wx.showToast({
          title: '分享成功' + res.tapIndex,
        })
      }
    })
  },
  onBuyTap() {
    wx.showModal({
      title: '询问',
      content: this.data.buy ? '是否购买' : "是否退货",
      confirmText: '确定',
      cancelText: '取消',
      success: ret => {
        if (ret.confirm) {
          wx.showToast({
            title: this.data.buy ? '购买成功' : '退款成功',
            duration: 1000
          })

          wx.setStorage({
            key: this.data.course.title,
            data: this.data.buy,
          })
          this.setData({
            buy: !this.data.buy
          });
        }
      }
    })

  },
  /**
   * 页面的初始数据
   */
  data: {
    course: {

    },
    buy: true,
    musicState:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var app =getApp();
    this.setData({ musicState: app.globalData.musicState})
    wx.request({
      url: 'https://travel.ismy.wang/api/course.json',
      success: data => {
        var course = data.data.course;
        this.setData({
          course
        });
        if (wx.getStorageSync(course.title)) {
          this.setData({
            buy: false
          });
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})