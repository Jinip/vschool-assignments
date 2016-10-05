var width = 300;
var height;
var known = [];
var kittens = document.getElementsByName("placekitten");

for (var i = 0; i < kittens.length; i++){
    for (var j = 0; j < 10; j++){
        if (i % 2 === 0 && i !== 0){
            height = 1200 - known[i - 1] - known[i - 2];
            alert(i)
            continue;
        }
        height = Math.ceil(Math.random() * 20) * 50;
        //width = Math.ceil(Math.random() * 4) * 100;
        if (known.indexOf(height) === -1){
            known.push(height);
            break;
        }
    }
    kittens[i].src = "http://placekitten.com/" + width + "/" + height;
}