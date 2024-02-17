const express = require("express");
const multer = require("multer");
const AdvenureTravels = require("../model/Travels/AdvenureTravels");
const Beach = require("../model/Travels/Beach");
const FoodTravels = require("../model/Travels/FoodTravels");
const Travels = require("../model/Travels/Travels");

const fs = require("fs");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/AdvenureTravels", upload.single("testImage"), (req, res) => {
  const saveImage = new AdvenureTravels({
    name: req.body.name,
    image: {
      data: fs.readFileSync("upload/" + req.file.filename),
      contentType: "image/png",
    },
  });
  saveImage
    .save()
    .then((res) => {
      console.log("image save");
    })
    .catch((error) => {
      console.log(error);
    });
  res.send("image is saved");
});

router.post("/Beach", upload.single("testImage"), (req, res) => {
  const saveImage = new Beach({
    name: req.body.name,
    image: {
      data: fs.readFileSync("upload/" + req.file.filename),
      contentType: "image/png",
    },
  });
  saveImage
    .save()
    .then((res) => {
      console.log("image save");
    })
    .catch((error) => {
      console.log(error);
    });
  res.send("image is saved");
});

router.post("/FoodTravels", upload.single("testImage"), (req, res) => {
  const saveImage = new FoodTravels({
    name: req.body.name,
    image: {
      data: fs.readFileSync("upload/" + req.file.filename),
      contentType: "image/png",
    },
  });
  saveImage
    .save()
    .then((res) => {
      console.log("image save");
    })
    .catch((error) => {
      console.log(error);
    });
  res.send("image is saved");
});

router.post("/Travels", upload.single("testImage"), (req, res) => {
  const saveImage = new Travels({
    name: req.body.name,
    image: {
      data: fs.readFileSync("upload/" + req.file.filename),
      contentType: "image/png",
    },
  });
  saveImage
    .save()
    .then((res) => {
      console.log("image save");
    })
    .catch((error) => {
      console.log(error);
    });
  res.send("image is saved");
});

router.get("/AdvenureTravels", async (req, res) => {
  const allData = await AdvenureTravels.find();
  res.status(200).json(allData);
});
router.get("/Beach", async (req, res) => {
  const allData = await Beach.find();
  res.status(200).json(allData);
});

router.get("/FoodTravels", async (req, res) => {
  const allData = await FoodTravels.find();
  res.status(200).json(allData);
});

router.get("/Travels", async (req, res) => {
  const allData = await Travels.find();
  res.status(200).json(allData);
});

module.exports = router;
