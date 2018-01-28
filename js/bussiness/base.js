var objectJson = {code: 519120};
/**
 * 初始化
 */
(function () {
    //获取浦银战略新兴产业混合数据
    $.post(path + "rest/fundNetworth", JSON.stringify(objectJson), function (data) {
        lineOption(data);
    }, "json");
    //获取关注基金数据
    $.post(path + "rest/fundList", JSON.stringify(objectJson), function (data) {
        for (var i = 0; i < data.attentionFundList.length; i++) {
            var ss = ("<li><a onclick=\"choiceFund('" + data.attentionFundList[i].fundCode + "','" + data.attentionFundList[i].fundName + "')\">" +
                data.attentionFundList[i].fundName + "</a></li>");
            $("#fundList").append(ss);
        }
    }, "json");
    //获取基金主题
    $.post(path + "rest/fund/subject", JSON.stringify(objectJson), function (data) {
        for (var i = 0; i < data.subjects.length; i++) {
            var ss = ("<li><a onclick=\"choiceSubjectFund('" + data.subjects[i] + "')\">" +
                data.subjects[i] + "</a></li>");
            $("#subjectList").append(ss);
        }
    }, "json");
})();

/**
 * 加载子页面
 */
$("#echartDiv").load("html/echart.html");