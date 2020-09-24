let express = require('express')
var fs = require('fs');
var database = JSON.parse(fs.readFileSync('database.json', 'utf8'));
let app = express()

const PORT = process.env.PORT || 3000

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/getrecipies', (req, res) => res.json(database))
app.listen(PORT,()=>{
    console.info(`Server is running on ${PORT}`)
})
