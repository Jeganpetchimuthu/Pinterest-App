const express = require("express");
const multer = require("multer");
const food = require("../model/Food/Food");
const chickenKathi = require("../model/Food/ChickenKathi");
const chilliChicken = require("../model/Food/ChilliChicken");
const crispyMasala = require("../model/Food/CrispyMasalaDhosai");
const foodPlating = require("../model/Food/FoodPlating");
const grill = require("../model/Food/GriledThothuri");
const indianMasala = require("../model/Food/IndianMeals");
const samosa = require("../model/Food/Samosa");

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

router.post("/food", upload.single("testImage"), (req, res) => {
  const saveImage = new food({
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

router.post("/chickenKathi", upload.single("testImage"), (req, res) => {
  const saveImage = new chickenKathi({
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
router.post("/chilliChicken", upload.single("testImage"), (req, res) => {
  const saveImage = new chilliChicken({
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
router.post("/crispyMasala", upload.single("testImage"), (req, res) => {
  const saveImage = new crispyMasala({
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
router.post("/foodPlating", upload.single("testImage"), (req, res) => {
  const saveImage = new foodPlating({
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
router.post("/grill", upload.single("testImage"), (req, res) => {
  const saveImage = new grill({
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
router.post("/indianMasala", upload.single("testImage"), (req, res) => {
  const saveImage = new indianMasala({
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
router.post("/samosa", upload.single("testImage"), (req, res) => {
  const saveImage = new samosa({
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

router.get("/food", async (req, res) => {
  const allData = await food.find();
  res.status(200).json(allData);
});
router.get("/chickenKathi", async (req, res) => {
  const allData = await chickenKathi.find();
  res.status(200).json(allData);
});
router.get("/chilliChicken", async (req, res) => {
  const allData = await chilliChicken.find();
  res.status(200).json(allData);
});
router.get("/crispyMasala", async (req, res) => {
  const allData = await crispyMasala.find();
  res.status(200).json(allData);
});
router.get("/foodPlating", async (req, res) => {
  const allData = await foodPlating.find();
  res.status(200).json(allData);
});
router.get("/grill", async (req, res) => {
  const allData = await grill.find();
  res.status(200).json(allData);
});

router.get("/indianMasala", async (req, res) => {
  const allData = await indianMasala.find();
  res.status(200).json(allData);
});
router.get("/samosa", async (req, res) => {
  const allData = await samosa.find();
  res.status(200).json(allData);
});
module.exports = router;
