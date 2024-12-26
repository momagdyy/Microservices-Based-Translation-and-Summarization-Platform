const { User, Log } = require("../models/user");

exports.getUserProfile = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findByPk(userId, {
            include: [Log],
        });
        if (!user) return res.status(404).json({ error: "User not found" });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};

exports.updateUserProfile = async (req, res) => {
    const { userId } = req.params;
    const { name, email } = req.body;
    try {
        const user = await User.findByPk(userId);
        if (!user) return res.status(404).json({ error: "User not found" });

        user.name = name || user.name;
        user.email = email || user.email;
        await user.save();

        res.status(200).json({ message: "User updated successfully", user });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};
