; function Register() {
    //属性
    this.kurumi = $(".Kurumi");
    this.tip = $(".tip");
    this.kotori = $(".Kotori");
    this.Tip = $(".Tip");
    this.check = $(".check").children("input")[0];
    this.reg = {
        0: /^.{2,30}$/,
        1: /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/,
        2: /^.{6,12}$/
    }
    //初始化数据
    Register.prototype.initialization = function () {
        
        this.kurumi = $.makeArray(this.kurumi);
        this.tip = $.makeArray(this.tip);
        this.kotori = $.makeArray(this.kotori);
        this.bindingevents();
    }
    //事件绑定
    Register.prototype.bindingevents = function () {
        this.kurumi.forEach((item, index) => {
            $(item).on("input", this.validation.bind(this, index));
        })
        this.kotori.forEach((item, index) => {
            $(item).on("input", this.confirm.bind(this, index));
        })
        $("button").on("click",this.checkvalidation.bind(this));
    }
    //文本框验证
    Register.prototype.validation = function (index) {
        if (this.reg[index].test(this.kurumi[index].value)) {
            $(this.tip[index]).removeClass(" active");
            this.sheng = true;
        } else {
            $(this.tip[index]).addClass(" active");
            this.sheng = false;
        }
    }
    //再次确认文本框验证{
    Register.prototype.confirm = function (index) {
        if (this.kotori[index].value === this.kurumi[index+1].value) {
            $(this.Tip[index]).removeClass(" active");
            this.Sheng = true;
        } else {
            $(this.Tip[index]).addClass(" active");
            this.Sheng = false;
        }
    }
    //复选框获取返回值
    Register.prototype.checkvalidation = function () {
        this.checkbool = this.check.checked;
        if(this.sheng === true && this.Sheng === true && this.checkbool === true){
            console.log(1)
        }
    }
    //终极验证
    Register.prototype.clickverification = function () {
        
    }
}
var register = new Register();
register.initialization();