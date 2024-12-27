const express = require("express");
const { verifySession } = require("supertokens-node/recipe/session/framework/express");

const router = express.Router();

// Supertokens pre-built auth APIs
const { middleware } = require("supertokens-node/framework/express");
router.use(middleware());

// Example protected route
router.get("/protected", verifySession(), (req, res) => {
    res.status(200).json({ message: "You have access to this protected route!" });
});

// Catch all Supertokens errors
const { errorHandler } = require("supertokens-node/framework/express");
router.use(errorHandler());

module.exports = router;
