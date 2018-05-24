/**
 * Created by admin on 2017/3/28.
 */
$(document).ready(function () {
    $('#fullpage').fullpage({
        scrollingSpeed: 1000
    });


    var sources = ['./images/7.png', './images/8.png', './images/19.png']
    loadImages(sources, function () {
        setTimeout(function () {
            $("#fullpage").fadeIn();
            $(".page-loading").hide();
            drawDown()
        }, 800)
    })


    return false;
    onShare();
})
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

function drawDown() {
    var c = document.getElementById("downCanvas"),
        cxt = c.getContext("2d");
    cxt.beginPath();
    cxt.moveTo(5, 20);
    cxt.lineTo(25, 45);
    cxt.lineTo(45, 20);
    cxt.lineWidth = 5;
    cxt.strokeStyle = "white";
    cxt.lineCap = 'round';
    cxt.lineJoin = "round";
    cxt.stroke();
    cxt.moveTo(5, 5);
    cxt.lineTo(25, 30);
    cxt.lineTo(45, 5);
    cxt.lineWidth = 5;
    cxt.strokeStyle = "white";
    cxt.lineCap = 'round';
    cxt.lineJoin = "round";
    cxt.stroke();
}