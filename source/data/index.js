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
			"title": "Maclaren Barbers - Reklam",
			"description": "Fotograf",
			"video": "https://www.youtube.com/watch?v=0G291fPr9Yc",
			"image": "assets/images/maclaren.png"
		},
		{
			"client": "Ben Cotton",
			"title": "Show Reel 2018",
			"description": "Fotograf och Edit",
			"video": "https://vimeo.com/242926725",
			"image": "assets/images/bc-reel.png"
		},
		{
			"client": "Nord",
			"title": "Stage 3 Official Demo",
			"description": "Fotograf",
			"video": "https://youtu.be/tVBKto6Cfqo",
			"image": "assets/images/nord.png"
		},
		{
			"client": "Intersport",
			"title": "Intersports - Fotbollstuben",
			"description": "Fotograf",
			"video": "https://www.youtube.com/watch?v=H6Mf_h8DDUQ",
			"image": "assets/images/intersport.png"
		},
		{
			"client": "Marabou",
			"title": "Marabou - Mmm... Mästarna",
			"description": "Fotograf",
			"video": "https://www.youtube.com/watch?time_continue=1&v=O9m0R4eFbhg",
			"image": "assets/images/marabou.png"
		},
		{
			"client": "Sportswik",
			"title": "Sportswik - TV4 Commericial",
			"description": "Fotograf och Edit",
			"video": "https://www.youtube.com/watch?v=gbKLJu714QQ",
			"image": "assets/images/sportswik.png"
		},
		{
			"client": "Västerbotten",
			"title": "Västerbotten’s Ost med Lisa Lemke",
			"description": "Fotograf",
			"video": "https://www.youtube.com/watch?v=oUj0-yius8c",
			"image": "assets/images/vasterbottonost.png"
		}
	]
}
