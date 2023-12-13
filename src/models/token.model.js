const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    type: {
        type: String,
        required: true,
    },
    expires: {
        type: Date,
        required: true,
    },
});

const TokenModel = mongoose.model("Token", tokenSchema);

module.exports = TokenModel;
