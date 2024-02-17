const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("dotenv").config();

//const dbUrl = "mongodb://0.0.0.0:27017";
const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl);

const con = mongoose.connection;

try {
  con.on("open", () => {
    console.log("mongoDB connected!!!");
  });
} catch (error) {
  console.log("Error: " + error);
}

const PORT = process.env.PORT;

const profileRouter = require("./routers/Profile");
app.use("/api", profileRouter);

const animalImageRouter = require("./routers/AnimalImage");
app.use("/api", animalImageRouter);

const homeRouter = require("./routers/Home");
app.use("/api", homeRouter);

const foodRouter = require("./routers/Food");
app.use("/api", foodRouter);

const nailRouter = require("./routers/Nail");
app.use("/api", nailRouter);

const plantRouter = require("./routers/Plant");
app.use("/api", plantRouter);

const lifeRouter = require("./routers/Life");
app.use("/api", lifeRouter);

const wallPaperRouter = require("./routers/WallPaper");
app.use("/api", wallPaperRouter);

const chickenRouter = require("./routers/Chicken");
app.use("/api", chickenRouter);

const animeRouter = require("./routers/Anime");
app.use("/api", animeRouter);

const BackGroundRouter = require("./routers/Background");
app.use("/api", BackGroundRouter);

const hobbieRouter = require("./routers/Hobbies");
app.use("/api", hobbieRouter);

const artRouter = require("./routers/Art");
app.use("/api", artRouter);

const travelsRouter = require("./routers/Travels");
app.use("/api", travelsRouter);

const userRouter = require("./routers/User");
app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("welcome!!!!");
});

app.listen(PORT, () => {
  console.log("This Node application is running on port " + PORT);
});
