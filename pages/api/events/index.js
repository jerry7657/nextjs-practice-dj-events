const {events} = require('./pages/data.json')

export default (req, res) => {
  // 規定api輸入方式，僅限GET 
  if (req.method === 'GET') {
    res.status(200).json(events)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({message: `Method ${req.method} is not allowed`})
  }
  
}
