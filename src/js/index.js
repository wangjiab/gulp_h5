/**
 * Created by admin on 2017/3/28.
 */
$(document).ready(function () {
    $('#fullpage').fullpage({
        scrollingSpeed: 700,
        onLeave: function (index, nextIndex, direction) {
            if (nextIndex === 1) {
                $(".footer").hide();
            }
        },
        afterLoad: function (anchorLink, index) {
            if (index !== 1) {
                $(".footer").show();
            }
           
        }
    });
     scrollName();


    var sources = ['./images/page1.png', './images/page2.png', './images/page3.png', './images/page4.png', './images/page5.png', './images/page6.png', './images/page7.png', './images/page8.png']
    loadImages(sources, function () {
        setTimeout(function () {
            $("#fullpage").fadeIn();
            // $(".footer").fadeIn();
            $(".page-loading").hide();
        }, 800)
    })
    return false;
    onShare();
})
//滚动名单
function scrollName() {
    clearInterval(timer)
    var a = [
        { name: "陈*", phoneNo: "186****0688" },
        { name: "晋*建", phoneNo: "159****7891" },
        { name: "蔡*峰", phoneNo: "137****3523" },
        { name: "翁*", phoneNo: "159****0446" },
        { name: "叶*辉", phoneNo: "182****3561" },
        { name: "李*悦", phoneNo: "133****5862" },
        { name: "阮*蕊", phoneNo: "137****1352" },
        { name: "潘*红", phoneNo: "159****2989" },
        { name: "郭*冰", phoneNo: "189****3705" },
        { name: "徐*锦", phoneNo: "137****2627" }
    ]
    var timer = null
    for (var i = 0; i < a.length; i++) {
        if (a[i].name.length == 2) {
            a[i].name = a[i].name + "&emsp;"
        }
        var $li = $("<li><span class='curstomName'>" + a[i].name + "</span><span class='phoneNo'>" + a[i].phoneNo + " 已下单，</span><span>" + '共有296人下单' + "</span></li>");
        $("ul").append($li)
    }
    var box = document.getElementById("test");
    var height = document.getElementById("test").style.height;
    var liHeight = 20;
    var forNum = a.length - 6
    var position = 0;
    //return false;
    timer = setInterval(function () {
        console.log("xxx")
        position = position - liHeight
        $("ul").css({ "top": position + "%" })
        forNum--
        if (forNum == -1) {
            forNum = a.length - 6
            position = 20;
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
