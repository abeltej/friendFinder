var path = require("path");

var friendsArray = require("../data/friends")

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendsArray);
    });
    // app.post("/api/friends", function (req, res) {
    //     console.log(req.body)
    //     return res.json(friendsArray[0]);
    // });


    app.post('/api/friends', function(req, res){
            var bestMatch = {
                name: "",
                photo: "",
                friendDifference: 1000
            };

            var userData = req.body;
            var userName = userData.name;
            var userPhoto = userData.photo;
            var userScores = userData.scores;

            var totalDifference = 0;

            for (var i=0; i< friendsArray.length; i++) {

                console.log(friendsArray[i].name);
                totalDifference = 0;

                for (var j=0; j<friendsArray[i].scores[j]; j++){

                    totalDifference += Math.abs(parseInt(userScores[j] - friendsArray[i].scores[j]));
                }

                if (totalDifference <= bestMatch.friendDifference){

                    bestMatch.name = friendsArray[i].name;
                    bestMatch.photo = friendsArray[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }

            friendsArray.push(userData)

            res.json(bestMatch);
    });      
}