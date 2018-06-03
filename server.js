
const express = require('express')
const multer = require('multer')
const app = express()
const upload = multer()

app.use(express.static('public'))

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.post('/api/fileanalyse', upload.single('upfile'), (req, res, next) => {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
})

const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
