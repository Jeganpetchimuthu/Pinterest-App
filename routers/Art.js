const express = require("express");
const multer = require("multer");
const Art = require("../model/Art/Art");
const FrameWork = require("../model/Art/FrameWork");
const Photography = require("../model/Art/Photography");
const Tattoo = require("../model/Art/Tattoo");
const WomenArt = require("../model/Art/WomenArt");

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

router.post("/Art", upload.single("testImage"), (req, res) => {
  const saveImage = new Art({
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

router.post("/FrameWork", upload.single("testImage"), (req, res) => {
  const saveImage = new FrameWork({
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

router.post("/Photography", upload.single("testImage"), (req, res) => {
  const saveImage = new Photography({
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

router.post("/Tattoo", upload.single("testImage"), (req, res) => {
  const saveImage = new Tattoo({
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

router.post("/WomenArt", upload.single("testImage"), (req, res) => {
  const saveImage = new WomenArt({
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

router.get("/Art", async (req, res) => {
  const allData = await Art.find();
  res.status(200).json(allData);
});
router.get("/FrameWork", async (req, res) => {
  const allData = await FrameWork.find();
  res.status(200).json(allData);
});

router.get("/Photography", async (req, res) => {
  const allData = await Photography.find();
  res.status(200).json(allData);
});

router.get("/Tattoo", async (req, res) => {
  const allData = await Tattoo.find();
  res.status(200).json(allData);
});

router.get("/WomenArt", async (req, res) => {
  const allData = await WomenArt.find();
  res.status(200).json(allData);
});

module.exports = router;
