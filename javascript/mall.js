; function Mall() {
    //属性
    this.classifynav = $(".nav-container a");
    this.nav_search = $(".nav-search");
    this.click_loading_ele = $(".click-loading");
    this.commodity_loading = $(".loading");
    this.input_container = $(".input-container");
    this.menlogo = $(".footer a")[0];
    this.item = $(".item-wrap")[0];
    //初始化数据
    Mall.prototype.initialization = function () {
        $(function () {
            
        }.bind(this));
        this.classifynav = $.makeArray(this.classifynav);
        this.click_loading_ele = $.makeArray(this.click_loading_ele);
        this.Rendering();
        this.bindingevents();
    }
    //事件绑定
    Mall.prototype.bindingevents = function () {
        this.classifynav.forEach((item, index) => {
            $(item).on("click", this.navshadow.bind(this, index));
        });
        $(this.nav_search[0].children[0]).on("focus", this.nav_search_focus_animate.bind(this));
        $(this.nav_search[0].children[0]).on("blur", this.nav_search_blur_animate.bind(this));
        $(this.input_container[0].children[0]).on("focus", this.input_container_focus_animate.bind(this));
        $(this.input_container[0].children[0]).on("blur", this.input_container_blur_animate.bind(this));
        $(this.menlogo).on("mouseover", this.menlogo_animate.bind(this));
        this.click_loading_ele.forEach((item, index) => {
            $(item).on("click", this.loadinganimate.bind(this))
        });
    }
    //商品菜单点击动画
    Mall.prototype.navshadow = function (index) {
        $(this.classifynav).removeClass();
        $(this.classifynav[index]).addClass(" active");
    }
    //左侧搜索栏聚焦动画
    Mall.prototype.nav_search_focus_animate = function () {
        $(this.nav_search[0].children[0]).addClass(" active");
        $(this.nav_search[0].children[1]).addClass(" active");
    }
    //左侧搜索栏失焦动画
    Mall.prototype.nav_search_blur_animate = function () {
        $(this.nav_search[0].children[0]).removeClass(" active");
        $(this.nav_search[0].children[1]).removeClass(" active");
    }
    //右侧搜索过滤器聚焦动画
    Mall.prototype.input_container_focus_animate = function () {
        $(this.input_container[0]).addClass(" active");
    }
    //右侧搜索过滤器聚焦动画
    Mall.prototype.input_container_blur_animate = function () {
        $(this.input_container[0]).removeClass(" active");
    }
    //萌购底部logo触摸动画
    Mall.prototype.menlogo_animate = function () {
        $(this.menlogo).css("background-position", "-195px -512px");
        setTimeout(function () {
            $(this.menlogo).css("background-position", "-195px -508px");
        }.bind(this), 200);
    }
    //商品渲染
    Mall.prototype.Rendering = function () {
        $.get("http://127.0.0.1/menggou/data/data2.json", function (res) {
            this.html = "";
            $.each($(res.items), function (index, item) {
                this.html += `<div class="item">
                <a href="" class="item-preview"><img src="${item.img}" alt=""></a>
                <a href="" class="item-title">${item.title}</a>
                <p class="item-data" title="发售日">${item.releaseDate}</p>
                <p class="item-price"><span>${item.price}</span>元</p>
                <span class="item-flags">现货</span>
            </div>`
            }.bind(this));
            $(this.item).html(this.html);   
        }.bind(this));
    }
    //商品渲染动画
    Mall.prototype.loadinganimate = function () {
        $(this.commodity_loading).addClass(" active");
        $(this.commodity_loading).css("z-index", "99");
        setTimeout(function () {
            $(this.commodity_loading).removeClass(" active");
            setTimeout(function () {
                $(this.commodity_loading).css("z-index", "-99");
            }.bind(this),400);
        }.bind(this), 400);
      
    }
}
var mall = new Mall();
mall.initialization();
