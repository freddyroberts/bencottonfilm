var package = require('./../../package.json');

module.exports = {
    "_comment": "",
    "name": "Ben Cotton Film",
    "description": "",
    "version": package.version || "",
    "environment": process.env.NODE_ENV || "development",
    "production": (process.env.NODE_ENV === "production"),
	"videos": [
		{
			"client": "Maclaren Barbers",
			"title": "Reklam",
			"description": "Producer",
			"video": "https://youtu.be/0G291fPr9Yc",
			"image": ""
		},
		{
			"client": "Ben Cotton",
			"title": "Show Reel 2017",
			"description": "",
			"video": "https://vimeo.com/242926725",
			"image": ""
		},
		{
			"client": "Nord",
			"title": "Stage 3 Official Demo",
			"description": "",
			"video": "https://youtu.be/tVBKto6Cfqo",
			"image": ""
		}
	]
}
