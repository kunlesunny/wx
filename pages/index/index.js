Page({  
  data:{  
    open : false,
    movies:[    
    {url:'../../images/02.jpg'} ,    
    {url:'../../images/10.jpg'} ,    
    {url:'../../images/11.jpg'} ,    
    {url:'../../images/14.jpg'}     
    ]   
  },  
  tap_ch: function(e){  
    if(this.data.open){  
      this.setData({  
        open : false  
      });  
    }else{  
      this.setData({  
        open : true  
      });  
    }  
  },
  tap_tx:function(){
      wx.navigateTo({
            url: '../mypage/mypage'
        }) 
   },
   studypage:function(){
      wx.navigateTo({
            url: '../study/study'
        }) 
   },
   newmedia:function(){
     wx.navigateTo({
       url: '../newmedia/newmedia'
     }) 
   }
})