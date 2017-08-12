var friends = require('../data/friends.js');

module.exports = function(app) {

    app.get('/api/friends', function(req, res){
        res.json(friends);
    }); 

    app.post('/api/friends', function(req, res) {
        var user = req.body;
        //call the findMatch function passing the new user information
        var friendMatch = findMatch(user);

        //send back the matched user to html ti display in a modal box
        res.json(friendMatch);
        friends.push(user);
        console.log(friends)
    });    
}

function findMatch(user){
    var bestMatchDiff = 0; 
    var tmpScoreDiff, bestMatch = 0;

    friends.forEach(function(curUser, i){
        // console.log(bestMatchDiff, tmpScoreDiff, bestMatch);
        tmpScoreDiff=0;
        for(j = 0; j < user.scores.length; j++){
            tmpScoreDiff += Math.abs(user.scores[j] - curUser.scores[j]);
        }
        if(bestMatchDiff > tmpScoreDiff || i===0){
            bestMatchDiff = tmpScoreDiff;
            bestMatch = i;
            console.log(bestMatchDiff, tmpScoreDiff, bestMatch);
        }
    });

    console.log(friends[bestMatch]);
    return friends[bestMatch];
    console.log(friends);
}