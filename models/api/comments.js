let comment = [
    {
      gameId: "6397adf66b25342ccb6c03b7",
      comment: "¡OMG THIS GAME IS AWESOME!",
      userId: "6397862064e1cf96b51d39c8",
      date: "2023-01-12"
    },
    {
      gameId: "6397adf66b25342ccb6c03b9",
      comment: "I didn't like it very much, the graphics are lowered a lot and that's not right",
      userId: "6397862064e1cf96b51d39c7",
      date: "2022-12-15"
    },
    {
      gameId: "6397adf66b25342ccb6c03b8",
      comment: "Very good game, good story, I liked it a lot",
      userId: "6397862064e1cf96b51d39c6",
      date: "2023-03-01"
    },
  ]
  
  require("dotenv").config();
require("../../config/database/database");
  const Comment = require("../Comment");
  
  comment.forEach((element) => {
    Comment.create(
      {
        gameId: element.gameId,
        comment: element.comment,
        date: element.date,
        userId: element.userId
      }
    )
  })