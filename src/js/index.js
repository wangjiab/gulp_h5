/**
 * Created by admin on 2017/3/28.
 */
$(document).ready(function () {

    var sources = ['./images/page1.png', './images/page2.png', './images/page3.png', './images/page4.png', './images/page5.png', './images/page6.png', './images/page7.png', './images/page8.png']
    loadImages(sources, function () {
        setTimeout(function () {
            $("#fullpage").fadeIn();
            $(".page-loading").hide();
            onLoad();
        }, 800)
    })
    onShare();
})
function onLoad() {
    $('#fullpage').fullpage({
        scrollingSpeed: 700,
        slideTime: 700,
        onLeave: function (index, nextIndex, direction) {
            if (nextIndex === 1) {
                $(".footer").hide();
            } else {
                $(".footer").css("display", "inline-block");
                $(".footer").addClass("slideInUp")
            }
        },
        // afterLoad: function (anchorLink, index) {
        //     if (index !== 1) {

        //     }

        // }
    });
    var a = [
        { "name": "陈*", "phoneNo": "186****0688" },
        { "name": "晋*建", "phoneNo": "159****7891" },
        { "name": "蔡*峰", "phoneNo": "137****3523" },
        { "name": "翁*", "phoneNo": "159****0446" },
        { "name": "叶*辉", "phoneNo": "182****3561" },
        { "name": "李*悦", "phoneNo": "133****5862" },
        { "name": "阮*蕊", "phoneNo": "137****1352" },
        { "name": "潘*红", "phoneNo": "159****2989" },
        { "name": "郭*冰", "phoneNo": "189****3705" },
        { "name": "徐*锦", "phoneNo": "137****2627" },
        { "name": "曾*开", "phoneNo": "138****8313" },
        { "name": "陈*捷", "phoneNo": "157****3796" },
        { "name": "魏*子", "phoneNo": "185****0200" },
        { "name": "张*", "phoneNo": "158****9630" },
        { "name": "陈*铃", "phoneNo": "134****8427" },
        { "name": "熊*伟", "phoneNo": "186****6203" },
        { "name": "卢*婷", "phoneNo": "180****3146" },
        { "name": "肖*宇", "phoneNo": "186****8497" },
        { "name": "赵*", "phoneNo": "186****9097" },
        { "name": "郭*", "phoneNo": "138****8583" },
        { "name": "林*旻", "phoneNo": "139****7884" },
        { "name": "周*龙", "phoneNo": "153****6560" },
        { "name": "吴*玮", "phoneNo": "186****7371" },
        { "name": "吴*", "phoneNo": "131****9672" },
        { "name": "吴*", "phoneNo": "135****8337" },
        { "name": "曾*志", "phoneNo": "134****3349" },
        { "name": "杨*", "phoneNo": "158****6056" },
        { "name": "王*", "phoneNo": "185****0613" },
        { "name": "王*云", "phoneNo": "139****3035" },
        { "name": "田*琳", "phoneNo": "186****8601" },
        { "name": "郭*星", "phoneNo": "137****8287" },
        { "name": "李*", "phoneNo": "159****4526" },
        { "name": "高*琛", "phoneNo": "188****3377" },
        { "name": "陈*霖", "phoneNo": "188****3377" },
        { "name": "刘*", "phoneNo": "188****3377" },
        { "name": "江*萍", "phoneNo": "139****8251" },
        { "name": "江*萍", "phoneNo": "181****9757" },
        { "name": "马*芸", "phoneNo": "133****1521" },
        { "name": "李*", "phoneNo": "139****8376" },
        { "name": "刘*", "phoneNo": "134****4484" },
        { "name": "丁*", "phoneNo": "137****0045" },
        { "name": "郑*宁", "phoneNo": "136****2732" },
        { "name": "吴*锋", "phoneNo": "158****0103" },
        { "name": "江*涛", "phoneNo": "135****4628" },
        { "name": "陈*", "phoneNo": "158****7242" },
        { "name": "梁*", "phoneNo": "188****1500" },
        { "name": "胡*珊", "phoneNo": "176****6515" },
        { "name": "苑*", "phoneNo": "135****9020" },
        { "name": "帅*真", "phoneNo": "152****1231" },
        { "name": "仇*", "phoneNo": "186****3082" },
        { "name": "宋*", "phoneNo": "134****6506" },
        { "name": "刘*薇", "phoneNo": "185****2190" },
        { "name": "钟*", "phoneNo": "134****2090" },
        { "name": "李*", "phoneNo": "135****8783" },
        { "name": "刘*楠", "phoneNo": "186****4994" },
        { "name": "米*菲", "phoneNo": "138****2214" },
        { "name": "潘*婷", "phoneNo": "138****3313" },
        { "name": "张*", "phoneNo": "135****3734" },
        { "name": "郝*", "phoneNo": "186****2572" },
        { "name": "刘*", "phoneNo": "135****3749" },
        { "name": "朱*", "phoneNo": "183****6082" },
        { "name": "曹*晗", "phoneNo": "177****0191" },
        { "name": "赵*", "phoneNo": "185****0424" },
        { "name": "夏*萍", "phoneNo": "186****9889" },
        { "name": "谢*妘", "phoneNo": "188****6933" },
        { "name": "戴*冠", "phoneNo": "183****0220" },
        { "name": "王*善", "phoneNo": "150****0029" },
        { "name": "杨*咏", "phoneNo": "158****9032" },
        { "name": "陈*君", "phoneNo": "139****9255" },
        { "name": "黄*莉", "phoneNo": "132****8678" },
        { "name": "王*", "phoneNo": "136****4080" },
        { "name": "马*钰", "phoneNo": "158****7429" },
        { "name": "夏*菲", "phoneNo": "183****6198" },
        { "name": "王*颖", "phoneNo": "185****0552" },
        { "name": "李*", "phoneNo": "150****8969" },
        { "name": "朱*", "phoneNo": "132****1322" },
        { "name": "喻*萍", "phoneNo": "186****5316" },
        { "name": "徐*", "phoneNo": "159****9659" },
        { "name": "耿*玲", "phoneNo": "180****0335" },
        { "name": "王*霞", "phoneNo": "131****1826" },
        { "name": "钟*", "phoneNo": "185****2570" },
        { "name": "柯*", "phoneNo": "150****0801" },
        { "name": "罗*", "phoneNo": "132****7170" },
        { "name": "袁*华", "phoneNo": "156****4635" },
        { "name": "巩*云", "phoneNo": "180****3816" },
        { "name": "赵*清", "phoneNo": "187****2134" },
        { "name": "黄*", "phoneNo": "136****1647" },
        { "name": "董*", "phoneNo": "155****8624" },
        { "name": "姚*", "phoneNo": "156****5515" },
        { "name": "杨*", "phoneNo": "134****1797" },
        { "name": "徐*", "phoneNo": "131****3994" },
        { "name": "管*婷", "phoneNo": "186****9827" },
        { "name": "吕*露", "phoneNo": "186****7280" },
        { "name": "宋*", "phoneNo": "151****1171" },
        { "name": "吴*", "phoneNo": "188****4463" },
        { "name": "魏*", "phoneNo": "135****7458" },
        { "name": "熊*", "phoneNo": "187****0831" },
        { "name": "余*妮", "phoneNo": "135****2546" },
        { "name": "王*", "phoneNo": "159****9810" },
        { "name": "李*贝", "phoneNo": "150****9525" },
        { "name": "吕*星", "phoneNo": "137****3864" },
        { "name": "熊*敏", "phoneNo": "158****5886" },
        { "name": "王*艳", "phoneNo": "182****0896" },
        { "name": "邹*", "phoneNo": "186****3122" },
        { "name": "王*", "phoneNo": "158****1089" },
        { "name": "左*岳", "phoneNo": "153****6872" },
        { "name": "张*", "phoneNo": "186****6633" },
        { "name": "徐*奇", "phoneNo": "185****7495" },
        { "name": "唐*", "phoneNo": "132****6075" },
        { "name": "徐*强", "phoneNo": "136****9535" },
        { "name": "黄*", "phoneNo": "186****8078" },
        { "name": "刘*", "phoneNo": "139****8912" },
        { "name": "都*", "phoneNo": "138****7877" },
        { "name": "魏*扬", "phoneNo": "159****4896" },
        { "name": "安*", "phoneNo": "159****8994" },
        { "name": "龚*华", "phoneNo": "134****2320" },
        { "name": "王*新", "phoneNo": "159****8006" },
        { "name": "孟*", "phoneNo": "137****8062" },
        { "name": "魏*帆", "phoneNo": "186****4076" },
        { "name": "高*", "phoneNo": "158****8428" },
        { "name": "王*仓", "phoneNo": "180****5634" },
        { "name": "黄*伦", "phoneNo": "159****5246" },
        { "name": "刘*涛", "phoneNo": "158****2531" },
        { "name": "许*志", "phoneNo": "189****2220" },
        { "name": "贺*佳", "phoneNo": "135****0844" },
        { "name": "陈*玲", "phoneNo": "133****9087" },
        { "name": "余*芳", "phoneNo": "188****3080" },
        { "name": "施*杭", "phoneNo": "150****2909" },
        { "name": "杨*地", "phoneNo": "150****8925" },
        { "name": "袁*强", "phoneNo": "153****5981" },
        { "name": "胡*", "phoneNo": "159****4581" },
        { "name": "刘*山", "phoneNo": "187****1276" },
        { "name": "姜*勇", "phoneNo": "135****3809" },
        { "name": "王*顶", "phoneNo": "153****7399" },
        { "name": "王*平", "phoneNo": "150****9790" },
        { "name": "陈*超", "phoneNo": "138****2877" },
        { "name": "胡*婷", "phoneNo": "183****3575" },
        { "name": "林*雄", "phoneNo": "134****5917" },
        { "name": "陈*荣", "phoneNo": "184****0436" },
        { "name": "杨*国", "phoneNo": "139****7123" },
        { "name": "李*飞", "phoneNo": "185****2103" },
        { "name": "洪*", "phoneNo": "189****4076" },
        { "name": "阮*华", "phoneNo": "186****0887" },
        { "name": "魏*经", "phoneNo": "135****9392" },
        { "name": "李*成", "phoneNo": "137****5986" },
        { "name": "王*彬", "phoneNo": "156****8292" },
        { "name": "罗*兰", "phoneNo": "187****7394" },
        { "name": "陈*婷", "phoneNo": "182****3416" },
        { "name": "林*莲", "phoneNo": "188****2538" },
        { "name": "张*芬", "phoneNo": "181****3581" },
        { "name": "宋*珊", "phoneNo": "159****7470" },
        { "name": "潘*婷", "phoneNo": "135****3821" },
        { "name": "姜*蕾", "phoneNo": "184****3962" },
        { "name": "高*明", "phoneNo": "180****5105" },
        { "name": "王*鸣", "phoneNo": "182****1729" },
        { "name": "吴*伟", "phoneNo": "134****8755" },
        { "name": "薛*", "phoneNo": "134****7813" },
        { "name": "余*", "phoneNo": "158****6058" },
        { "name": "方*雄", "phoneNo": "152****5719" },
        { "name": "刘*清", "phoneNo": "134****7800" },
        { "name": "毛*琛", "phoneNo": "177****7063" },
        { "name": "韦*玲", "phoneNo": "158****7800" },
        { "name": "薛*勇", "phoneNo": "152****0120" },
        { "name": "高*露", "phoneNo": "156****5566" },
        { "name": "陈*莉", "phoneNo": "158****8620" },
        { "name": "肖*萍", "phoneNo": "186****0830" },
        { "name": "卢*莎", "phoneNo": "158****6263" },
        { "name": "林*兰", "phoneNo": "186****9212" },
        { "name": "李*纳", "phoneNo": "189****0334" },
        { "name": "吴*萍", "phoneNo": "158****2809" },
        { "name": "李*丹", "phoneNo": "183****3476" },
        { "name": "张*丽", "phoneNo": "131****3460" },
        { "name": "徐*华", "phoneNo": "180****5031" },
        { "name": "张*英", "phoneNo": "188****2283" },
        { "name": "陈*阳", "phoneNo": "158****3799" },
        { "name": "郑*浩", "phoneNo": "135****9349" },
        { "name": "何*瑾", "phoneNo": "135****4083" },
        { "name": "李*沨", "phoneNo": "136****7610" },
        { "name": "俞*珍", "phoneNo": "139****6103" },
        { "name": "黄*乐", "phoneNo": "136****8343" },
        { "name": "刘*新", "phoneNo": "135****6660" },
        { "name": "郑*伟", "phoneNo": "137****6131" },
        { "name": "施*彬", "phoneNo": "158****5902" },
        { "name": "关*彦", "phoneNo": "152****0504" },
        { "name": "陈*彬", "phoneNo": "135****9771" },
        { "name": "曾*辉", "phoneNo": "138****6602" },
        { "name": "吴*志", "phoneNo": "150****1050" },
        { "name": "魏*强", "phoneNo": "183****2207" },
        { "name": "吴*丽", "phoneNo": "138****7116" },
        { "name": "连*顺", "phoneNo": "180****9186" },
        { "name": "刘*鑫", "phoneNo": "136****2053" },
        { "name": "梁*伟", "phoneNo": "138****1320" },
        { "name": "徐*晶", "phoneNo": "137****8612" },

    ]
    scrollName(a);
    scrollName2(a);
}
function insertDOM(a) {
    var OrderNum = 53;
    OrderNum = OrderNum + Math.floor(timeLong() / 3)
    //没分钟去刷新数据
    setInterval(function () {
        //timeLong() / 3
        OrderNum = OrderNum + Math.floor(1)
        $(".order").text(OrderNum)

    }, 6000)

    for (var i = 0; i < a.length; i++) {
        if (a[i].name.length == 2) {
            a[i].name = a[i].name + "&emsp;"
        }
        var $li = $("<li><span class='curstomName'>" + a[i].name + "</span><span class='phoneNo'>" + a[i].phoneNo + " 已下单，</span><span>" + '共有<span class="order">' + OrderNum + '</span>人下单' + "</span></li>");
        $("ul").append($li)
    }
}
//滚动名单
function scrollName(a) {
    insertDOM(a);
    clearInterval(timer)
    var timer = null
    var box = document.getElementById("test");
    var height = document.getElementById("test").style.height;
    var liHeight = 20;
    var forNum = a.length - 5
    var position = 0;
    //return false;
    timer = setInterval(function () {
        position = position - liHeight
        $(".container ul").css({ "top": position + "%" })
        --forNum
        if (forNum == 0) {
            forNum = a.length - 4
            position = 20;
        }
    }, 2000);
}
//滚动名单22
function scrollName2(a) {
    insertDOM(a);
    clearInterval(timer)
    var timer = null
    var box = document.getElementById("test");
    var height = document.getElementById("test").style.height;
    var liHeight = 25
    var forNum = a.length - 4
    var position = 0;
    //return false;
    timer = setInterval(function () {
        position = position - liHeight
        $(".container2 ul").css({ "top": position + "%" })
        --forNum
        if (forNum == 0) {
            forNum = a.length - 3
            position = 25
        }
    }, 2000);
}
//分享链接名片
function onShare() {
    webChar = {};
    webChartitle = document.title;
    webChardesc = document.querySelector('meta[name="description"]').getAttribute('content')
    webCharImg = "http://app.iqeq.cn/wch5/content/images/shareImg.jpg"//location.href.split("index.html")[0] + $("#webCharImg").attr("src");
    $.ajax({
        url: 'http://union.iqeq.cn/api/Other/CreateWinXinSign',
        type: 'get',
        timeout: 5000,
        data: { "url": location.href },
        dataType: 'json',
        success: function (data) {
            if (data.StateCode != 0) {
                alert(data.StateMsg)
            } else {
                var Data = data.Data;
                webChar = Data;
                wx.config({
                    debug: false,
                    appId: webChar.appId,
                    timestamp: webChar.timestamp,
                    nonceStr: webChar.nonceStr,
                    signature: webChar.signature,
                    jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
                });
                wx.ready(function () {
                    wx.onMenuShareAppMessage({
                        title: webChartitle,
                        desc: webChardesc,
                        link: '',
                        imgUrl: webCharImg,
                        type: '',
                        dataUrl: '',
                        success: function () {

                        },
                        cancel: function () {

                        }
                    });
                    wx.onMenuShareTimeline({
                        title: webChartitle,
                        desc: webChardesc,
                        link: '',
                        imgUrl: webCharImg,
                        success: function () {

                        },
                        cancel: function () {

                        }
                    });

                    wx.onMenuShareQQ({
                        title: webChartitle,
                        desc: webChardesc,
                        link: '',
                        imgUrl: webCharImg,
                        success: function () {

                        },
                        cancel: function () {

                        }
                    });

                    wx.onMenuShareWeibo({
                        title: webChartitle,
                        desc: webChardesc,
                        link: '',
                        imgUrl: webCharImg,
                        success: function () {

                        },
                        cancel: function () {

                        }
                    });

                    wx.onMenuShareQZone({
                        title: webChartitle,
                        desc: webChardesc,
                        link: '',
                        imgUrl: webCharImg,
                        success: function () {

                        },
                        cancel: function () {

                        }
                    });

                });

                wx.error(function (res) {



                });


            }
        },
        error: function (xhr, textStatus) {
            console.log(textStatus)
        }
    })
}
//加载图片
function loadImages(sources, callback) {
    var count = 0,
        images = {},
        imgNum = 0;
    for (src in sources) {
        imgNum++;
    }
    for (src in sources) {
        images[src] = new Image();
        images[src].onload = function () {
            if (++count >= imgNum) {
                callback(images);
            }
        }
        images[src].src = sources[src];
    }
}
//计算时间差
function timeLong() {
    var dt1 = "2018-05-25 12:00";
    var dt2 = fomatTime(new Date());
    var regTime = /(\d{4})-(\d{1,2})-(\d{1,2})( \d{1,2}:\d{1,2})/g;
    //alert(dt1.replace(regTime, "$2-$3-$1$4"));
    var interval = Math.abs(Date.parse(dt1.replace(regTime, "$2-$3-$1$4")) - Date.parse(dt2.replace(regTime, "$2-$3-$1$4"))) / 1000;
    var h = Math.floor(interval / 3600);
    // console.log(h);
    return h
    //  var m = Math.floor(interval % 3600 / 60);
}
//格式化时间

function fomatTime(value) {
    Date.prototype.Format = function (fmt) { //author: meizz 
        var o = {
            "M+": this.getMonth() + 1, //月份 
            "d+": this.getDate(), //日 
            "h+": this.getHours(), //小时 
            "m+": this.getMinutes(), //分 
            "s+": this.getSeconds(), //秒 
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
            "S": this.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    return new Date(value).Format("yyyy-MM-dd hh:mm:ss");
}