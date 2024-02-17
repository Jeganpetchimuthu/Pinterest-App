const express = require("express");
const multer = require("multer");
const ChristmasGift = require("../model/Hobbies/ChristmasGift");
const Hobbies = require("../model/Hobbies/Hobbies");
const RoomDecor = require("../model/Hobbies/RoomDecor");
const StyleFood = require("../model/Hobbies/StyleFood");
const WeddingGift = require("../model/Hobbies/WeddingGift");
const paperCreaft = require("../model/Hobbies/paperCreaft");

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

router.post("/Christmas", upload.single("testImage"), (req, res) => {
  const saveImage = new ChristmasGift({
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

router.post("/Hobbies", upload.single("testImage"), (req, res) => {
  const saveImage = new Hobbies({
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

router.post("/RoomDecor", upload.single("testImage"), (req, res) => {
  const saveImage = new RoomDecor({
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

router.post("/StyleFood", upload.single("testImage"), (req, res) => {
  const saveImage = new StyleFood({
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

router.post("/WeddingGift", upload.single("testImage"), (req, res) => {
  const saveImage = new WeddingGift({
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

router.post("/paperCreaft", upload.single("testImage"), (req, res) => {
  const saveImage = new paperCreaft({
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

router.get("/Christmas", async (req, res) => {
  const allData = await ChristmasGift.find();
  res.status(200).json(allData);
});
router.get("/Hobbies", async (req, res) => {
  const allData = await Hobbies.find();
  res.status(200).json(allData);
});

router.get("/StyleFood", async (req, res) => {
  const allData = await StyleFood.find();
  res.status(200).json(allData);
});

router.get("/RoomDecor", async (req, res) => {
  const allData = await RoomDecor.find();
  res.status(200).json(allData);
});

router.get("/wedding", async (req, res) => {
  const allData = await WeddingGift.find();
  res.status(200).json(allData);
});
router.get("/paperCreaft", async (req, res) => {
  const allData = await paperCreaft.find();
  res.status(200).json(allData);
});

module.exports = router;
