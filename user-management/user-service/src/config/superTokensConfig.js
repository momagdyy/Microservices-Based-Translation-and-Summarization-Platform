const supertokens = require("supertokens-node");

supertokens.init({
    framework: "express",
    supertokens: { connectionURI: "https://try.supertokens.io" },
    appInfo: {
        appName: "UserService",
        apiDomain: process.env.API_DOMAIN || "http://localhost:3000",
        websiteDomain: process.env.WEBSITE_DOMAIN || "http://localhost:3000",
    },
    recipeList: [
        require("supertokens-node/recipe/session"),
        require("supertokens-node/recipe/thirdpartyemailpassword"),
    ],
});

module.exports = supertokens;
