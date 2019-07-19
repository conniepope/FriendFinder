app.get("api/friends", function(req, res) {
    return res.json(friends);
  });

app.post("api/friends", function(req, res) {

    var newFriend = document.getElementById("name").value;

    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
});

// LOGIC ---------------------------------------------
var newName = document.getElementById("name").value;
var newImage = document.getElementById("photo-image").value;
//take in the answers of all of the questions
var newAnswerArray = [];
var questions = document.getElementByClassName("options").value;
console.log(questions)
// .push(newAnswerArray);
// var Q2 = document.getElementById("options-2").value.push(newAnswerArray);
// var Q3 = document.getElementById("options-3").value.push(newAnswerArray);
// var Q4 = document.getElementById("options-4").value.push(newAnswerArray);
// var Q5 = document.getElementById("options-5").value.push(newAnswerArray);
// var Q6 = document.getElementById("options-6").value.push(newAnswerArray);
// var Q7 = document.getElementById("options-7").value.push(newAnswerArray);
// var Q8 = document.getElementById("options-8").value.push(newAnswerArray);
// var Q9 = document.getElementById("options-9").value.push(newAnswerArray);
// var Q10 = document.getElementById("options-10").value.push(newAnswerArray);

// compare the difference between current user's scores against those from other users, question by question. 

//Add up the differences to calculate the `totalDifference`. 
// * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
// * Example:
// * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
// * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
// * Total Difference: **2 + 1 + 2 =** **_5_**

// * The closest match will be the user with the least amount of difference.

//display the result as a modal pop-up. The modal should display both the name and picture of the closest match.
