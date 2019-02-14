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
    this.notice_banner_index = 0;
    this.recommend_content_index = 0;
    this.banner_text = $(".banner-text");
    this.banner_img = $(".banner-right div");
    this.banner_index = $(".banner-index span");
    this.banner_autoplay = $(".banner-wrap")[0];
    this.notice = $("#notice")[0];
    this.notice_banner = $(".notice-banner")[0];
    this.notice_banner_prev = $(".notice-banner-main")[0].children;
    this.recommend_content = $(".recommend-content")[0].children;
    this.norice_banner_html = {
        0: `  <h2>
        <div>
            2019 年春节期间营业时间及部分优惠活动调整通知
        </div>
        <span class="subtitle">2019-01-11</span>
    </h2>
    <div class="text">
2019 年春节法定假期为 2019年2月4日~2019年2月10日，共 7 天，2月2日（周六）、2月3日（周日）为正常工作日

假期期间，萌购的各方面工作安排如下： 

日本仓库入库： 

春节期间送达萌购东京仓库的订单商品，将会正常入库收货。 

日本仓库发货： 

标准团发：由于需要进行国内中转和通关，为了避免出现滞留情况，1月20日至2月10日期间，标准团发将暂停使用；请注意由于春节为中国最重要的节日，临近春节时各地各个物流都可能出现不正常的情况，预估在1月15日后申请发货的包裹均可能在年后送达，预估的到货时间为2019年3月内。 

日本邮政EMS、SAL、AIR、EPL、船便：不受假期影响，仍可正常出库发货 

请注意，包裹若在春节期间送达中国国内，可能由于中国邮政部门休假和国内物流延迟等原因，使得包裹仍然需要在年后才能派送，建议合理安排发货计划。 

若希望春节前或期间收到货物的用户，建议根据物流配送时间，即日起选择日本邮政EMS、SAL、AIR、EPL方式申请发货。 

海外下单 

2月3日~2月7日，暂停接收以下网站的新订单：雅虎日拍、mercari ； 

2月4日~2月7日，萌购下单员将完全暂停下单；同时，暂停接收以下来源的新订单：日本亚马逊第三方商品（即：非日亚官方自营商品）、骏河屋、及其它所有站点的新申请单； 

暂停下单期间，您仍然可以购买这些站点的商品并进行付款：虎穴、C-queen、Animate、MELONBOOKS、MANDARAKE、HMV、MOVIC、amiami 、BOOTH； 

但我们将从 2月8日开始，前往日方网站进行代购下单。 

2月8日~2月10日，萌购将安排定时下单，每日下单的时间将不低于8小时，由于下单时间段较为分散，您的订单状态更新可能存在一定延迟；对于热门限购或价格变动频繁的商品，建议您在节后再进行购买。 

客服安排 

2月4日~2月10日，萌购工单系统将正常服务，您也可以通过电子邮件留言给我们，客服邮箱为 customerservice@030buy.com 

但假日期间提出的工单问题及邮件咨询，可能无法及时予您答复； 
且由于假日期间部分物流停止运作，下单为不定时下单，因此咨询到货周期和催促下单的问题将无法作答，因此给您带来的不便之处，敬请谅解。 

此外，假日期间将无法处理售后问题，您的有关售后问题将顺延至节后安排处理，由于现实条件制约，我们也希望您能将相关咨询和要求顺延至节后提交。 
--------------------------------------------------------------
2月11日起，萌购所有工作安排将恢复，但由于春节期间囤积的货物和问题较多，此期间的订单状态更新和咨询回复都可能有一定延迟，届时还请耐心等待。 
--------------------------------------------------------------
优惠调整 

随着人力、耗材、物流等方面成本的提升为了持续提供稳定的服务，部分代购优惠将做调整。

【代购手续费限时特惠】调整时间为2019年2月1日 

调整后优惠价格请参考： <a href="https://www.030buy.net/help/01_03" target="_blank">https://www.030buy.net/help/01_03</a>
    </div>`,
        1: ` <h2>
    <div>
        2019年元旦工作安排
    </div>
    <span class="subtitle">2018-12-24</span>
</h2>
<div class="text">
2019年元旦假日为 2018年12月30日（周日）-2019年1月1日
假日期间，萌购仓库暂时封印，所有出入库都会暂停。

假日期间，萌购直发正常运行。但请注意，元旦为日本最重要的假日之一，大部分快递/物流和商家都将暂停工作，您的商品出入库将可能在现有时间基础上顺延到3-4日。

由此带来不便，敬请谅解。

您仍可以正常下单并完成付款，您的售后问题亦将顺延一个工作日得到反馈。给您带来不便敬请谅解。

平安夜的新年通告~祝福大家一切都好~（最重要是多买些东西啊！）
</div>`,
        2: `  <h2>
        <div>
            快速团发调整通知
        </div>
        <span class="subtitle">2018-11-27</span>
    </h2>
    <div class="text">
近期由于海关通关手续和通关政策的调整，导致快速团发的通关速度受到了较大影响，其通关速度对比标准团发已无明显速度优势，考虑到用户体验我们将于2018年12月1日起，将快速团发与标准团发进行合并，您已经申请发货的商品将仍按照原快速团发物流流程进行发货。

对于习惯了快速团发的老用户，萌购推荐您使用萌购标准团发形式进行发送，目前标准团发运费优惠活动正火热进行中，最大6折！
     
同时，由于收到不少用户的建议，标准团发的首重将重新回归到500g以便您更灵活的使用。优惠期间的收费（人民币）为：
     
500g   原价 60元，  优惠价 35元；（41.6% off！！！）
1000g 原价 80元，  优惠价 50元；（37.5% off！！下同）
1500g 原价 120元，优惠价 75元；
2000g 原价 160元，优惠价 100元；
2500g 原价 200元，优惠价 125元；
3000g 原价 240元，优惠价 150元；
3500g 原价 280元，优惠价 175元；
4000g 原价 320元，优惠价 200元；
     
目前标准团发通常在发货后的20-30天内送达目的地，有关标准团发的更多信息请参考帮助。
    </div>`,
        3: `<h2>
        <div>
        2018年冬最新物流调整，标准团发运费7.5折起！
        </div>
        <span class="subtitle">2018-10-26   </span>
    </h2>
    <div class="text">
    嗯，广受关注的萌购标准团发将迎来优惠活动，是不是等这一刻很久了呢！？

    2018年11月1日起标准团发的收费首重将调整为1,000g，运费优惠活动如下
    
    首重1,000g 原价80元，现价 50 元（37.5% off！！）
    续重每500g 原价40元，现价 25 元（37.5% off！！）
    
    那么还不出手，申请发货嘛！
    
    优惠活动终止时间将另行通知，请留意后续公告。
    
    ------------------------------------------
    
    2018年冬其他物流变更和调整
    
    ------------------------------------------
    
    通过收集用户反馈和意见建议，以下物流方式将有不同变更:
    
    * 根据大量用户的强烈要求，将于2018年11月1日开放日本邮政海运（船便）线路，海运路线的运输限制和收费标准请查看后续帮助更新。
    
    * 日本邮政EPL：2018年11月1日起最大可发送重量扩大为 2kg。1.5kg-2kg包裹运费为 1,800 日元 （不含包裹处理费）。
    
    * 由于国际航运调整，日本邮政EPL、快速团发、香港邮政E邮宝、香港邮政经济快递 自2018年11月1日起将不再可发送最长边29cm以上的商品以及体积过大商品。有关体积过大商品的判定标准请查看下文“注”内容。
    
    * 为精简物流，为您提供更精确便捷的物流服务，香港邮政E邮宝，香港邮政经济快递将于2018年11月15日起停止服务。
    
    * 由于航线调整和通关要求优化，标准团发的到货时间将变更为发货后的25-35天，准备发货时间和其他限制条件不变。
    
           感谢新老用户的持续支持，我们将不断收集您的意见建议优化物流，为您提供更省心便捷快速的物流服务。由于物流变更可能给您带来的不便，先致以歉意。
    
    注：体积过大商品指商品的实际重量小于等于700g，而体积重量大于700g的商品。判断是否体积过大商品时使用的体积重量计算公式为：长x高x宽（cm）/6=n (g) 不满1g计算为1g。
    </div>`
    }
    this.recommend_content_text = {
        0 : {
            0 : {
                background : "url(./images/recbanner1.jpg)",
                title : "只要998!",
                subtitle : "机动战士高达 08MS小队 陆战型高达 背包",
                price : `<svg>
                <svg viewBox="0 0 24 24" id="moe-cart-add" width="100%" height="100%">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="18.5" cy="20.7" r="1.7"></circle>
                    <circle cx="9.6" cy="20.7" r="1.7"></circle>
                    <path
                        d="M15.4 8h2.2v2.2a.79.79 0 0 0 .8.8.74.74 0 0 0 .8-.8V7.9h2.2a.76.76 0 0 0 .82-.75c0-.5-.32-.75-.82-.75h-2.2V4.2a.79.79 0 0 0-.8-.8.74.74 0 0 0-.8.8v2.2h-2.2a.79.79 0 0 0-.8.8.74.74 0 0 0 .8.8z">
                    </path>
                    <path
                        d="M22 10h-.2a.8.8 0 0 0-.77.58L19.7 15.2a1.6 1.6 0 0 1-1.4 1.1h-8.2a1.32 1.32 0 0 1-1.4-1.1L6.7 8h5.1a.8.8 0 1 0 0-1.6H6.4l-.6-2.2A3.09 3.09 0 0 0 2.9 2H1.8a.74.74 0 0 0-.8.8.79.79 0 0 0 .8.8h1.1a1.32 1.32 0 0 1 1.4 1.1l3 10.9a3 3 0 0 0 2.9 2.2h8.2a3.09 3.09 0 0 0 2.9-2.2l1.24-4.6a.76.76 0 0 0-.54-1z">
                    </path>
                </svg>
            </svg>998元`
            },
            1 : {
                background : "url(./images/recbanner2.jpg)",
                title : "BANDAI",
                subtitle : "假面骑士Build系列",
                price : `<svg>
                <svg viewBox="0 0 24 24" id="moe-cart-add" width="100%" height="100%">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="18.5" cy="20.7" r="1.7"></circle>
                    <circle cx="9.6" cy="20.7" r="1.7"></circle>
                    <path
                        d="M15.4 8h2.2v2.2a.79.79 0 0 0 .8.8.74.74 0 0 0 .8-.8V7.9h2.2a.76.76 0 0 0 .82-.75c0-.5-.32-.75-.82-.75h-2.2V4.2a.79.79 0 0 0-.8-.8.74.74 0 0 0-.8.8v2.2h-2.2a.79.79 0 0 0-.8.8.74.74 0 0 0 .8.8z">
                    </path>
                    <path
                        d="M22 10h-.2a.8.8 0 0 0-.77.58L19.7 15.2a1.6 1.6 0 0 1-1.4 1.1h-8.2a1.32 1.32 0 0 1-1.4-1.1L6.7 8h5.1a.8.8 0 1 0 0-1.6H6.4l-.6-2.2A3.09 3.09 0 0 0 2.9 2H1.8a.74.74 0 0 0-.8.8.79.79 0 0 0 .8.8h1.1a1.32 1.32 0 0 1 1.4 1.1l3 10.9a3 3 0 0 0 2.9 2.2h8.2a3.09 3.09 0 0 0 2.9-2.2l1.24-4.6a.76.76 0 0 0-.54-1z">
                    </path>
                </svg>
            </svg>30~605元`
            },
            2 : {
                background : "url(./images/recbanner3.jpg)",
                title : "megahouse",
                subtitle : "金枪鱼拼图",
                price : `<svg>
                <svg viewBox="0 0 24 24" id="moe-cart-add" width="100%" height="100%">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="18.5" cy="20.7" r="1.7"></circle>
                    <circle cx="9.6" cy="20.7" r="1.7"></circle>
                    <path
                        d="M15.4 8h2.2v2.2a.79.79 0 0 0 .8.8.74.74 0 0 0 .8-.8V7.9h2.2a.76.76 0 0 0 .82-.75c0-.5-.32-.75-.82-.75h-2.2V4.2a.79.79 0 0 0-.8-.8.74.74 0 0 0-.8.8v2.2h-2.2a.79.79 0 0 0-.8.8.74.74 0 0 0 .8.8z">
                    </path>
                    <path
                        d="M22 10h-.2a.8.8 0 0 0-.77.58L19.7 15.2a1.6 1.6 0 0 1-1.4 1.1h-8.2a1.32 1.32 0 0 1-1.4-1.1L6.7 8h5.1a.8.8 0 1 0 0-1.6H6.4l-.6-2.2A3.09 3.09 0 0 0 2.9 2H1.8a.74.74 0 0 0-.8.8.79.79 0 0 0 .8.8h1.1a1.32 1.32 0 0 1 1.4 1.1l3 10.9a3 3 0 0 0 2.9 2.2h8.2a3.09 3.09 0 0 0 2.9-2.2l1.24-4.6a.76.76 0 0 0-.54-1z">
                    </path>
                </svg>
            </svg>89元`
            },
            3 : {
                background : "url(./images/recbanner4.jpg)",
                title : "只要998",
                subtitle : "和牛拼图",
                price : `<svg>
                <svg viewBox="0 0 24 24" id="moe-cart-add" width="100%" height="100%">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="18.5" cy="20.7" r="1.7"></circle>
                    <circle cx="9.6" cy="20.7" r="1.7"></circle>
                    <path
                        d="M15.4 8h2.2v2.2a.79.79 0 0 0 .8.8.74.74 0 0 0 .8-.8V7.9h2.2a.76.76 0 0 0 .82-.75c0-.5-.32-.75-.82-.75h-2.2V4.2a.79.79 0 0 0-.8-.8.74.74 0 0 0-.8.8v2.2h-2.2a.79.79 0 0 0-.8.8.74.74 0 0 0 .8.8z">
                    </path>
                    <path
                        d="M22 10h-.2a.8.8 0 0 0-.77.58L19.7 15.2a1.6 1.6 0 0 1-1.4 1.1h-8.2a1.32 1.32 0 0 1-1.4-1.1L6.7 8h5.1a.8.8 0 1 0 0-1.6H6.4l-.6-2.2A3.09 3.09 0 0 0 2.9 2H1.8a.74.74 0 0 0-.8.8.79.79 0 0 0 .8.8h1.1a1.32 1.32 0 0 1 1.4 1.1l3 10.9a3 3 0 0 0 2.9 2.2h8.2a3.09 3.09 0 0 0 2.9-2.2l1.24-4.6a.76.76 0 0 0-.54-1z">
                    </path>
                </svg>
            </svg>89元`
            },
        },
        1 : {
            0 : {
                background : "url(./images/recbanner5.jpg)",
                title : "STAND ALONE COMPLEX",
                subtitle : "攻壳机动队塔奇库玛 思考车",
                price : `<svg>
                <svg viewBox="0 0 24 24" id="moe-cart-add" width="100%" height="100%">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="18.5" cy="20.7" r="1.7"></circle>
                    <circle cx="9.6" cy="20.7" r="1.7"></circle>
                    <path
                        d="M15.4 8h2.2v2.2a.79.79 0 0 0 .8.8.74.74 0 0 0 .8-.8V7.9h2.2a.76.76 0 0 0 .82-.75c0-.5-.32-.75-.82-.75h-2.2V4.2a.79.79 0 0 0-.8-.8.74.74 0 0 0-.8.8v2.2h-2.2a.79.79 0 0 0-.8.8.74.74 0 0 0 .8.8z">
                    </path>
                    <path
                        d="M22 10h-.2a.8.8 0 0 0-.77.58L19.7 15.2a1.6 1.6 0 0 1-1.4 1.1h-8.2a1.32 1.32 0 0 1-1.4-1.1L6.7 8h5.1a.8.8 0 1 0 0-1.6H6.4l-.6-2.2A3.09 3.09 0 0 0 2.9 2H1.8a.74.74 0 0 0-.8.8.79.79 0 0 0 .8.8h1.1a1.32 1.32 0 0 1 1.4 1.1l3 10.9a3 3 0 0 0 2.9 2.2h8.2a3.09 3.09 0 0 0 2.9-2.2l1.24-4.6a.76.76 0 0 0-.54-1z">
                    </path>
                </svg>
            </svg>123元`
            },
            1 : {
                background : "url(./images/recbanner6.jpg)",
                title : "WEGO",
                subtitle : "排球少年徽章 吧唧 文件夹 立牌",
                price : `<svg>
                <svg viewBox="0 0 24 24" id="moe-cart-add" width="100%" height="100%">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="18.5" cy="20.7" r="1.7"></circle>
                    <circle cx="9.6" cy="20.7" r="1.7"></circle>
                    <path
                        d="M15.4 8h2.2v2.2a.79.79 0 0 0 .8.8.74.74 0 0 0 .8-.8V7.9h2.2a.76.76 0 0 0 .82-.75c0-.5-.32-.75-.82-.75h-2.2V4.2a.79.79 0 0 0-.8-.8.74.74 0 0 0-.8.8v2.2h-2.2a.79.79 0 0 0-.8.8.74.74 0 0 0 .8.8z">
                    </path>
                    <path
                        d="M22 10h-.2a.8.8 0 0 0-.77.58L19.7 15.2a1.6 1.6 0 0 1-1.4 1.1h-8.2a1.32 1.32 0 0 1-1.4-1.1L6.7 8h5.1a.8.8 0 1 0 0-1.6H6.4l-.6-2.2A3.09 3.09 0 0 0 2.9 2H1.8a.74.74 0 0 0-.8.8.79.79 0 0 0 .8.8h1.1a1.32 1.32 0 0 1 1.4 1.1l3 10.9a3 3 0 0 0 2.9 2.2h8.2a3.09 3.09 0 0 0 2.9-2.2l1.24-4.6a.76.76 0 0 0-.54-1z">
                    </path>
                </svg>
            </svg>12~50元`
            },
            2 : {
                background : "url(./images/recbanner7.jpg)",
                title : "游星商会",
                subtitle : "绮罗星纸 神话 夜天 良夜 星座图 月华",
                price : `<svg>
                <svg viewBox="0 0 24 24" id="moe-cart-add" width="100%" height="100%">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="18.5" cy="20.7" r="1.7"></circle>
                    <circle cx="9.6" cy="20.7" r="1.7"></circle>
                    <path
                        d="M15.4 8h2.2v2.2a.79.79 0 0 0 .8.8.74.74 0 0 0 .8-.8V7.9h2.2a.76.76 0 0 0 .82-.75c0-.5-.32-.75-.82-.75h-2.2V4.2a.79.79 0 0 0-.8-.8.74.74 0 0 0-.8.8v2.2h-2.2a.79.79 0 0 0-.8.8.74.74 0 0 0 .8.8z">
                    </path>
                    <path
                        d="M22 10h-.2a.8.8 0 0 0-.77.58L19.7 15.2a1.6 1.6 0 0 1-1.4 1.1h-8.2a1.32 1.32 0 0 1-1.4-1.1L6.7 8h5.1a.8.8 0 1 0 0-1.6H6.4l-.6-2.2A3.09 3.09 0 0 0 2.9 2H1.8a.74.74 0 0 0-.8.8.79.79 0 0 0 .8.8h1.1a1.32 1.32 0 0 1 1.4 1.1l3 10.9a3 3 0 0 0 2.9 2.2h8.2a3.09 3.09 0 0 0 2.9-2.2l1.24-4.6a.76.76 0 0 0-.54-1z">
                    </path>
                </svg>
            </svg>20~100元`
            },
            3 : {
                background : "url(./images/recbanner8.jpg)",
                title : "R4G",
                subtitle : "steins gate 命运石之门0T恤 卫衣 皮带 帽子",
                price : `<svg>
                <svg viewBox="0 0 24 24" id="moe-cart-add" width="100%" height="100%">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="18.5" cy="20.7" r="1.7"></circle>
                    <circle cx="9.6" cy="20.7" r="1.7"></circle>
                    <path
                        d="M15.4 8h2.2v2.2a.79.79 0 0 0 .8.8.74.74 0 0 0 .8-.8V7.9h2.2a.76.76 0 0 0 .82-.75c0-.5-.32-.75-.82-.75h-2.2V4.2a.79.79 0 0 0-.8-.8.74.74 0 0 0-.8.8v2.2h-2.2a.79.79 0 0 0-.8.8.74.74 0 0 0 .8.8z">
                    </path>
                    <path
                        d="M22 10h-.2a.8.8 0 0 0-.77.58L19.7 15.2a1.6 1.6 0 0 1-1.4 1.1h-8.2a1.32 1.32 0 0 1-1.4-1.1L6.7 8h5.1a.8.8 0 1 0 0-1.6H6.4l-.6-2.2A3.09 3.09 0 0 0 2.9 2H1.8a.74.74 0 0 0-.8.8.79.79 0 0 0 .8.8h1.1a1.32 1.32 0 0 1 1.4 1.1l3 10.9a3 3 0 0 0 2.9 2.2h8.2a3.09 3.09 0 0 0 2.9-2.2l1.24-4.6a.76.76 0 0 0-.54-1z">
                    </path>
                </svg>
            </svg>100~300元`
            },
        },
        2 : {
            0 : {
                background : "url(./images/recbanner9.jpg)",
                title : "MOVIC animate",
                subtitle : "黑/白 素体 本体魅特兔 玩偶挂件",
                price : `<svg>
                <svg viewBox="0 0 24 24" id="moe-cart-add" width="100%" height="100%">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="18.5" cy="20.7" r="1.7"></circle>
                    <circle cx="9.6" cy="20.7" r="1.7"></circle>
                    <path
                        d="M15.4 8h2.2v2.2a.79.79 0 0 0 .8.8.74.74 0 0 0 .8-.8V7.9h2.2a.76.76 0 0 0 .82-.75c0-.5-.32-.75-.82-.75h-2.2V4.2a.79.79 0 0 0-.8-.8.74.74 0 0 0-.8.8v2.2h-2.2a.79.79 0 0 0-.8.8.74.74 0 0 0 .8.8z">
                    </path>
                    <path
                        d="M22 10h-.2a.8.8 0 0 0-.77.58L19.7 15.2a1.6 1.6 0 0 1-1.4 1.1h-8.2a1.32 1.32 0 0 1-1.4-1.1L6.7 8h5.1a.8.8 0 1 0 0-1.6H6.4l-.6-2.2A3.09 3.09 0 0 0 2.9 2H1.8a.74.74 0 0 0-.8.8.79.79 0 0 0 .8.8h1.1a1.32 1.32 0 0 1 1.4 1.1l3 10.9a3 3 0 0 0 2.9 2.2h8.2a3.09 3.09 0 0 0 2.9-2.2l1.24-4.6a.76.76 0 0 0-.54-1z">
                    </path>
                </svg>
            </svg>65元`
            },
            1 : {
                background : "url(./images/recbanner10.jpg)",
                title : "黑执事Black Label",
                subtitle : "夏尔 赛巴斯彼得兔 毛绒挂件",
                price : `<svg>
                <svg viewBox="0 0 24 24" id="moe-cart-add" width="100%" height="100%">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="18.5" cy="20.7" r="1.7"></circle>
                    <circle cx="9.6" cy="20.7" r="1.7"></circle>
                    <path
                        d="M15.4 8h2.2v2.2a.79.79 0 0 0 .8.8.74.74 0 0 0 .8-.8V7.9h2.2a.76.76 0 0 0 .82-.75c0-.5-.32-.75-.82-.75h-2.2V4.2a.79.79 0 0 0-.8-.8.74.74 0 0 0-.8.8v2.2h-2.2a.79.79 0 0 0-.8.8.74.74 0 0 0 .8.8z">
                    </path>
                    <path
                        d="M22 10h-.2a.8.8 0 0 0-.77.58L19.7 15.2a1.6 1.6 0 0 1-1.4 1.1h-8.2a1.32 1.32 0 0 1-1.4-1.1L6.7 8h5.1a.8.8 0 1 0 0-1.6H6.4l-.6-2.2A3.09 3.09 0 0 0 2.9 2H1.8a.74.74 0 0 0-.8.8.79.79 0 0 0 .8.8h1.1a1.32 1.32 0 0 1 1.4 1.1l3 10.9a3 3 0 0 0 2.9 2.2h8.2a3.09 3.09 0 0 0 2.9-2.2l1.24-4.6a.76.76 0 0 0-.54-1z">
                    </path>
                </svg>
            </svg>217元`
            },
            2 : {
                background : "url(./images/recbanner1.jpg)",
                title : "只要998!",
                subtitle : "机动战士高达 08MS小队 陆战型高达 背包",
                price : `<svg>
                <svg viewBox="0 0 24 24" id="moe-cart-add" width="100%" height="100%">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="18.5" cy="20.7" r="1.7"></circle>
                    <circle cx="9.6" cy="20.7" r="1.7"></circle>
                    <path
                        d="M15.4 8h2.2v2.2a.79.79 0 0 0 .8.8.74.74 0 0 0 .8-.8V7.9h2.2a.76.76 0 0 0 .82-.75c0-.5-.32-.75-.82-.75h-2.2V4.2a.79.79 0 0 0-.8-.8.74.74 0 0 0-.8.8v2.2h-2.2a.79.79 0 0 0-.8.8.74.74 0 0 0 .8.8z">
                    </path>
                    <path
                        d="M22 10h-.2a.8.8 0 0 0-.77.58L19.7 15.2a1.6 1.6 0 0 1-1.4 1.1h-8.2a1.32 1.32 0 0 1-1.4-1.1L6.7 8h5.1a.8.8 0 1 0 0-1.6H6.4l-.6-2.2A3.09 3.09 0 0 0 2.9 2H1.8a.74.74 0 0 0-.8.8.79.79 0 0 0 .8.8h1.1a1.32 1.32 0 0 1 1.4 1.1l3 10.9a3 3 0 0 0 2.9 2.2h8.2a3.09 3.09 0 0 0 2.9-2.2l1.24-4.6a.76.76 0 0 0-.54-1z">
                    </path>
                </svg>
            </svg>998元`
            },
            3 : {
                background : "url(./images/recbanner1.jpg)",
                title : "只要998!",
                subtitle : "机动战士高达 08MS小队 陆战型高达 背包",
                price : `<svg>
                <svg viewBox="0 0 24 24" id="moe-cart-add" width="100%" height="100%">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <circle cx="18.5" cy="20.7" r="1.7"></circle>
                    <circle cx="9.6" cy="20.7" r="1.7"></circle>
                    <path
                        d="M15.4 8h2.2v2.2a.79.79 0 0 0 .8.8.74.74 0 0 0 .8-.8V7.9h2.2a.76.76 0 0 0 .82-.75c0-.5-.32-.75-.82-.75h-2.2V4.2a.79.79 0 0 0-.8-.8.74.74 0 0 0-.8.8v2.2h-2.2a.79.79 0 0 0-.8.8.74.74 0 0 0 .8.8z">
                    </path>
                    <path
                        d="M22 10h-.2a.8.8 0 0 0-.77.58L19.7 15.2a1.6 1.6 0 0 1-1.4 1.1h-8.2a1.32 1.32 0 0 1-1.4-1.1L6.7 8h5.1a.8.8 0 1 0 0-1.6H6.4l-.6-2.2A3.09 3.09 0 0 0 2.9 2H1.8a.74.74 0 0 0-.8.8.79.79 0 0 0 .8.8h1.1a1.32 1.32 0 0 1 1.4 1.1l3 10.9a3 3 0 0 0 2.9 2.2h8.2a3.09 3.09 0 0 0 2.9-2.2l1.24-4.6a.76.76 0 0 0-.54-1z">
                    </path>
                </svg>
            </svg>998元`
            },
        }
    }
    //初始化数
    Index.prototype.initialization = function () {
        $(function () {
            $(".iframe-loading").css("opacity", "0");
            $(this.notice_banner_prev[2]).html(this.norice_banner_html[this.notice_banner_index]);
            $(this.recommend_content[1].children[0].children[0]).css("background-image",`${this.recommend_content_text[this.recommend_content_index][0].background}`);
            $(this.recommend_content[1].children[0].children[1]).text(`${this.recommend_content_text[this.recommend_content_index][0].title}`);
            $(this.recommend_content[1].children[0].children[2]).text(`${this.recommend_content_text[this.recommend_content_index][0].subtitle}`);
            $(this.recommend_content[1].children[0].children[3]).html(`${this.recommend_content_text[this.recommend_content_index][0].price}`);
            //
            $(this.recommend_content[1].children[1].children[0]).css("background-image",`${this.recommend_content_text[this.recommend_content_index][1].background}`);
            $(this.recommend_content[1].children[1].children[1]).text(`${this.recommend_content_text[this.recommend_content_index][1].title}`);
            $(this.recommend_content[1].children[1].children[2]).text(`${this.recommend_content_text[this.recommend_content_index][1].subtitle}`);
            $(this.recommend_content[1].children[1].children[3]).html(`${this.recommend_content_text[this.recommend_content_index][1].price}`);
            //
            $(this.recommend_content[1].children[2].children[0]).css("background-image",`${this.recommend_content_text[this.recommend_content_index][2].background}`);
            $(this.recommend_content[1].children[2].children[1]).text(`${this.recommend_content_text[this.recommend_content_index][2].title}`);
            $(this.recommend_content[1].children[2].children[2]).text(`${this.recommend_content_text[this.recommend_content_index][2].subtitle}`);
            $(this.recommend_content[1].children[2].children[3]).html(`${this.recommend_content_text[this.recommend_content_index][2].price}`);
            //
            $(this.recommend_content[1].children[3].children[0]).css("background-image",`${this.recommend_content_text[this.recommend_content_index][3].background}`);
            $(this.recommend_content[1].children[3].children[1]).text(`${this.recommend_content_text[this.recommend_content_index][3].title}`);
            $(this.recommend_content[1].children[3].children[2]).text(`${this.recommend_content_text[this.recommend_content_index][3].subtitle}`);
            $(this.recommend_content[1].children[3].children[3]).html(`${this.recommend_content_text[this.recommend_content_index][3].price}`);
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
        $(this.notice).on("click", this.noticeanimate.bind(this));
        $(this.notice_banner_prev[0]).on("click", this.noticebannerprevious.bind(this));
        $(this.notice_banner_prev[1]).on("click", this.noticebannernext.bind(this));
        $(this.recommend_content[2]).on("click", this.recommend_content_previous.bind(this));
        $(this.recommend_content[3]).on("click", this.recommend_content_next.bind(this));
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
    //通知显示隐藏动画
    Index.prototype.noticeanimate = function () {
        if (this.notice_banner.className === "notice-banner") {
            $(this.notice_banner).addClass(" show");
        } else {
            $(this.notice_banner).removeClass(" show");
        }
    }
    //通知轮播图上一张
    Index.prototype.noticebannerprevious = function () {
        if (this.notice_banner_index === 0) {
            this.notice_banner_index = 3;
        } else {
            this.notice_banner_index--;
        }
        $(this.notice_banner_prev[2]).html(this.norice_banner_html[this.notice_banner_index]);
    }
    //通知轮播图下一张
    Index.prototype.noticebannernext = function () {
        if (this.notice_banner_index === 3) {
            this.notice_banner_index = 0;
        } else {
            this.notice_banner_index++;
        }
        $(this.notice_banner_prev[2]).html(this.norice_banner_html[this.notice_banner_index]);
    }
    //编辑精选幻灯片上一页
    Index.prototype.recommend_content_previous = function () {
        if (this.recommend_content_index === 0) {
            this.recommend_content_index = 2;
        } else {
            this.recommend_content_index--;
        }
        $(this.recommend_content[1].children[0].children[0]).css("background-image",`${this.recommend_content_text[this.recommend_content_index][0].background}`);
        $(this.recommend_content[1].children[0].children[1]).text(`${this.recommend_content_text[this.recommend_content_index][0].title}`);
        $(this.recommend_content[1].children[0].children[2]).text(`${this.recommend_content_text[this.recommend_content_index][0].subtitle}`);
        $(this.recommend_content[1].children[0].children[3]).html(`${this.recommend_content_text[this.recommend_content_index][0].price}`);
        //
        $(this.recommend_content[1].children[1].children[0]).css("background-image",`${this.recommend_content_text[this.recommend_content_index][1].background}`);
        $(this.recommend_content[1].children[1].children[1]).text(`${this.recommend_content_text[this.recommend_content_index][1].title}`);
        $(this.recommend_content[1].children[1].children[2]).text(`${this.recommend_content_text[this.recommend_content_index][1].subtitle}`);
        $(this.recommend_content[1].children[1].children[3]).html(`${this.recommend_content_text[this.recommend_content_index][1].price}`);
        //
        $(this.recommend_content[1].children[2].children[0]).css("background-image",`${this.recommend_content_text[this.recommend_content_index][2].background}`);
        $(this.recommend_content[1].children[2].children[1]).text(`${this.recommend_content_text[this.recommend_content_index][2].title}`);
        $(this.recommend_content[1].children[2].children[2]).text(`${this.recommend_content_text[this.recommend_content_index][2].subtitle}`);
        $(this.recommend_content[1].children[2].children[3]).html(`${this.recommend_content_text[this.recommend_content_index][2].price}`);
        //
        $(this.recommend_content[1].children[3].children[0]).css("background-image",`${this.recommend_content_text[this.recommend_content_index][3].background}`);
        $(this.recommend_content[1].children[3].children[1]).text(`${this.recommend_content_text[this.recommend_content_index][3].title}`);
        $(this.recommend_content[1].children[3].children[2]).text(`${this.recommend_content_text[this.recommend_content_index][3].subtitle}`);
        $(this.recommend_content[1].children[3].children[3]).html(`${this.recommend_content_text[this.recommend_content_index][3].price}`);
    }
    //编辑精选幻灯片下一页
    Index.prototype.recommend_content_next = function () {
        if (this.recommend_content_index === 2) {
            this.recommend_content_index = 0;
        } else {
            this.recommend_content_index++;
        }
        $(this.recommend_content[1].children[0].children[0]).css("background-image",`${this.recommend_content_text[this.recommend_content_index][0].background}`);
        $(this.recommend_content[1].children[0].children[1]).text(`${this.recommend_content_text[this.recommend_content_index][0].title}`);
        $(this.recommend_content[1].children[0].children[2]).text(`${this.recommend_content_text[this.recommend_content_index][0].subtitle}`);
        $(this.recommend_content[1].children[0].children[3]).html(`${this.recommend_content_text[this.recommend_content_index][0].price}`);
        //
        $(this.recommend_content[1].children[1].children[0]).css("background-image",`${this.recommend_content_text[this.recommend_content_index][1].background}`);
        $(this.recommend_content[1].children[1].children[1]).text(`${this.recommend_content_text[this.recommend_content_index][1].title}`);
        $(this.recommend_content[1].children[1].children[2]).text(`${this.recommend_content_text[this.recommend_content_index][1].subtitle}`);
        $(this.recommend_content[1].children[1].children[3]).html(`${this.recommend_content_text[this.recommend_content_index][1].price}`);
        //
        $(this.recommend_content[1].children[2].children[0]).css("background-image",`${this.recommend_content_text[this.recommend_content_index][2].background}`);
        $(this.recommend_content[1].children[2].children[1]).text(`${this.recommend_content_text[this.recommend_content_index][2].title}`);
        $(this.recommend_content[1].children[2].children[2]).text(`${this.recommend_content_text[this.recommend_content_index][2].subtitle}`);
        $(this.recommend_content[1].children[2].children[3]).html(`${this.recommend_content_text[this.recommend_content_index][2].price}`);
        //
        $(this.recommend_content[1].children[3].children[0]).css("background-image",`${this.recommend_content_text[this.recommend_content_index][3].background}`);
        $(this.recommend_content[1].children[3].children[1]).text(`${this.recommend_content_text[this.recommend_content_index][3].title}`);
        $(this.recommend_content[1].children[3].children[2]).text(`${this.recommend_content_text[this.recommend_content_index][3].subtitle}`);
        $(this.recommend_content[1].children[3].children[3]).html(`${this.recommend_content_text[this.recommend_content_index][3].price}`);
    }
}
var index = new Index();
index.initialization();
index.autoplay("start");

