var tmi = require("tmi.js")
var channel = "alzexx"

var config = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "alzexx",
        password: "oauth:16zg748gyu496epa8gff84g39j07og"
    },
    channels: ["alzexx", "kaia", "selphy", "veibae", "admiralbahroo", "yuuie", "bjw", "xlice", "k3lly01", "mendokusaii", "zero", "woops", "dafran", "neko", "yourprincess", "niku_Senpai", "beastrollmc", "cecevr", "thenolalex", "dilted", "j4key", "ashuneragames", "atamanman", "greaterpantsu", "waifudeliveryservice", "cerlam", "revaq", "trunoom", "kromia", "scifri", "surefour", "cxlibri", "elite", "jaeroar", "kuro_ken", "lost_pause_", "namikochan", "cantaperme92", "BaburuBaburu", "anniefuchsia", "averse", "scrubing", "zero", "averse", "berph_San", "bjw", "capitanetoinon", "ca_ramel", "uandmeems", "vernly", "celerity", "cellbit", "chewiemelodies", "chu8", "cosmoszr", "cutedog_", "domadness", "eff2ct", "elegy", "bittie", "eternalenvvy", "failverde", "faux", "cosmoszr", "zero", "froggen", "gosu", "gunnemanlac", "hashinshin", "itshafu", "jendenise", "kairuchan", "kira", "kraigiee", "kyoslilmonster", "myn_alkapone", "kayuun", "dearcindyphan", "miaayana", "navioot", "nightbIue3", "nyannersz", "onlyafro", "qttsix", "zero", "wadu", "wolsk", "xigneon", "yasserm55", "zenlx", "zrush", "chocpocalypse", "Nattsume", "shiphtur", "myun", "Iolnani", "theanlmeman", "renny", "enviosity", "boxbox", "wolsk", "elure", "namiko", "thorw", "trihex", "sleepy", "sweezy", "celerity", "kittychipz", "heylauren"]
}

var client = new tmi.client(config)
client.connect();

var http = require("http");
setInterval(function() {
    http.get("http://farmerapp1.herokuapp.com");
}, 300000); // every 5 minutes (300000)
