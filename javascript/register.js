; function Register() {
    //属性
    this.user = document.getElementsByTagName("input");
    this.kurumi = $(".Kurumi");
    this.tip = $(".tip");
    this.reg = {
        0: /^.{2,30}$/,
        1: /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/,
        2: /^.{6,12}$/
    }
    //初始化数据
    Register.prototype.initialization = function () {
        this.kurumi = Array.from(this.kurumi);
        this.tip = Array.from(this.tip);
        this.bindingevents();
    }
    //事件绑定
    Register.prototype.bindingevents = function () {
        this.kurumi.forEach((item, index) => {
            item.addEventListener("input", this.validation.bind(this, index));
        })

    }
    //文本框验证
    Register.prototype.validation = function (index) {
        this.sign = index;
        if (this.reg[this.sign].test(this.kurumi[this.sign].value)) {
            this.tip[this.sign].className = this.tip[this.sign].className.replace(/\sactive/g, "");
        } else {
            this.tip[this.sign].className = " active";
        }
    }
    //复选框获取返回值
    Register.prototype.checkvalidation = function () {

    }
    //终极验证
    Register.prototype.clickverification = function () {

    }
}
var register = new Register();
register.initialization();