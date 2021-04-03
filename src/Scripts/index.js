$(document).ready(function () {
    $("#btnShowMessage").click(function () {
        var name = $("#txtName").val();
        var message = "";
        if (name != "") {
            message = "Hello " + name;
        }
        else {
            message = "Name can't be blank";
        }
        $("#lblMessage").text(message);
    });
});