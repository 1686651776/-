; function Login() {
    //属性
    this.ipt = $("input");
    this.icon = $(".icon");
    this.tip = $(".logintip");
    this.url = "http://127.0.0.1/menggou/Interface/login.php";
    //初始化数据
    Login.prototype.initialization = function () {
        this.ipt = $.makeArray(this.ipt);
        this.bindingevents();
    }
    //事件绑定
    Login.prototype.bindingevents = function () {
        this.ipt.forEach((item, index) => {
            $(item).on("focus", this.focusanimation.bind(this, index));
            $(item).on("blur", this.bluranimation.bind(this, index));
            $(item).on("input", this.validation.bind(this, index));
        });
        $("button").on("click", this.clickverifysubmission.bind(this));
        $(".close").on("click", this.logonstatus.bind(this));
    }
    //文本框聚焦动画
    Login.prototype.focusanimation = function (index) {
        $(this.icon[index]).addClass(" show");
    }
    //文本框失焦动画
    Login.prototype.bluranimation = function (index) {
        $(this.icon[index]).removeClass(" show");
    }
    //文本框验证
    Login.prototype.validation = function (index) {
        if (this.ipt[index].value === "") {
            $(this.tip[index]).addClass(" active");
        } else {
            $(this.tip[index]).removeClass(" active");
        }
    }
    //点击登录验证数据
    Login.prototype.clickverifysubmission = function (evt) {
        evt.preventDefault();
        if (this.ipt[0].value === "") {
            $(this.tip[0]).addClass(" active");
        };
        if (this.ipt[1].value === "") {
            $(this.tip[1]).addClass(" active");
        };
        if(this.tip[0].className != "logintip" || this.tip[1].className != "logintip") return false;
        this.data = {
            username: this.ipt[0].value,
            password: this.ipt[1].value
        }
        $.ajax({
            url: this.url,
            data: this.data,
            type: "POST",
            dataType: "json",
            success: function (res) {
                if (res.stateCode === "3") {
                    $(".message").text("用户不存在");
                    $(".logininformation").addClass(" show");
                    setTimeout(function(){
                        $(".logininformation").removeClass(" show");
                    }.bind(this),5000);
                }
                if (res.stateCode === "2") {
                    $(".message").text("密码不正确");
                    $(".logininformation").addClass(" show");
                    setTimeout(function(){
                        $(".logininformation").removeClass(" show");
                    }.bind(this),5000);
                }
                if (res.stateCode === "1") {
                    window.location.href = "./index.html"
                }
            }
        })
    }
    //关闭登录状态提示框
    Login.prototype.logonstatus = function () {
        $(".logininformation").removeClass(" show");
    }
}
var login = new Login();
login.initialization();
