Page({  
  data: {   
    // tab切换  
    currentTab: 0, 
    array: [
      {message: 'foo'}, 
      {message: 'bar'}
      ] 
  },
   /** 
   * 点击tab切换 
   */  
   swichNav: function( e ) { 
    var that = this;     
    if( this.data.currentTab === e.target.dataset.current ) {  
      return false;  
    } 
    else
    {  
      that.setData({  
        currentTab: e.target.dataset.current  
      })  
    }  
  },      
  /** 
     * 滑动切换tab 
     */  
  bindChange: function( e ) {
    var that = this;    
    that.setData({ currentTab: e.detail.current });  
  }  
 
 
}) 