const { signUp, signIn } = require("supertokens-node/recipe/thirdpartyemailpassword");

exports.registerUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const response = await signUp(email, password);
        res.status(201).json({ message: "User registered successfully", user: response });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const response = await signIn(email, password);
        res.status(200).json({ message: "User logged in successfully", user: response });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
