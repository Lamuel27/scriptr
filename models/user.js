const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    sub: { type: String, required: true },
    nickname: { type: String },
    name: { type: String },
    picture: { type: String },
    updated_at: { type: String },
    correct: { type: Number },
    total: { type: Number }
});

const User = mongoose.model("User", userSchema);

module.exports = User;