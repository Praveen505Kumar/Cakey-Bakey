const express = require("express");
const cookieSession = require("cookie-session");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");
const app = express();
// new sample commit
// middlewares for parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    credentials: true,
}));

app.use(
    cookieSession({
        name: "Book- Mng-session",
        secret: "COOKIE_SECRET",
        httpOnly: true
    })
);

const db = require("./app/models");
db.mongoose
    .connect(dbConfig.mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
    })
    .catch((err) => {
        console.error("Connection error", err);
        process.exit();
    });

require("./app/routes/user.routes")(app);
require("./app/routes/admin.routes")(app);

app.post("/addcat", (req, res) => {
    const category = new db.Category({
        name: "egg cakes"
    });
    category.save()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(err);
        })
});



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});