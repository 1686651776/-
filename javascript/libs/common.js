/**随机整数 */
function randomInteger(min, max) {
    return min + Math.round(Math.random() * (max - min));
}
/**随机颜色 */
function randomColors() {
    var r = randomInteger(0, 255);
    var g = randomInteger(0, 255);
    var b = randomInteger(0, 255);
    var _randomColors = "rgb(" + r + "," + g + "," + b + ")";
    return _randomColors;
}
/**递归方法算阶乘 */
function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return factorial(n - 1) * n;
}
/**不定参求和 */
function Soip() {
    var res = 0;
    for (var i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return function () {
        var res1 = 0;
        for (var i = 0; i < arguments.length; i++) {
            res1 += arguments[i];
        }
        return function () {
            var res2 = 0;
            for (i = 0; i < arguments.length; i++) {
                res2 += arguments[i];
            }
            return res + res1 + res2;
        }
    }
}
/** 倒计时 */
function countDown(time) {//参数为时间字符串
    var currenttime = new Date(time);//目标时间
    var Now = Date.now();//获取当前的时间戳
    var Differencetime = currenttime.getTime() - Now;//目标时间与当前时间的毫秒差
    //毫秒差转换为多少小时、多少分钟、多少秒、多少毫秒
    var hour = parseInt(Differencetime / 1000 / 3600);
    var minute = parseInt((Differencetime - hour * 3600 * 1000) / 1000 / 60);
    var second = parseInt((Differencetime - hour * 3600 * 1000 - minute * 1000 * 60) / 1000);
    var Millisecond = Differencetime % 1000;
    //返回计算出的小时、分钟、秒、毫秒（不足零会补充0版本 不需要补0返回值不调用补零函数就OK）
    return {
        hour: zero(hour),
        minute: zero(minute),
        second: zero(second),
        Millisecond: zero(Millisecond)
    }
}
/** 倒计时补零 */
function zero(num) {
    if (num < 10) {
        return num = "0" + num;
    } else {
        return num;
    }
}
/** 查询选择器 */
function Query(name) {//创建一个函数
    var Sheng = document.querySelectorAll(name);//创建一个变量来接受选出来的伪数组
    if (Sheng.length === 0) {//如果伪数组为空 返回null 
        return null;
    }
    return Sheng.length === 1 ? Sheng[0] : Sheng;//如果伪数组的项数为1返回第0项如果不为1直接返回伪数组
}
/** 伪数组转换真数组 */
function TArray(Parray) {
    return Array.prototype.slice.call(Parray);
}
/** 事件委托封装  参数 ：1 需要添加的元素  
 *                     2 让元素执行什么事件  
 *                     3 Class名称  
 *                     4 事件处理函数  
 */
function domTow(Parentelement, why, clasName, Sheng) {
    //给需要的元素创建dom2点击事件
    Parentelement.addEventListener(why, D4zZ);
    //DOM2事件函数开始执行
    function D4zZ(sheng) {
        var s = sheng || window.event;
        var This = s.target || s.srcElement;
        //选中需要事件的元素
        var prize = document.querySelectorAll(clasName);
        //把选出来的伪数组转换成真数组
        prize = Array.from(prize);
        //用数组的属性判断点击元素的是否是有事在身的元素 不是直接停止
        if (prize.indexOf(This) === -1) {
            return false;
        }
        //处理事件函数
        Sheng(s);
    }
}
/** 设置cookie函数封装 
 *            参数：1:name 
 *                 2:value 
 *                 3:expires 
 *                 4:path
*/
function _cookie(key, value, expires, path) {
    var str = "";//设置一个空字符串
    str = key + "=" + value + ";";//拼接key和value
    if (typeof expires === "number") {//为了时间参数能够写""需要判定时间参数里面的类型
        var d = new Date();
        d.setDate(d.getDate() + expires);
        str = str + "expires" + "=" + d + ";";
    }
    str = str + "path" + "=" + path + ";";//拼接path
    document.cookie = str;
}
/** 删除cookie */
function _removeCookie(key, path) {
    _cookie(key, "", path, -1)
}
/** 获取cookie函数封装 */
function _getCookie(key) {
    var cookieStr = document.cookie;//获取cookie
    var cookieStrArray = cookieStr.split("; ");//空格千万不能丢 
    var sheng = "";//创建一个接收value值的变量
    var kyename = cookieStrArray.some(function (item) {//使用some把cookie的key和Value分开
        sheng = item.split("=")[1];
        return item.split("=")[0] === key;//存在这个key名返回数值
    })
    if (kyename) {//keyname存在返回value值
        return sheng;
    } else {
        return "";//不存在返空
    }
}
/** 任意元素任意属性的运动 
              参数：1:dom (dom对象)
 *                 2:attr (样式表里面的属性 例如 width height)
 *                 3:target(目标点)
*/
function animate(dom, attr, target, Sheng) {
    // if(timer !== null) return false;
    clearInterval(dom.timer);
    dom.timer = setInterval(() => {
        let distance = target - getStyle(dom, attr, "number");
        let speed = distance > 0 ? Math.ceil(distance / 10) : Math.floor(distance / 10);
        dom.style[attr] = getStyle(dom, attr, "number") + speed + "px";
        if (distance === 0) {
            clearInterval(dom.timer);
            timer = null;
            if (Sheng) {
                Sheng();
            }
        }
    }, 15)
}
/** 参数：
 *      type : 0类型
 */
function getStyle(dom, attr, type) {
    // 用 新方法取值;
    var res_attr = getComputedStyle(dom)[attr];
    // 如果要求转换成数字,那么就转换;
    if (type === "number") {
        return parseInt(res_attr);
    }
    // 如果不要求就原样返回;
    return res_attr;
}
/** 取消form表单默认事件（点击按钮刷新） 
 *  参数 ele  ： 元素ID名
 * */
function formdeFaultEvents(ele) {
    var register_form = document.getElementById(ele);
    register_form.onsubmit = function (evt) {
        var e = evt || window.event;
        e.preventDefault();
    }
}
/** ajax 数据传输封装(GET)
 * 参数 url  ：  接口路径
 * 
 */
function ajaxGet(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.response);
            }
        }
    })
}
/** ajax 数据传输封装(POST) */
function ajaxPost(url, data) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var data_str = "";
        for (var attr in data) {
            if (data_str.length !== 0) {
                data_str += "&";
            }
            data_str += attr + "=" + data[attr];
        }
        xhr.send(data_str);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.response);
            }
        }
    })
}
/** jsonp跨域 封装
 *         参数  url  路径
 *              jsonp_key 前端发给后端函数名时使用的字段名;
 */
function jsonp(url, jsonp_key) {
    return new Promise(function (resolve, reject) {
        // 函数名随机处理避免占用命名空间，避免冲突;
        var randomName = "_" + Date.now()
        //   console.log(randomName);
        window[randomName] = function (res) {
            // console.log(res);
            resolve(res);
        }
        // 2. 创建并插入script标签;
        var script = document.createElement("script");
        // 当前url之中是否存在 ? （存在 ? 表示已经有数据了），我应该用& 去拼接数据，反之则用 ?;
        url = url + (/\?/.test(url) ? "&" : "?") + jsonp_key + "=" + randomName;
        script.src = url;
        // 3. 标签放入页面之中;
        document.body.appendChild(script);
        // 4. 清理垃圾;
        script.onload = function () {
            this.remove();
            window[randomName] = null;
            delete window[randomName];
        }
    })
}
/** 函数节流
 *      参数  callback  回调函数
 *            dealy     间隔时间
 *          节流是隔一段时间执行一次
 */
function _debounce(callback, dealy) {
    // 利用闭包，让 timer 私有化;
    var timer = null;
    return function () {
        // 事件执行的时候，真正会执行的函数是这个;
        if (timer !== null) return false;
        // 如果已经过了规定的时间可以再次执行代码了;
        timer = setTimeout(function () {
            callback();
            timer = null;
        }, dealy)
    }
}
/** 函数去抖
 *          参数    callback 回调函数
 *                  dealy    间隔时间
 *          去抖是若果这个时间没有到一直操作就会一直重置 直到过了这个时间  函数才会执行
 */
function _throttle(callback, dealy) {
    // 利用闭包，让 timer 私有化;
    var timer = null;
    return function () {
        clearTimeout(timer);
        // 如果已经过了规定的时间可以再次执行代码了;
        timer = setTimeout(function () {
            callback();
        }, dealy)
    }
}