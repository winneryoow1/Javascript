function lazyload(className) {
    var obj = this;
    lazyload.className = className;
    console.log(this);
    console.log(lazyload);
}
lazyload('blue');
    /*
    this.getOffset = function (el, isLeft) {
        var  retValue  = 0 ;
       
        return  retValue;
    };
    this.initImages = function (ele) {
        
    };
    this.showImage = function() {
        this.initImages();
      
        return true;
    };
    this.initImages();
    _attachEvent(window, 'scroll', function(){obj.showImage();});


new lazyload();}*/
