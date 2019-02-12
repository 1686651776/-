; function Index() {
    //属性
    this.userlogo = $("#user")[0];
    this.loginanimate = $(".userlogin");
    this.ipt = $(".moe-search-input")[0];
    this.topsearch = $(".top-search")[0];
    this.search_box = $(".search-box")[0];
    this.search_close = $(".search-close")[0];
    this.body = $("body")[0];
    //初始化数据
    Index.prototype.initialization = function () {
        this.bindingevents();
        $(function () { 
            $(".iframe-loading").css("display","none");
        }.bind(this));
    }
    //事件绑定
    Index.prototype.bindingevents = function () {
        $(this.userlogo).on("click",this.useranimate.bind(this));
        $(this.ipt).on("click",this.inputanimate.bind(this));
        $(this.search_close).on("click",this.closeanimate.bind(this));
        $(".search-button").on("click",this.pageskipping.bind(this));
    }
    //点击用户图标动画
    Index.prototype.useranimate = function () {
        if(this.loginanimate[0].className != "userlogin site-fade-leave-show"){
            $(this.loginanimate).removeClass();
            $(this.loginanimate).addClass("userlogin site-fade-leave-show");
            return false;
        } 
        if(this.loginanimate[0].className != "userlogin site-fade-leave-hide"){
            $(this.loginanimate).removeClass();
            $(this.loginanimate).addClass("userlogin site-fade-leave-hide");
            return false;
        }
    }   
    //搜索框聚焦动画
    Index.prototype.inputanimate = function () {
       $(this.topsearch).addClass(" active");
       $(this.search_box).addClass( "active");
       $(this.body).addClass(" active");
    }
    //关闭搜索框动画
    Index.prototype.closeanimate = function () {
        $(this.topsearch).removeClass(" active");
        $(this.search_box).removeClass( "active");
        $(this.body).removeClass(" active");
    }
    //点击搜索框内箭头跳转页面
    Index.prototype.pageskipping = function () {
        window.open("http://anybuy.030buy.net/owo?url=dW5kZWZpbmVk");
    }
    //关闭登录状态提示框
    Index.prototype.logonstatus = function () {

    }
}
var index = new Index();
index.initialization();

