const express = require("express");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/htmlRoutes");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

htmlRoutes(app);

require("./seeders/seed.js");
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://randy:pastor16:heroku_4t1crm05", {
    useNewUrlParser: true
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});