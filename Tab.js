

    /*原生封装Tab切换效果，同页面可new多个实例，用法：new Tab(document.querySelectorAll('.tab')[0])*/

    
    function Tab(ct){
      this.ct = ct;
      this.init();
      this.bind();
    }
    Tab.prototype.init = function(){
      this.tabList = this.ct.querySelectorAll('.tab-header li');
      this.tabPanels = this.ct.querySelectorAll('.tab-panels li');
    };
    Tab.prototype.bind = function(){
      var _this = this;
      this.tabList.forEach(function(tabLi){
        tabLi.onclick=function(e){
          var target = e.target;
          var index = [].indexOf.call(_this.tabList,target);
          _this.tabList.forEach(function(li){
            li.classList.remove('active');
          });
          target.classList.add('active');
          _this.tabPanels.forEach(function(panel){
            panel.classList.remove('active');
          });
          _this.tabPanels[index].classList.add('active');
        };
      });
    };
