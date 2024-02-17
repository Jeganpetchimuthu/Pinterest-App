const express = require("express");
const multer = require("multer");

const home = require("../model/House/Home");
const hutHouse = require("../model/House/HutHouse");
const kitchen = require("../model/House/Kitchen");
const outDoor = require("../model/House/OutDoor");
const slitHouse = require("../model/House/SlitHouse");
const HomeDesign = require("../model/House/HomeDesign");
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

router.post("/HomeDesign", upload.single("testImage"), (req, res) => {
  const saveImage = new HomeDesign({
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

router.post("/home", upload.single("testImage"), (req, res) => {
  const saveImage = new home({
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

router.post("/HutHouse", upload.single("testImage"), (req, res) => {
  const saveImage = new hutHouse({
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

router.post("/kitchen", upload.single("testImage"), (req, res) => {
  const saveImage = new kitchen({
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

router.post("/outDoor", upload.single("testImage"), (req, res) => {
  const saveImage = new outDoor({
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

router.post("/slitHouse", upload.single("testImage"), (req, res) => {
  const saveImage = new slitHouse({
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

router.get("/HomeDesign", async (req, res) => {
  const allData = await HomeDesign.find();
  res.status(200).json(allData);
});

router.get("/home", async (req, res) => {
  const allData = await home.find();
  res.status(200).json(allData);
});

router.get("/hutHouse", async (req, res) => {
  const allData = await hutHouse.find();
  res.status(200).json(allData);
});

router.get("/kitchen", async (req, res) => {
  const allData = await kitchen.find();
  res.status(200).json(allData);
});

router.get("/outDoor", async (req, res) => {
  const allData = await outDoor.find();
  res.status(200).json(allData);
});

router.get("/slitHouse", async (req, res) => {
  const allData = await slitHouse.find();
  res.status(200).json(allData);
});
module.exports = router;
