$(document).ready(function(){
    $("form").submit(function(){
        var data = [];
        $("input[type='text']", this).each(function(i){
            data[i] = $(this).val();
        });
        var appendStr = "";
        for(var i = 0; i < data.length; i++)
        {
            appendStr += "<td>" + data[i] + "</td>";
        }
        $("table").append("<tr>" + appendStr + "</tr>");
        return false;
    });
});