const GameModel = require('../models/Game')

exports.game = (req, res) => {
  const id = req.params.id
  GameModel.find({ id })
    .then((game) => res.json({ game }))
    .catch((err) => res.json({ message: err.message }))
}

// NOTE expected response
// const response = {
//   game: {
//     title: 'Chrono Trigger',
//     description: '時空を越えるRPG',
//     releaseDate: '1995/3/11',
//     reviewCount: 2,
//     maker: {
//       name: 'スクウェア・エニックス',
//     },
//     genres: [
//       { id: 1, name: 'ロールプレイング' },
//     ],
//     platforms: [
//       { id: 1, name: 'SFC' },
//       { id: 2, name: 'DS' },
//     ],
//     reviews: [
//       {
//         body: 'マールは俺の嫁。',
//         author: {
//           id: '100',
//           name: 'hiropon',
//         },
//         publishedAt: '2001/3/9',
//       },
//       {
//         body: '人生で一番やりこんだゲーム。6周はした。',
//         author: {
//           id: '101',
//           name: 'pomodoroX',
//         },
//         publishedAt: '2000/11/1',
//       },
//     ],
//   },
// }