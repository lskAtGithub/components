
function Exposure($target,callback){
      this.$target = $target;
      this.callback = callback;
      this.bind();
      this.check();
    }
    Exposure.prototype = {
      bind: function(){
        var _this = this;
        $(window).scroll(function(){
          _this.check();
        });
      },
      check: function(){
        if(this.isShow(this.$target)){
        this.callback(this.$target);
        }
      },
    isShow: function(){
      var windowHeight = $(window).height(),
        scrollTop = $(window).scrollTop(),
        offsetTop = this.$target.offset().top,
        targetHeight = this.$target.height();
        if(windowHeight+scrollTop>offsetTop&&scrollTop<windowHeight+targetHeight){
          return true;
        }else{
          return false;
        } 
      }     
    };
    var LazyRender = (function(){
      return {
        init: function($target,callback){
          $target.each(function(index,target){
          new Exposure($(target),callback);
        });
      } 
    };
    }());

    function showImg($target){
      $target.attr('src',$target.attr('data-src'));
    }
    LazyRender.init($('img'),function($target){showImg($target);});
