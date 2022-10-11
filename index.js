// lines 2 - 5 is about bringing in files we want to use
const express = require("express");
const hbs = require("express-handlebars");

const path = require("path"); // doesn't need to be installed
const app = express(); // this will run express for us

// local files required
const API = require("./lib/api"); // the file location of the file

app.use(express.static(path.join(__dirname, "public")));

app.engine(".hbs", hbs.engine({
    defaultLayout: "layout",
    extname: "hbs"
}))

app.set("view engine", ".hbs");

// get - retrieves a specified page and puts it in this file path ("/" with index would be home directory "/about" with about would be the about us page etc)
app.get("/", async (req, res) => {
    let data = await API.data;
    console.log(data); // a check to see if the data has returned at all?
    res.render("index", { data });
}) 

app.get("/about", async (req, res) => {
    res.render("about");
}) 

// listen - listens on the specified port for inputs
app.listen(3000, () => {
    console.log("App is listening on port 3000. Well done.");
})

