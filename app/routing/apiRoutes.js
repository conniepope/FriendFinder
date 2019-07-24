// LOAD DATA ---------------------------

var friends = require("../data/friends");

// ROUTING -----------------------------

module.exports = function(app) {

    // API GET Requests ----------

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    
     // res.send(name + ' ' + photo + ' ' + options);

    });

    // API POST Requests ----------

    app.post("/api/friends", function(req, res) {
        
        console.log(req.body)

        var newFriend = req.body;
        var perfectFriend = 0;
        
        // parseInt for answers to questions
        for(var i = 0; i < newFriend.questions.length; i++) {
            newFriend.questions[i] = parseInt(newFriend.questions[i]);
        }
        
        // compare the difference between current user's scores against those from other users, question by question. 
        for(var i = 0; i < friends.length; i++) {
            //Add up the differences to calculate the `totalDifference`. 
            var totalDifference = 0;
            // find the absolute value of the differences
            for(var j = 0; j < friends[i].questions.length; j++) {
                var difference = Math.abs(newFriend.questions[j] - friends[i].questions[j]);
                totalDifference += difference;
                
            }
        
        // The closest match will be the user with the least amount of difference.
            perfectFriend = i;
        }

        // add newFriend to friends array 
        friends.push(newFriend)

        //send result back as a match
        res.json(friends[perfectFriend]);

    })
}
