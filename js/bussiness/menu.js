/**
 * 展示图表
 */
function echartShow() {
    $("#echartDiv").show();
    $("#manageDiv").hide();
    $("#subjectDiv").hide();

}

/**
 * 展示管理界面
 */
function managerShow() {
    $("#echartDiv").hide();
    $("#manageDiv").show();
    $("#subjectDiv").hide();
}

/**
 * 展示主题界面
 */
function subjectShow() {
    $("#echartDiv").hide();
    $("#manageDiv").hide();
    $("#subjectDiv").show();
}

/**
 * 点击基金曲线图触发的事件
 */
function fundNetWorth(target) {
    $.post(path + "rest/fundNetworth", JSON.stringify(objectJson), function (data) {
        lineOption(data);
    }, "json");
    changeMenuClass(target);
    $("#input-group").show();
}

/**
 * 点击基金收益触发的事件
 */
function fundMakeShare(target) {
    $.post(path + "rest/makeshare", JSON.stringify(objectJson), function (data) {
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
    objectJson = {code: fundCode};
    $.post(path + "rest/fundNetworth", JSON.stringify(objectJson), function (data) {
        lineOption(data);
    }, "json");
    echartShow();
}

/**
 * 主题下的基金
 */
function choiceSubjectFund(subject) {
    $("#subjectInput").html(subject);
    $("#subjectInput").val(subject);
    objectJson = {code: subject};
    $.post(path + "rest/subject/fund", JSON.stringify(objectJson), function (data) {
        for (var i = 0; i < data.funds.length; i++) {
            var ss = ("<li><a onclick=\"choiceFund('" + data.funds[i].code + "','" + data.funds[i].name + "')\">" +
                data.funds[i].name + "</a></li>");
            $("#fundList").html(ss);
        }
    }, "json");
}


/**
 * 点击菜单,变化菜单样式
 *
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
    managerShow();
}

/**
 * 展示主题基金
 * @param target
 */
function subject(target) {
    changeMenuClass(target);
    subjectShow();
}