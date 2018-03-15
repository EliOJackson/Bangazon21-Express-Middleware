const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const allRoutes = require("./routes/route")

//middleware 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allRoutes);



app.use(express.static(__dirname + '/public', { extensions: "html" }));

app.listen(8080, () => {
    console.log("listening on port 8080");
});