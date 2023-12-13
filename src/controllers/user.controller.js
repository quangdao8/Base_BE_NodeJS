const { authService } = require("../services/index");
const { UserModel } = require("../models");

const signin = async (req, res) => {
    try {
        const { username, password } = req.body;

        const { statusCode, message, user } = await authService.signin(username, password);

        return res.status(statusCode).json({
            message,
        });
    } catch (error) {
        console.log("error", error);
        return res.status(500);
    }
};

const getUser = async (req, res) => {
    try {
        const user = await UserModel.find({});
        return res.status(200).json({
            message: "success",
            user,
        });
    } catch (error) {
        return res.status(500).json({
            message: "error",
        });
    }
};

module.exports = {
    signin,
    getUser,
};
