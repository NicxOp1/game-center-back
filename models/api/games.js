const games = [
  {
      name: "Resident Evil 4",
      description:
      "Resident Evil 4 preserves the essence of the original game, while introducing updated game mechanics,a reimagined story, and stunning next-gen graphics that make it in the ultimate survival horror experience where life and death, terror and catharsis intersect.",
    photo: [
      "https://image.api.playstation.com/vulcan/ap/rnd/202210/0712/BiS5QP6h4506JHyJlZlVzK9D.jpg",
    ],
    video: "https://cdn.akamai.steamstatic.com/steam/apps/256912615/movie480_vp9.webm?t=1666665313",
    price: 40,
    date: "2022-12-12",
    buyed: ["6397862064e1cf96b51d39c8","6397862064e1cf96b51d39c6","6397862064e1cf96b51d39c7"],
    rate: 4.5,
    category:["Action", "Adventure"]
  },
  {name: "God of War",
    description:
      "God of War is a hack and slash video game franchise created by SCE Santa Monica Studio and distributed by Sony Computer Entertainment.",
    photo: [
      "https://i.blogs.es/4c3cf2/godofwarragnarok/840_560.jpeg",
    ],
    video: "https://cdn.akamai.steamstatic.com/steam/apps/256864004/movie480_vp9.webm?t=1639001817",
    price: 60,
    date: "2022-09-23",
    buyed: ["6397862064e1cf96b51d39c8","6397862064e1cf96b51d39c7"],
    rate: 5,
    category:["Action", "Adventure", "RPG"]
  },
  {name: "Far Cry 4",
    description:
      "Discover the most diverse Far Cry world to date. With settings ranging from lush jungles to snowy peaks, the entire world is alive...and deadly.",
    photo: [
      "https://img.hype.games/cdn/4fafabc9-6899-4efc-8018-412ef4332ed5COVER---[Ubisoft]-FAR-CRY-4.jpg",
    ],
    video: "https://cdn.akamai.steamstatic.com/steam/apps/2035525/movie480.webm?t=1447365062",
    price: 30,
    date: "2011-03-24",
    buyed: ["6397862064e1cf96b51d39c8","6397862064e1cf96b51d39c7"],
    rate: 4,
    category:[ "Action", "Adventure"]
  },
  {name: "Cyberpunk",
    description:
      "Cyberpunk is a current of science fiction that emerged in the early 1980s, refers to cybernetics (scientific and technological advances) and punk (rebellion and transgression)",
    photo: [
      "https://generacionxbox.com/wp-content/uploads/2020/12/Cyberpunk-2077-4.jpg",
    ],
    video: "https://cdn.akamai.steamstatic.com/steam/apps/256904417/movie480_vp9.webm?t=1662480377",
    price: 60,
    date: "2020-12-8",
    buyed: ["6397862064e1cf96b51d39c8"],
    rate: 3.5,
    category:["RPG"]
  }, 
   {name: "Red Dead Redemption 2",
  description:
    "Arthur Morgan and the Van der Linde gang are wanted outlaws. With federal agents and the nation's best bounty hunters hot on their heels, the gang must thieve and fight their way across the rugged heartland of America to survive. Arthur will have to choose between his own ideals and loyalty to the gang that saw him grow up.",
  photo: [
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1656615305",
  ],
  video: "https://cdn.cloudflare.steamstatic.com/steam/apps/256768283/movie480.webm?t=1574881416",
  price: 78,
  date: "2019-12-5",
  buyed: ["6397862064e1cf96b51d39c8"],
  rate: 4.5,
  category:["Action","Adventure"]
},  {name: "Counter-Strike: Global Offensive",
description:
  "Counter-Strike shocked the video game industry when the unlikely mod became the most played PC action game in the world almost immediately upon its release in August 1999, said Valve's Doug Lombardi. For the past 12 years, it has continued to be one of the most played games in the world, topping competitive gaming tournaments and selling more than 25 million copies of the franchise worldwide. CS:GO promises to expand the award-winning gameplay of CS and bring it to gamers on PC, next-gen consoles, and Mac.",
photo: [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1668125812",
],
video: "https://cdn.cloudflare.steamstatic.com/steam/apps/81958/movie480.webm?t=1554409259",
price: 5,
date: "2012-09-21",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 4.5,
category:["FPS","shooter"]
},  {name: "STAR WARS Jedi: Fallen Order™",
description:
  "Star Wars Jedi: Fallen Order is the ideal example of a Star Wars game in 2019. It's an expert blend of multiple genres. It has characters that you love spending time with. It has the deeply attractive design aesthetic of the movies.",
photo: [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/1172380/header.jpg?t=1651767465",
],
video: "https://cdn.cloudflare.steamstatic.com/steam/apps/256765709/movie480.webm?t=1572357561",
price: 38,
date: "2019-11-15",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 4.5,
category:["Action","Adventure"]
},  {name: "Horizon Zero Dawn™",
description:
  "Experience Aloy's legendary mission to reveal the secrets of a future machine-dominated Earth. Unleash devastating attacks on your prey and explore a majestic open world in this award-winning action RPG!",
photo: [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg?t=1667297464",
],
video: "https://cdn.cloudflare.steamstatic.com/steam/apps/256899640/movie480_vp9.webm?t=1659711061",
price: 30,
date: "2020-09-7",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 3.0,
category:["Adventure"]
}, 
 {name: "After the Fall®",
description:
  "Venture through the ruins of 1980s Los Angeles, use deadly weapons and devastating powers with real-life moves to create your own combat style. Join players from around the world to take on hordes and bosses and make the city a better place than your predecessors left it.",
photo: [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/751630/header.jpg?t=1668787075",
],
video: "https://cdn.cloudflare.steamstatic.com/steam/apps/256863983/movie480_vp9.webm?t=1668787057",
price: 40,
date: "2021-12-3",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 3.5,
category:["Action","VR"]
}
, 
{
name: "Call of Duty®: Modern Warfare® II",
  description:
  "Call of Duty®: Modern Warfare® II plunges players into an unprecedented global conflict featuring the return of the iconic Operators of Task Force 141.",
photo: [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg?t=1670704094",
],
video: "https://cdn.cloudflare.steamstatic.com/steam/apps/256906179/movie480_vp9.webm?t=1663275402",
price: 80,
date: "2022-08-28",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 4.0,
category:["FPS"]
}
,
{name: "EA SPORTS™ FIFA 23",
description:
  "EA SPORTS™ FIFA 23 brings HyperMotion2 technology to Everyone's Game, the FIFA World Cup™ for men and women, which will be available later in the season in the form of updates, the inclusion of club teams women's, Cross-Play* and much more. Enjoy unparalleled realism with more than 19,000 players, more than 700 teams, 100 stadiums and more than 30 leagues. Everything in FIFA 23.",
photo: [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/1811260/ss_55f92d533bc6acc5bf68020ee16a2f4740ffe31d.600x338.jpg?t=1670896659",
],
video: "https://cdn.cloudflare.steamstatic.com/steam/apps/256915486/movie480_vp9.webm?t=1668017731",
price: 60,
date: "2022-02-18",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 2.5,
category:["Sports","Football"]
},  
{
name: "PUBG: BATTLEGROUNDS",
description:
  "Play PUBG: BATTLEGROUNDS for free. Land at strategic locations, loot weapons and supplies, and survive to be the last team standing on different and diverse battlefields.",
photo: [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg?t=1670316059",
],
video: "https://cdn.cloudflare.steamstatic.com/steam/apps/256919601/movie480_vp9.webm?t=1670316051",
price: 0,
date: "2017-10-2",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 4.3,
category:["Survival","Shooter"]
}, 

{
  name: "Grand Theft Auto V",
description:
  "Grand Theft Auto V for PC offers gamers the option to explore the award-winning world of Los Santos and Blaine County in 4K resolution and enjoy gameplay at 60 frames per second.",
photo: [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg?t=1670432616",
],
video: "https://cdn.cloudflare.steamstatic.com/steam/apps/256914073/movie480_vp9.webm?t=1667343808",
price: 70,
date: "2020-12-8",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 4.5,
category:["Action"]
},  
{name: "Assassin's Creed Valhalla",
description:
  "Become a legendary Viking on a quest for glory. Raid your enemies, grow your settlement, and build your political power.",
photo: [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg?t=1670350109",
],
video: "https://cdn.cloudflare.steamstatic.com/steam/apps/256917310/movie480_vp9.webm?t=1669059276",
price: 80,
date: "2018-11-3",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 5.0,
category:["Action","Adventure"]
}, 
 {name: "Forza Horizon 5",
description:
  "Explore the vibrant open world landscapes of Mexico with unlimited fun driving action in the world's best cars. Speed ​​into Hot Wheels Park and experience the most extreme tracks ever designed. Requires Forza Horizon 5 game, expansion sold separately.",
photo: [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg?t=1668017884",
],
video: "https://cdn.cloudflare.steamstatic.com/steam/apps/256859757/movie480_vp9.webm?t=1636489104",
price: 66,
date: "2021-11-9",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 3.0,
category:["Race"]
}, 
 {name: "Need for Speed™ Unbound",
description:
  "Climb to the top and don't get lost. Outwit the police and participate in the weekly qualifiers for the Grand: the ultimate street race. Fill your garage with custom cars with precise details and rock the streets with your style.",
photo: [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/1846380/header.jpg?t=1669984763",
],
video: "https://cdn.cloudflare.steamstatic.com/steam/apps/256913263/movie480_vp9.webm?t=1667318474",
price: 44,
date: "2021-05-14",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 4.5,
category:["Race"]
}, 
 {name: "The Witcher® 3: Wild Hunt",
description:
  "Just as war rages across the Northern Kingdoms, you accept the most challenging contract of your life: track down the Child of Prophecy, a living weapon that can alter the world as we know it.",
photo: [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1668443314",
],
video: "https://cdn.cloudflare.steamstatic.com/steam/apps/256658589/movie480.webm?t=1528288687",
price: 31,
date: "2012-03-12",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 3.2,
category:["Role","Open World"]
},  
{name: "Rust",
description:
  "The only aim in Rust is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.",
photo: [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg?t=1669127647",
],
video: "https://cdn.cloudflare.steamstatic.com/steam/apps/256684736/movie480_vp9.webm?t=1624520315",
price: 36,
date: "2018-01-22",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 3.9,
category:["Survival"]
}, 
 {name: "Vampyr",
description:
  "London, 1918. You are newly-turned Vampyr Dr. Jonathan Reid. As a doctor, you must find a cure to save the city’s flu-ravaged citizens. As a Vampyr, you are cursed to feed on those you vowed to heal.",
photo: [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/427290/header.jpg?t=1651049845",
],
video: "https://cdn.cloudflare.steamstatic.com/steam/apps/256719980/movie480.webm?t=1529064778",
price: 55,
date: "2019-06-10",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 4.2,
category:["Role"]
}, 

 {name: "Hogwarts Legacy",
description:
  "Hogwarts Legacy is an open world action RPG. Now you can take control of the action and be the center of your own adventure in the magical world",
photo: [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg?t=1668268562",
],
video: "https://cdn.cloudflare.steamstatic.com/steam/apps/256915938/movie480_vp9.webm?t=1668268555",
price: 23,
date: "2016-05-12",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 4.5,
category:["Adventure","Role","Open World"]
},  {
name: "Assetto Corsa",
description:
  "Assetto Corsa v1.16 introduces the new 'Laguna Seca' laser-scanned track, 7 new cars among which the eagerly awaited Alfa Romeo Giulia Quadrifoglio!",
photo: [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/244210/header.jpg?t=1669152181",
],
video: "https://cdn.cloudflare.steamstatic.com/steam/apps/256704206/movie480.webm?t=1513780792",
price: 44,
date: "2022-04-30",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 4.0,
category:["Race"]
},  {
  name: "MultiVersus",
description:
  "MultiVersus is a free to play cross-platform fighting game that allows you to fight with your friends in legendary universes using iconic characters. Join Season 2 and enjoy more new ways to play together!",
photo: [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/1818750/header.jpg?t=1668535228",
],
video: "https://cdn.cloudflare.steamstatic.com/steam/apps/256905021/movie480_vp9.webm?t=1662664915",
price: 12,
date: "2021-10-28",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 4.5,
category:["Multiplayer","Action"]
}, 
 {name: "Age of Empires IV: Anniversary Edition",
description:
  "In celebration of its first anniversary delighting millions of gamers around the world, the award-winning and ultra-popular strategy game franchise continues with Age of Empires IV: Anniversary Edition.",
photo: [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/1466860/header.jpg?t=1668721406",
],
video: "https://cdn.cloudflare.steamstatic.com/steam/apps/256913281/movie480_vp9.webm?t=1666907093",
price: 60,
date: "2018-06-12",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 4.9,
category:["Strategy","Multiplayer"]
},  
{name: "Choo-Choo Charles",
description:
  "Travel around an open world island in an old train, upgrade it over time and use it to defeat an evil spider train named Charles.",
photo: [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/1766740/header.jpg?t=1670596632",
],
video: "https://cdn.cloudflare.steamstatic.com/steam/apps/256918366/movie480_vp9.webm?t=1670596573",
price: 23,
date: "2022-10-12",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 2.5,
category:["Survival"]
}, /*  {name: "Destiny 2",
description:
  "Destiny 2 is an action MMO in a unique, evolving world that you and your friends can join anytime, anywhere, for free.",
photo: [
  "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/header_latam.jpg?t=1670871216",
],
video: "https://cdn.cloudflare.steamstatic.com/steam/apps/256877056/movie480_vp9.webm?t=1646776818",
price: 0,
date: "2021-10-11",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 4.5,
category:["Open World"]
},  {name: "Cyberpunk",
description:
  "Cyberpunk is a current of science fiction that emerged in the early 1980s, refers to cybernetics (scientific and technological advances) and punk (rebellion and transgression)",
photo: [
  "https://generacionxbox.com/wp-content/uploads/2020/12/Cyberpunk-2077-4.jpg",
],
video: "https://cdn.akamai.steamstatic.com/steam/apps/256904417/movie480_vp9.webm?t=1662480377",
price: 60,
date: "2020-12-8",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 3.5,
category:["RPG"]
},  {name: "Cyberpunk",
description:
  "Cyberpunk is a current of science fiction that emerged in the early 1980s, refers to cybernetics (scientific and technological advances) and punk (rebellion and transgression)",
photo: [
  "https://generacionxbox.com/wp-content/uploads/2020/12/Cyberpunk-2077-4.jpg",
],
video: "https://cdn.akamai.steamstatic.com/steam/apps/256904417/movie480_vp9.webm?t=1662480377",
price: 60,
date: "2020-12-8",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 3.5,
category:["RPG"]
},  {name: "Cyberpunk",
description:
  "Cyberpunk is a current of science fiction that emerged in the early 1980s, refers to cybernetics (scientific and technological advances) and punk (rebellion and transgression)",
photo: [
  "https://generacionxbox.com/wp-content/uploads/2020/12/Cyberpunk-2077-4.jpg",
],
video: "https://cdn.akamai.steamstatic.com/steam/apps/256904417/movie480_vp9.webm?t=1662480377",
price: 60,
date: "2020-12-8",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 3.5,
category:["RPG"]
},  {name: "Cyberpunk",
description:
  "Cyberpunk is a current of science fiction that emerged in the early 1980s, refers to cybernetics (scientific and technological advances) and punk (rebellion and transgression)",
photo: [
  "https://generacionxbox.com/wp-content/uploads/2020/12/Cyberpunk-2077-4.jpg",
],
video: "https://cdn.akamai.steamstatic.com/steam/apps/256904417/movie480_vp9.webm?t=1662480377",
price: 60,
date: "2020-12-8",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 3.5,
category:["RPG"]
},  {name: "Cyberpunk",
description:
  "Cyberpunk is a current of science fiction that emerged in the early 1980s, refers to cybernetics (scientific and technological advances) and punk (rebellion and transgression)",
photo: [
  "https://generacionxbox.com/wp-content/uploads/2020/12/Cyberpunk-2077-4.jpg",
],
video: "https://cdn.akamai.steamstatic.com/steam/apps/256904417/movie480_vp9.webm?t=1662480377",
price: 60,
date: "2020-12-8",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 3.5,
category:["RPG"]
},  {name: "Cyberpunk",
description:
  "Cyberpunk is a current of science fiction that emerged in the early 1980s, refers to cybernetics (scientific and technological advances) and punk (rebellion and transgression)",
photo: [
  "https://generacionxbox.com/wp-content/uploads/2020/12/Cyberpunk-2077-4.jpg",
],
video: "https://cdn.akamai.steamstatic.com/steam/apps/256904417/movie480_vp9.webm?t=1662480377",
price: 60,
date: "2020-12-8",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 3.5,
category:["RPG"]
},  {name: "Cyberpunk",
description:
  "Cyberpunk is a current of science fiction that emerged in the early 1980s, refers to cybernetics (scientific and technological advances) and punk (rebellion and transgression)",
photo: [
  "https://generacionxbox.com/wp-content/uploads/2020/12/Cyberpunk-2077-4.jpg",
],
video: "https://cdn.akamai.steamstatic.com/steam/apps/256904417/movie480_vp9.webm?t=1662480377",
price: 60,
date: "2020-12-8",
buyed: ["6397862064e1cf96b51d39c8"],
rate: 3.5,
category:["RPG"]
}, */
];

require("dotenv").config();
require("../../config/database/database");

const Game = require("../game");


games.forEach( e =>{
    Game.create({
        name: e.name,
        description: e.description,
        photo: e.photo,
        price: e.price,
        date: e.date,
        buyed: e.buyed,
        rate: e.rate,
        video: e.video,
        category:e.category
    })
})

