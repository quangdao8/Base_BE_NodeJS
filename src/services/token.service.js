const jwt = require("jsonwebtoken");
const config = require("../config/config");
const TokenModel = require("../models/token.model");

/**
 * Generate token
 * @param {ObjectId} userId
 * @param {Moment} expires
 * @param {string} type
 * @param {string} [secret]
 * @returns {string}
 */
const generateToken = (userId, expires, type, secret = config.secret_token) => {
    const payload = {
        _id: userId,
        exp: expires.unix(),
        type,
    };
    return jwt.sign(payload, secret);
};

const verifyToken = (token, type) => {
    const payload = jwt.verify(token, config.secret_token);

    // const tokenDoc = await TokenModel.create({

    // });
};
