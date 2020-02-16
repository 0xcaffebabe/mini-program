var util = require("../../../util/util.js")
Page({
  catchScroll(e){
    console.log("加载更多");
    this.data.page++;
    wx.showNavigationBarLoading();
    this.loadData();
  },
  loadData(){
    wx.request({
      url: 'https://travel.ismy.wang/api/book/book_category.json?category=' + this.data.category + "?page=" + this.data.page,
      success: res => {
        var list = res.data.list;
        for (let i = 0; i < list.length; i++) {
          list[i].stars = util.convertRange2Star(list[i].rank);
        }
        this.setData({ books: this.data.books.concat(list) });
        wx.hideNavigationBarLoading();
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    books:[],
    page:0,
    category:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.category = options.category;
    wx.setNavigationBarTitle({
      title: this.data.category,
    })
   this.loadData();
    
  },

  onPullDownRefresh: function () {
      console.log("刷新数据");
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