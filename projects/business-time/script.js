var state = "Gallery"
var complete = true;
$(".overlay").height = window.innerHeight;
console.log(window.innerHeight);

$("a").click(function (e) {
    e.preventDefault();
    
    if (this.innerHTML !== state && complete === true){
        state = this.innerHTML;
        changePage(this.href, this.innerHTML);
    }
    $(".overlay").height = window.innerHeight;
});

function changePage(url, name) {
    complete = false;
    
    var main = document.querySelector(".main");
    
    $.get(url, function (responseText) {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = responseText;

        oldContent = document.querySelector(".content");
        newContent = wrapper.querySelector(".content");
        main.appendChild(newContent);
        animate(oldContent, newContent, name);
    })
}

function animate(oldContent, newContent, name) {
    var color = "";
    var backgroundColor = "";
    console.log(name);
    console.log(newContent);
    switch (name) {
    case "About":
        color = "white";
        backgroundColor = "rgb(181,38,27)";
        backgroundURL = "/images/backgrounds/background_red_edit_gimp.jpg"
        break;
    case "Contact":
        color = "yellow";
        backgroundColor = "rgb(250,237,96)";
        backgroundURL = "/images/backgrounds/background_yellow_edit_gimp.jpg"
        break;
    case "Gallery":
        color = "#9B7037";
        backgroundColor = "rgb(41,31,81)";
        backgroundURL = "/images/backgrounds/background_girl_edit_gimp.jpg";
        break;
    }
    oldContent.style.position = "absolute";

    console.log(backgroundColor);
    $(".navbar").css({
        "background-color": backgroundColor.toString()
    })
    
    $(".navbar-default").css({
        "background-color": backgroundColor.toString()
    })

    $("body").css({
        "background-image": "url(" + backgroundURL + ")"
    });
    if (name === "About") {
        $("body").css({
            "background-position": "right center"
        });
    } else {
        $("body").css({
            "background-position": "left center"
        });
    }

    var fadeOut = oldContent.animate({
        opacity: [1, 0]
    }, 1000, false);

    var fadeIn = newContent.animate({
        opacity: [0, 1]
    }, 1000, false);

    fadeIn.onfinish = function () {
        oldContent.parentNode.removeChild(oldContent);
        complete = true;
    };
}