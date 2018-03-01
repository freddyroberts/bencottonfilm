var package = require('./../../package.json');

module.exports = {
    "_comment": "",
    "name": "Ben Cotton Film",
    "description": "Benjamin Cotton | DP/EDITOR/PRODUCER",
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
		},
		{
			"client": "Livet-blir-bättre",
			"title": "Livet-blir-bättre",
			"description": "Fotograf",
			"video": "https://www.facebook.com/andreasjonsson.nu/videos/1436397879787168/",
			"image": "assets/images/livet-blir-battre.png"
		},
		{
			"client": "P4",
			"title": "P4 - 40 År",
			"description": "Fotograf",
			"video": "https://www.youtube.com/watch?v=Zu1MzwxVUpk",
			"image": "assets/images/p4.png"
		},
		{
			"client": "Viafree",
			"title": "Viafree - Påkostat",
			"description": "Fotograf",
			"video": "https://www.viafree.se/program/influencers-x-viafree/random-making-movies/sasong-1/875962",
			"image": "assets/images/pakostat.png"
		},
		{
			"client": "Sony",
			"title": " Sony - No more Limits",
			"description": "Fotograf och Redigera",
			"video": "https://www.youtube.com/watch?v=JzKwZ2Nt1cQ",
			"image": "assets/images/sony.png"
		},
		{
			"client": "SANDVIK",
			"title": "SANDVIK - MAN VS MACHINE ",
			"description": "Fotograf",
			"video": "https://www.youtube.com/watch?v=e_EdgMjY8Fo",
			"image": "assets/images/sandvik.png"
		},
		{
			"client": "Marabou",
			"title": "Mmm… Mästarna S01",
			"description": "Fotograf",
			"video": "https://www.youtube.com/watch?v=1Xs4kEkKeWk",
			"image": "assets/images/marabou-s1.png"
		},
		{
			"client": "LIfesum",
			"title": "LIfesum App - Demo",
			"description": "Redigera",
			"video": "https://vimeo.com/140842137",
			"image": "assets/images/lifsum.png"
		},
		{
			"client": "Josefin Cummings",
			"title": "Josefin Cummings - Guldsmed",
			"description": "Fotograf och Redigera",
			"video": "https://vimeo.com/131964888",
			"image": "assets/images/cummings.png"
		}
	]
}
