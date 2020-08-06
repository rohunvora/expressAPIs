const express = require("express");
const axios = require("axios");
const app = express();

app.set('view engine', 'ejs')
// using ejs as the view engine for rending ejs files
app.use(express.static('static'))
// express using static to access CSS

app.get("/", (req, res) => {
  let qs = {
    params: {
      s: "star wars",
      apikey: "8de3572f",
    },
  };
  axios.get("http://www.omdbapi.com", qs).then((response) => {
    console.log(response.data);
    let episodes = response.data.Search
    res.render('home', {episodes})
  })
  .catch(err => {
    console.log(err)
  })
});
app.listen(3000);
