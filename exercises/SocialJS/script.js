var friendStir = {  
    name: "Nephi",
    age: 31,
    hometown: "Salt Lake City, Utah",
    posts: [
        "I love skiing", 
        "Ugh, this inversion is killing me", 
        "No, seriously, the air is literally killing me"
    ],
    friends: [
        {
            name: "Zoe",
            age: 21,
            hometown: "Roswell, New Mexico",
            posts: [
                "Donald Trump is our alien saviour! #iwanttobelieve", 
                "Meet me in the desert for a selfie with my little gray friend lol", 
                "OMG guys, these mashed potatoes look like Michael Jackson!"
            ],
            friends: [
                {
                    name: "Rose Quartz",
                    age: 55,
                    hometown: "Portland, Oregon",
                    posts: [
                        "My spirit yearns for some Reiki", 
                        "Good fortune is coming for all my Sagittarius dears this month: Jupiter is ascending. And no, I'm not talking about that movie. What does Channing Tatum have to do with astrology?",
                        "Got a call from my darling Charlie, today. He asked how I was liking Portland. The nudist biker gang and King of Ducks collective had a showdown in front of my house yesterday. Loving it." 
                    ],
                    friends: [
                        {
                            name: "Charlie",
                            age: 52,
                            hometown: "New York, New York",
                            posts: [
                                "Subway's on fire... again.",
                                "Missing my dear friend, Rose, today.",
                                "What the hell, Portland?"
                            ],
                            friends: [],
                            addFriend: function(friend) {
                                this.friends.push(friend);
                            },
                            addPost: function(post){
                                this.posts.push(post);
                            }
                        }
                    ],
                    addFriend: function(friend) {
                        this.friends.push(friend);
                    },
                    addPost: function(post){
                        this.posts.push(post);
                    }
                },
            ],
            addFriend: function(friend) {
                this.friends.push(friend);
            },
            addPost: function(post){
                this.posts.push(post);
            }
        },
    ],
    addFriend: function(friend) {
        this.friends.push(friend);
    },
    addPost: function(post){
        this.posts.push(post);
    }
}