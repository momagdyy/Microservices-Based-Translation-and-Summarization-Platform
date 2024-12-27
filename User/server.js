require("dotenv").config();
const express = require("express");
const supertokens = require("./config/supertokens");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

// Mount user routes
app.use("/auth", userRoutes);

// Server startup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`User Service is running on http://localhost:${PORT}`);
});
