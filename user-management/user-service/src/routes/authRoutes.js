const express = require("express");
const { signUp, signIn } = require("supertokens-node/recipe/thirdpartyemailpassword");
const router = express.Router();

router.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    try {
        const response = await signUp(email, password);
        res.status(201).json(response);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    try {
        const response = await signIn(email, password);
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
