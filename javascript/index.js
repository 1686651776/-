; function Index() {
    //属性
    this.userlogo = $("#user")[0];
    this.loginanimate = $(".userlogin");
    this.ipt = $(".moe-search-input")[0];
    this.topsearch = $(".top-search")[0];
    this.search_box = $(".search-box")[0];
    this.search_close = $(".search-close")[0];
    this.body = $("body")[0];
    this.wrap = $(".wrap")[0];
    this.prev = $(".previous")[0];
    this.next = $(".next")[0];
    this.index = 0;
    this.banner_text = $(".banner-text");
    this.banner_img = $(".banner-right div");
    this.banner_index = $(".banner-index span");
    this.banner_autoplay = $(".banner-wrap")[0];
    //初始化数据
    Index.prototype.initialization = function () {
        $(function () {
            $(".iframe-loading").css("opacity", "0");
        }.bind(this));
        this.banner_index = $.makeArray(this.banner_index);
        this.bindingevents();
    }
    //事件绑定
    Index.prototype.bindingevents = function () {
        $(this.userlogo).on("click", this.useranimate.bind(this));
        $(this.ipt).on("focus", this.inputanimate.bind(this));
        $(this.search_close).on("click", this.closeanimate.bind(this));
        $(".search-button").on("click", this.pageskipping.bind(this));
        $(this.prev).on("click", this.previousanimate.bind(this));
        $(this.next).on("click", this.nextanimate.bind(this));
        this.banner_index.forEach((item, index) => {
            $(item).on("click", this.indexanimate.bind(this, index));
        });
        $(this.banner_autoplay).on("mouseenter", this.autoplay.bind(this, "stop"));
        $(this.banner_autoplay).on("mouseleave", this.autoplay.bind(this, "start"));
    }
    //点击用户图标动画
    Index.prototype.useranimate = function () {
        if (this.loginanimate[0].className != "userlogin site-fade-leave-show") {
            $(this.loginanimate).removeClass();
            $(this.loginanimate).addClass("userlogin site-fade-leave-show");
            return false;
        }
        if (this.loginanimate[0].className != "userlogin site-fade-leave-hide") {
            $(this.loginanimate).removeClass();
            $(this.loginanimate).addClass("userlogin site-fade-leave-hide");
            return false;
        }
    }
    //搜索框聚焦动画
    Index.prototype.inputanimate = function () {
        $(this.topsearch).addClass(" active");
        $(this.search_box).addClass("active");
        $(this.body).addClass(" active");
        $(this.wrap).addClass(" active");
        $(".search-box input")[0].focus();
    }
    //关闭搜索框动画
    Index.prototype.closeanimate = function () {
        $(this.topsearch).removeClass(" active");
        $(this.search_box).removeClass("active");
        $(this.body).removeClass(" active");
        $(this.wrap).removeClass(" active");
    }
    //点击搜索框内箭头跳转页面
    Index.prototype.pageskipping = function () {
        window.open("http://anybuy.030buy.net/owo?url=dW5kZWZpbmVk");
    }
    //轮播图上一张
    Index.prototype.previousanimate = function () {
        if (this.index === 0) {
            this.index = 5;
        } else {
            this.index--;
        }
        $(this.banner_text).removeClass(" active");
        $(this.banner_text[this.index]).addClass(" active");
        $(this.banner_img).removeClass(" active");
        $(this.banner_img[this.index]).addClass(" active");
        $(this.banner_index).removeClass(" active");
        $(this.banner_index[this.index]).addClass(" active");
    }
    //轮播图下一张
    Index.prototype.nextanimate = function () {
        if (this.index === 5) {
            this.index = 0;
        } else {
            this.index++;
        }
        $(this.banner_text).removeClass(" active");
        $(this.banner_text[this.index]).addClass(" active");
        $(this.banner_img).removeClass(" active");
        $(this.banner_img[this.index]).addClass(" active");
        $(this.banner_index).removeClass(" active");
        $(this.banner_index[this.index]).addClass(" active");
    }
    //点击轮播图导航切换动画
    Index.prototype.indexanimate = function (index) {
        $(this.banner_text).removeClass(" active");
        $(this.banner_text[index]).addClass(" active");
        $(this.banner_img).removeClass(" active");
        $(this.banner_img[index]).addClass(" active");
        $(this.banner_index).removeClass(" active");
        $(this.banner_index[index]).addClass(" active");
    }
    //轮播图自动轮播
    Index.prototype.autoplay = function (state) {
        if (state === "start") {
            this.banner_timer = setInterval(function () {
                this.next.dispatchEvent(new Event("click"));
            }.bind(this), 4000)
        } else if (state === "stop") {
            clearInterval(this.banner_timer);
            this.banner_timer = null;
        }
    }
}
var index = new Index();
index.initialization();
index.autoplay("start");

