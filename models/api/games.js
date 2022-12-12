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

