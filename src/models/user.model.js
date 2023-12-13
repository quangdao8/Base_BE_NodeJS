const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please tell us your name"],
    },
    username: {
        type: String,
        trim: true,
        required: [true, "Please tell us your username"],
    },
    password: {
        type: String,
        trim: true,
        required: [true, "Please tell us your password"],
    },
    roles: {
        type: [String],
        enum: ["user", "admin", "super_admin"],
        default: ["user"],
    },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
