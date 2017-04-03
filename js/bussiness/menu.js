/**
 * 点击基金曲线图触发的事件
 */
function fundNetWorth(target) {
    $.post("http://localhost:8082/rest/fundNetworth", JSON.stringify(objectJson), function (data) {
        lineOption(data);
    }, "json");
    $("#input-group").show();
    changeMenuClass(target);
}

/**
 * 点击基金收益触发的事件
 */
function fundMakeShare(target) {
    $.post("http://localhost:8082/rest/makeshare", JSON.stringify(objectJson), function (data) {
        gradient(data);
    }, "json");
    $("#input-group").hide();
    changeMenuClass(target)
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
}


/**
 * 点击菜单,变化菜单样式
 */
function changeMenuClass(target) {
    $("li").removeClass("active");
    $(target).parent().addClass("active");
}