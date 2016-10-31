$("#name").html(localStorage.getItem("name"));

$("#submit").click(function() {
    $("#name").html($("#name-input").val());
    localStorage.setItem("name", $("#name-input").val());
})