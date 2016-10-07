$().ready(function(){
    var goomVal = 5;
    var bombVal = 7;
    var cheepVal = 11;

    var goomTotal = 12;
    var bombTotal = 8;
    var cheepTotal = 5;

    $(".add").click(add);
    
    $(".subtract").click(subtract);
    
    $("#modeToggleBtn").click(toggleMode);

    updateTally();

    function add(){

        $("#bing").get(0).play();
        var baddie = this.parentElement.children[1].innerHTML.toString();

        if (baddie === "Goomba"){
            goomTotal++;
        } else if(baddie === "Bob Omb"){
            bombTotal++;
        } else {
            cheepTotal++;
        }
        updateTally();

    }

    function subtract(){
        $("#runAway").get(0).play();
        var baddie = this.parentElement.children[1].innerHTML.toString();
        if (baddie === "Goomba"){
            if (goomTotal > 0){
                goomTotal--;
            }
        } else if(baddie === "Bob Omb"){
            if (bombTotal > 0){
                bombTotal--;
            }
        } else {
            if (cheepTotal > 0){
                cheepTotal--;
            }
        }
        updateTally();
    }
    
    function toggleMode(){
        $(".tally, body, .btn-danger, .mini").toggleClass("night-mode");
        
        if($("#modeToggleBtn").html() === "Dark Mode"){
            $("#modeToggleBtn").html("Light Mode");
        } else {
            $("#modeToggleBtn").html("Dark Mode");
        }
    }

    function updateTally(){
        var goomBill = goomTotal * goomVal;
        var bombBill = bombTotal * bombVal;
        var cheepBill = cheepTotal * cheepVal;

        var grandTotal = goomBill + bombBill + cheepBill;
        var totalBaddies = goomTotal + bombTotal + cheepTotal;

        $("#goomTally").html(goomTotal);
        $("#goomTallyXS").html(goomTotal);

        $("#bombTally").html(bombTotal);
        $("#bombTallyXS").html(bombTotal);

        $("#cheepTally").html(cheepTotal);
        $("#cheepTallyXS").html(cheepTotal);

        $("#peachTally").html(totalBaddies);
        $("#bill").html(grandTotal);
    }
});
