/**
 * 创建定投
 */
function crontabCreate() {
    var crontabCreateJson = new Object();
    crontabCreateJson.crontabName = $("#crontabName").val();
    crontabCreateJson.fundCode = $("#fundCode").val();
    crontabCreateJson.startTime = $("#startTime").val();
    crontabCreateJson.endTime = $("#endTime").val();
    crontabCreateJson.amount = $("#amount").val();
    crontabCreateJson.buyRate = $("#buyRate").val();
    crontabCreateJson.sellRate = $("#sellRate").val();
    alert(JSON.stringify(crontabCreateJson));
    //post json
    $.post("http://localhost:8082/rest/crontab/create", JSON.stringify(crontabCreateJson), function (data) {
    }, "json");

}

