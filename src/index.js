const express = require('express')
const {newsArticleModel} = require('./connector')
const app = express()
const port = 8080

const onePageArticleCount = 10




// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/newFeeds/:limit/:offset", (req, res) => {
    let limit = parseInt(req.body.limit) ;
    let offset =  parseInt(req.body.offset) ;
    if(isNaN(req.body.limit)||isNaN(req.body.offset)){
        limit = 10;
        offset =0;
    }
    newsArticleModel
    .find()
    .skip(parseInt(req.params.offset))
    .limit(parseInt(req.params.limit))
    .then((news) => res.send(news))
    .catch((err) => console.log(err));
});



app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;