/**
 * Created by zhanghao1 on 2018/5/29.
 */
(function(){
    $.getJSON("../config/config.json",function (data) {
        var list = data.list;
        var dom = "";
        for(var i = 0;i<list.length;i++){
            dom += '<div class="section row">' +
                '<h2 class="col">' +
                list[i].title +
                '</h2>';
            for(var j = 0;j<list[i].content.length;j++){
                dom +=  '<div class="section-text col-right">' +
                    list[i].content[j] +
                    '</div>';
            }
            dom += '</div>';
        }
        $("#container").append(dom);
    });
})(Zepto);

