const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/scriptr"
);

const userSeed = [
    {
        "sub": "github|39862745",
        "nickname": "Lamuel27",
        "name": "Sam Rehlinger",
        "picture": "https://avatars2.githubusercontent.com/u/39862745?v=4",
        "updated_at": "2019-03-11T06:02:51.465Z"
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " Users inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });