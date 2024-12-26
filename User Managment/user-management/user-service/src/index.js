require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const superTokens = require("./config/superTokensConfig");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(bodyParser.json());

// SuperTokens Middleware
app.use(supertokens.middleware());

// Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

// SuperTokens Error Handler
app.use(supertokens.errorHandler());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
