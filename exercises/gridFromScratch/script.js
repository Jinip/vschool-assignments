var full = 1200;
var threeQuarter = full * .75;
var half = full * .5;
var quarter = full * .25;

var fullDivs = document.getElementsByName("full");
var threeQuarterDivs = document.getElementsByName("threeQuarter");
var halfDivs = document.getElementsByName("half");
var quarterDivs = document.getElementsByName("quarter");

window.addEventListener("resize", resize);

function resizeDivs(size, collection, block)
{
    for (var i = 0; i < collection.length; i++){
        collection[i].style.width = size;
        if (block){
            collection[i].style.display = "block";
        }
        else{
            collection[i].style.display = "inline-block";
        }
    }
}

function resize(){
    if (window.innerWidth >= full){
        resizeDivs("100%", fullDivs);
        resizeDivs("75%", threeQuarterDivs);
        resizeDivs("50%", halfDivs);
        resizeDivs("25%", quarterDivs);
    } 
    else if (window.innerWidth >= threeQuarter && window.innerWidth < full){
        resizeDivs("100%", fullDivs);
        resizeDivs("100%", threeQuarterDivs);
        resizeDivs("50%", halfDivs);
        resizeDivs("25%", quarterDivs);
    }
    else if (window.innerWidth >= half && window.innerWidth < threeQuarter){
        resizeDivs("100%", fullDivs);
        resizeDivs("100%", threeQuarterDivs);
        resizeDivs("100%", halfDivs);
        resizeDivs("50%", quarterDivs);
    }
    else if (window.innerWidth >= quarter && window.innerWidth < half){
        resizeDivs("100%", fullDivs);
        resizeDivs("100%", threeQuarterDivs);
        resizeDivs("100%", halfDivs);
        resizeDivs("100%", quarterDivs);
    }
}

