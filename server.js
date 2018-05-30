
const express = require('express')
const multer = require('multer')
const app = express()
const upload = multer()

app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.post('/get-file-size', upload.single('file'), (req, res, next) => {
  res.json({ size: req.file.size })
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
