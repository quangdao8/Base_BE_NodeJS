const { UserModel } = require("../models/index");

const signin = async (username, password) => {
    if (!username || !password) {
        return {
            statusCode: 400,
            message: "Username or password required",
        };
    }
    const user = await User.findOne({ username });

    if (!user) {
        return {
            statusCode: 401,
            message: "Username or password incorrect",
        };
    }
    return {
        statusCode: 200,
        message: "successfullLogin",
        user,
    };
};

const getUser = async () => {
    const user = await UserModel.find({ username: "daopq" });
    console.log("user", user);
    if (!user) {
        return {
            statusCode: 401,
            message: "failed to find user",
        };
    }
    return {
        statusCode: 200,
        message: "successful",
        user,
    };
};

module.exports = {
    signin,
    getUser,
};
