const express = require("express");
const multer = require("multer");
const animal = require("../model/animal/AnimalImage");
const lion = require("../model/animal/Lion");
const deer = require("../model/animal/deer");
const dog = require("../model/animal/dog");
const cat = require("../model/animal/cat");
const ox = require("../model/animal/ox");
const tiger = require("../model/animal/tiger");
const horse = require("../model/animal/horse");
const monkey = require("../model/animal/monkey");

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

router.post("/animal", upload.single("testImage"), (req, res) => {
  const saveImage = new animal({
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

router.post("/wild", upload.single("testImage"), (req, res) => {
  const saveImage = new lion({
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
router.post("/deer", upload.single("testImage"), (req, res) => {
  const saveImage = new deer({
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
router.post("/cat", upload.single("testImage"), (req, res) => {
  const saveImage = new cat({
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
router.post("/dog", upload.single("testImage"), (req, res) => {
  const saveImage = new dog({
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
router.post("/ox", upload.single("testImage"), (req, res) => {
  const saveImage = new ox({
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
router.post("/monkey", upload.single("testImage"), (req, res) => {
  const saveImage = new monkey({
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
router.post("/horse", upload.single("testImage"), (req, res) => {
  const saveImage = new horse({
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

router.post("/tiger", upload.single("testImage"), (req, res) => {
  const saveImage = new tiger({
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

router.get("/animal", async (req, res) => {
  const allData = await animal.find();
  res.status(200).json(allData);
});
router.get("/wild", async (req, res) => {
  const allData = await lion.find();
  res.status(200).json(allData);
});
router.get("/deer", async (req, res) => {
  const allData = await deer.find();
  res.status(200).json(allData);
});
router.get("/cat", async (req, res) => {
  const allData = await cat.find();
  res.status(200).json(allData);
});
router.get("/dog", async (req, res) => {
  const allData = await dog.find();
  res.status(200).json(allData);
});
router.get("/ox", async (req, res) => {
  const allData = await ox.find();
  res.status(200).json(allData);
});

router.get("/monkey", async (req, res) => {
  const allData = await monkey.find();
  res.status(200).json(allData);
});
router.get("/horse", async (req, res) => {
  const allData = await horse.find();
  res.status(200).json(allData);
});

router.get("/tiger", async (req, res) => {
  const allData = await tiger.find();
  res.status(200).json(allData);
});
module.exports = router;
