var app = angular.module("app");

app.service("GuidesService", ["$http", function ($http) {
    var url = "/guides/";
    var guides = [];
    
//    this.getGuidesNav = function() {
//        $http.get(url + "/types/")
//            .then(function(response){
//                
//            })
//    }

    this.getAllGuides = function () {
        return $http.get(url)
            .then(function (response) {
                return response.data;
            })
    }

    this.updateGuide = function (guide, index) {
        $http.put(url + guide._id, guide)
            .then(
                function (response) {
                    self.guides[index] = response.data;
                    return;
                },
                function (response) {
                    console.log(response.data);
                    return;
                }
            )
    }

    this.addComment = function (guide, comment, index) {
        guide.comments.push(comment);
        this.updateGuide(guide, index);
        return;
    }

    this.addReply = function (guide, commentIndex, reply, index) {
        console.log(guide);
        guide.comments[commentIndex].replies.push(reply);
        this.updateGuide(guide, index);
        return;
    }

    this.deleteComment = function(guide, commentIndex, index) {
        guide.comments.splice(commentIndex, 1);
        this.updateGuide(guide, index);
        return;
    }

    this.deleteReply = function(guide, commentIndex, replyIndex, index) {
        guide.comments[commentIndex].replies.splice(replyIndex, 1);
        this.updateGuide(guide, index);
        return;
    }

}])