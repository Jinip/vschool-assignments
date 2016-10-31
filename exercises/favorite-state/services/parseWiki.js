var app = angular.module("app");

app.service("parseWiki", function(){
    this.getAbout = function(data){
        var wrapper = document.createElement("div");
        wrapper.innerHTML = data;
        
        var about = [].slice.call(wrapper.querySelectorAll("#mw-content-text p"));
        
        about = about.splice(0, 3);
        
        for (var i = 0; i < about.length; i++){
            about[i] = "<p>" + about[i].innerHTML + "</p>";
        }
        
        about = about.join("");
        
        return about;
    }
})