var util = require("../../util/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
   bookList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.request({
        url: 'https://travel.ismy.wang/api/book/book.json',
        success:res=>{
          
          var list = res.data.bookList;
          for (let i =0;i<list.length;i++){
            
            for(let j =0;j<list[i].list.length;j++){
              
              list[i].list[j].stars = util.convertRange2Star(list[i].list[j].rank);
            }
          }
          console.log(list);
          this.setData({ bookList:list });
        }
      })
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