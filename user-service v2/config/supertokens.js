const supertokens = require("supertokens-node");
const EmailPassword = require("supertokens-node/recipe/emailpassword");
const Session = require("supertokens-node/recipe/session");
const EmailVerification = require("supertokens-node/recipe/emailverification");

supertokens.init({
    framework: "express",
    supertokens: {
        connectionURI: process.env.SUPERTOKENS_CONNECTION_URI,
        apiKey: process.env.SUPERTOKENS_API_KEY,
    },
    appInfo: {
        appName: "User Service",
        apiDomain: "http://localhost:3000",
        websiteDomain: "http://localhost:3000",
    },
    recipeList: [
        EmailPassword.init(),
        Session.init(),
        EmailVerification.init({
            mode: "OPTIONAL",
            emailDelivery: {
                service: {
                    sendEmail: async (emailInput) => {
                        console.log("Email sent to:", emailInput.email);
                        console.log("Verification link:", emailInput.url);
                    },
                },
            },
        }),
    ],
});

module.exports = supertokens;
