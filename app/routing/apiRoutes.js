app.get("app/data/friends", function(req, res) {
    return res.json(friends);
  });

app.post("app/data/friends", function(req, res) {

    var newFriend = req.body;

    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
});