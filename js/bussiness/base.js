var objectJson = {code: 519120};
/**
 * 初始化
 */
(function () {
    //获取浦银战略新兴产业混合数据
    $.post("http://localhost:8082/rest/fundNetworth", JSON.stringify(objectJson), function (data) {
        lineOption(data);
    }, "json");
    //获取关注基金数据
    $.post("http://localhost:8082/rest/fundList", JSON.stringify(objectJson), function (data) {
        for (var i = 0; i < data.attentionFundList.length; i++) {
            var ss = ("<li><a onclick=\"choiceFund('" + data.attentionFundList[i].fundCode + "','" + data.attentionFundList[i].fundName + "')\">" +
                data.attentionFundList[i].fundName + "</a></li>");
            $("#fundList").append(ss);
        }
    }, "json");
})();

/**
 * 加载子页面
 */
$("#echartDiv").load("html/echart.html");