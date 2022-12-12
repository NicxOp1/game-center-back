const games = [
  {
    name: "Resident Evil 4",
    description:
      "Resident Evil 4 preserves the essence of the original game, while introducing updated game mechanics,a reimagined story, and stunning next-gen graphics that make it in the ultimate survival horror experience where life and death, terror and catharsis intersect.",
    photo: [
      "https://image.api.playstation.com/vulcan/ap/rnd/202210/0712/BiS5QP6h4506JHyJlZlVzK9D.jpg",
    ],
    price: 40,
    date: "2022-12-12",
    buyed: ["6372494878cf1c151a1a4f67"],
    rate: 4.5,
  },
  {name: "God of War",
    description:
      "God of War is a hack and slash video game franchise created by SCE Santa Monica Studio and distributed by Sony Computer Entertainment.",
    photo: [
      "https://i.blogs.es/4c3cf2/godofwarragnarok/840_560.jpeg",
    ],
    price: 60,
    date: "2022-09-23",
    buyed: ["6372494878cf1c151a1a4f67"],
    rate: 5,
  },
  {name: "Far Cry 4",
    description:
      "Discover the most diverse Far Cry world to date. With settings ranging from lush jungles to snowy peaks, the entire world is alive...and deadly.",
    photo: [
      "https://img.hype.games/cdn/4fafabc9-6899-4efc-8018-412ef4332ed5COVER---[Ubisoft]-FAR-CRY-4.jpg",
    ],
    price: 30,
    date: "2011-03-24",
    buyed: ["6372494878cf1c151a1a4f67"],
    rate: 4,
  },
  {name: "Cyberpunk",
    description:
      "Cyberpunk is a current of science fiction that emerged in the early 1980s, refers to cybernetics (scientific and technological advances) and punk (rebellion and transgression)",
    photo: [
      "https://generacionxbox.com/wp-content/uploads/2020/12/Cyberpunk-2077-4.jpg",
    ],
    price: 60,
    date: "2020-12-8",
    buyed: ["6372494878cf1c151a1a4f67"],
    rate: 3.5,
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
        rate: e.rate
    })
})

