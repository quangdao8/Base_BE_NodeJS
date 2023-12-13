const express = require("express");
const authRoute = require("./auth.route");

const router = express.Router();

// const defaultRoutes = [
//     {
//         path: "/auth",
//         route: authRoute,
//     },
// ];

// defaultRoutes.forEach((route) => {
//     router.use(route.path, route.route);
// });

router.use("/auth", authRoute);

module.exports = router;
