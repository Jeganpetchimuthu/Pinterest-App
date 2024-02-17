const express = require("express");
const multer = require("multer");
const nail = require("../model/Nail/Nail");
const summer = require("../model/Nail/SummerNail");
const white = require("../model/Nail/WhiteNail");
const newYearNail = require("../model/Nail/NewYearNail");
const stamping = require("../model/Nail/NewToStamping");
const nailArt = require("../model/Nail/NailArtDesing");
const creative = require("../model/Nail/CreativeDesignNail");
const chevren = require("../model/Nail/ChevrenNail");

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

router.post("/nail", upload.single("testImage"), (req, res) => {
  const saveImage = new nail({
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

router.post("/summerNail", upload.single("testImage"), (req, res) => {
  const saveImage = new summer({
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
router.post("/whiteNail", upload.single("testImage"), (req, res) => {
  const saveImage = new white({
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
router.post("/newYearNail", upload.single("testImage"), (req, res) => {
  const saveImage = new newYearNail({
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
router.post("/stampingNail", upload.single("testImage"), (req, res) => {
  const saveImage = new stamping({
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
router.post("/nailArt", upload.single("testImage"), (req, res) => {
  const saveImage = new nailArt({
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
router.post("/creative", upload.single("testImage"), (req, res) => {
  const saveImage = new creative({
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
router.post("/chevren", upload.single("testImage"), (req, res) => {
  const saveImage = new chevren({
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

router.get("/nail", async (req, res) => {
  const allData = await nail.find();
  res.status(200).json(allData);
});
router.get("/summerNail", async (req, res) => {
  const allData = await summer.find();
  res.status(200).json(allData);
});
router.get("/whiteNail", async (req, res) => {
  const allData = await white.find();
  res.status(200).json(allData);
});
router.get("/newYearNail", async (req, res) => {
  const allData = await newYearNail.find();
  res.status(200).json(allData);
});
router.get("/stampingNail", async (req, res) => {
  const allData = await stamping.find();
  res.status(200).json(allData);
});
router.get("/nailart", async (req, res) => {
  const allData = await nailArt.find();
  res.status(200).json(allData);
});

router.get("/creative", async (req, res) => {
  const allData = await creative.find();
  res.status(200).json(allData);
});
router.get("/chevrennail", async (req, res) => {
  const allData = await chevren.find();
  res.status(200).json(allData);
});
module.exports = router;
