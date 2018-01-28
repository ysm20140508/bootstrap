/**
 * 创建定投
 */
function crontabCreate() {
    var crontabCreateJson = {};
    crontabCreateJson.crontabName = $("#crontabName").val();
    crontabCreateJson.fundCode = $("#fundCode").val();
    crontabCreateJson.startTime = $("#startTime").val();
    crontabCreateJson.endTime = $("#endTime").val();
    crontabCreateJson.amount = $("#amount").val();
    crontabCreateJson.buyRate = $("#buyRate").val();
    crontabCreateJson.sellRate = $("#sellRate").val();
    alert(JSON.stringify(crontabCreateJson));
    //post json
    $.post(path + "rest/crontab/create", JSON.stringify(crontabCreateJson), function (data) {
    }, "json");

}

