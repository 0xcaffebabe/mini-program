var util = require("../../../util/util.js")
Page({
  onImgTap(e){
    let img = e.currentTarget.dataset.item;
    wx.previewImage({
      current:img,
      urls: this.data.book.releate,
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    book:{
      "title": "JAVA 编程思想",
      "author": "[美] Bruce Eckel",
      "year":"2005-9",
      "pages":795,
      "desc":"本书赢得了全球程序员的广泛赞誉，即使是最晦涩的概念，在Bruce Eckel的文字亲和力和小而直接的编程示例面前也会化解于无形。从Java的基础语法到最高级特性（深入的面向对象概念、多线程、自动项目构建、单元测试和调试等），本书都能逐步指导你轻松掌握",
      "img":"https://img1.doubanio.com/view/subject/l/public/s1320039.jpg",
      "price":"¥70.00",
      "rank":8.7,
      "releate": ["https://img1.doubanio.com/view/subject/l/public/s1106498.jpg", "https://img1.doubanio.com/view/subject/l/public/s1491187.jpg", "https://img3.doubanio.com/view/subject/l/public/s1669771.jpg","https://img3.doubanio.com/view/subject/l/public/s3479802.jpg"]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.book.stars=util.convertRange2Star(this.data.rank);
    this.setData({ book: this.data.book });
    this.setData({ title: options.book});
    wx.setNavigationBarTitle({
      title: this.data.title,
    })
  }

  
})