$("#submit").click(function(){
    var name = "<td>" + $("#name").val() + "</td>";
    var game = "<td>" + $("#game").val() + "</td>";
    var date = "<td>" + $("#date").val() + "</td>";
    var score = "<td>" + $("#score").val() + "</td>";
    console.log(score);
    var trash = ""
    var isTrash = $("input:checked").length;
    
    if (isTrash){
        trash = "<td>" + getTrashTalk() + "</td>";
    } else {
        trash = "<td></td>";
    }
    
    var newRow = "<tr>" + name + game + date + score + trash + "</tr>";
    $("#table-body").html($("#table-body").html() + newRow);
})

function getTrashTalk(){
    var random = Math.floor(Math.random() * 3);
    
    switch(random){
        case 0:
            return "Sup noobs?";
        case 1:
            return "Beat this, losers!";
        case 2:
            return "GG EZ"
    }
}