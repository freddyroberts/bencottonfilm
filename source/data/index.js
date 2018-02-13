var package = require('./../../package.json');

module.exports = {
    "_comment": "",
    "name": "Ben Cotton Film",
    "description": "",
    "version": package.version || "",
    "environment": process.env.NODE_ENV || "development",
    "production": (process.env.NODE_ENV === "production")
}
