; function Register() {
    //属性
    this.kurumi = $(".Kurumi");
    this.tip = $(".tip");
    this.kotori = $(".Kotori");
    this.Tip = $(".Tip");
    this.check = $(".check").children("input")[0];
    this.checkbool = null;
    this.url = "http://127.0.0.1/menggou/Interface/register.php";
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
        $("button").on("click", this.Submission.bind(this));
    }
    //文本框验证
    Register.prototype.validation = function (index) {
        if (this.reg[index].test(this.kurumi[index].value)) {
            $(this.tip[index]).removeClass(" active");
            $(".userrepeat").removeClass(" active");
            $(".emailrepeat").removeClass(" active");
        } else {
            $(this.tip[index]).addClass(" active");
        }
    }
    //再次确认文本框验证{
    Register.prototype.confirm = function (index) {
        if (this.kotori[index].value === this.kurumi[index + 1].value) {
            $(this.Tip[index]).removeClass(" active");
        } else {
            $(this.Tip[index]).addClass(" active");
        }
    }
    //点击提交进行终极验证
    Register.prototype.Submission = function (evt) {
        evt.preventDefault();
        this.checkbool = this.check.checked;
        if (this.tip[0].className === "tip" && this.tip[1].className === "tip" && this.tip[2].className === "tip" && this.Tip[0].className === "Tip" && this.Tip[1].className === "Tip" && this.checkbool === true) {
            alert("确认要注册吗?");
            this.senddata();
        } else {
            alert("请填写用户名邮箱和密码并同意使用条款")
        }
    }
    //提交数据到数据库
    Register.prototype.senddata = function () {
        this.data = {
            username: this.kurumi[0].value,
            email: this.kurumi[1].value,
            password: this.kurumi[2].value
        }
        $.ajax({
            url: this.url,
            data: this.data,
            type: "POST",
            dataType: "json",
            success: function (res) {
                if (res.stateCode === "用户名重复") {
                    alert("用户名重复");
                    $(".userrepeat").addClass(" active");
                } else if (res.stateCode === "邮箱重复") {
                    alert("该邮箱已经被注册");
                    $(".emailrepeat").addClass(" active");
                } else {
                    alert("注册成功");
                    window.location.href = "./register2.html#" + email.value;
                };
            }
        });
    }
}
var register = new Register();
register.initialization();
