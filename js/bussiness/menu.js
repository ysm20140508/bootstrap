/**
 * 展示图表
 */
function echartShow() {
    $("#echartDiv").show();
    //$("#echart").css({"width":"100%","height":"400px"});
    $("#manageDiv").hide();

}

/**
 * 展示管理界面
 */
function echartHide() {
    $("#echartDiv").hide();
    //$("#echart").css({"width":"0%","height":"0px"});
    $("#manageDiv").show();
}

/**
 * 点击基金曲线图触发的事件
 */
function fundNetWorth(target) {
    $.post("http://localhost:8082/rest/fundNetworth", JSON.stringify(objectJson), function (data) {
        lineOption(data);
    }, "json");
    changeMenuClass(target);
    $("#input-group").show();
}

/**
 * 点击基金收益触发的事件
 */
function fundMakeShare(target) {
    $.post("http://localhost:8082/rest/makeshare", JSON.stringify(objectJson), function (data) {
        gradient(data);
    }, "json");
    changeMenuClass(target);
    $("#input-group").hide();
}


/**
 * 点击基金触发的事件
 */
function choiceFund(fundCode, fundName) {
    $("#input").html(fundName);
    $("#input").val(fundName);
    objectJson = {code: fundCode}
    $.post("http://localhost:8082/rest/fundNetworth", JSON.stringify(objectJson), function (data) {
        lineOption(data);
    }, "json");
    echartShow();
}


/**
 * 点击菜单,变化菜单样式
 */
function changeMenuClass(target) {
    echartShow();
    $("li").removeClass("active");
    $(target).parent().addClass("active");
}

/**
 * 展示管理界面
 */
function manage(target) {
    changeMenuClass(target);
    echartHide();
}