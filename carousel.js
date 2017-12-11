 
 
 /*依赖jQuery,同页面下可以创造多个实例. 用法：new Carousel($('.carousel').eq(0));*/
 
 
    function Carousel($ct){
      this.$ct = $ct;
      this.init();
      this.bind();
    }
    Carousel.prototype={
      init: function(){
        var $imgCt = this.$imgCt = this.$ct.find('.img-ct'),
            $pre = this.$pre = this.$ct.find('.pre'),
            $next = this.$next = this.$ct.find('.next'),
            $bullet = this.$bullet = this.$ct.find('.bullet');
        var $first = this.$imgCt.find('li').first(),
            $last = this.$imgCt.find('li').last();
        var $width = this.$width = $first.width();
        this.pageIndex = 0;
        this.imgCount = $imgCt.children().length;
        $imgCt.prepend($last.clone());
        $imgCt.append($first.clone());
        $imgCt.width($width*(this.imgCount+2));
        $imgCt.css('left',-$width);
      },
      bind: function(){
        var _this = this;
        this.$pre.click(
        function(){
          _this.play(-1);
        });
        this.$next.click(
          function(){
            _this.play(1);
        });
        this.$bullet.on('click','li',function(){
          var length = $(this).index()-_this.pageIndex;
          _this.play(length);
        });
      },
      play: function(length){
        var _this = this;
        this.$imgCt.animate({
          left:'-='+length*this.$width
        },function(){
          _this.pageIndex += length;
          if(_this.pageIndex === _this.imgCount){
            _this.pageIndex = 0;
            _this.$imgCt.css({
              left:-_this.$width
            });
          }else if(_this.pageIndex < 0){
            _this.pageIndex = _this.imgCount-1;
            _this.$imgCt.css({
              left:-_this.imgCount*_this.$width
            });
          }
          _this.setBullet();
        });
      },
      setBullet: function(){
        this.$bullet.children().removeClass('active').eq(this.pageIndex).addClass('active');
      }
    };
