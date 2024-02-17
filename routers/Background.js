const express = require("express");
const multer = require("multer");
const Black = require("../model/BackGround/Blackbg");
const Premium = require("../model/BackGround/Premiumbg");
const Red = require("../model/BackGround/Redbg");
const Rose = require("../model/BackGround/Rosebg");
const Simple = require("../model/BackGround/Simplebg");
const Wall = require("../model/BackGround/Wallbg");
const white = require("../model/BackGround/whitebg");
const Flower = require("../model/BackGround/Flower");
const FreeNight = require("../model/BackGround/FreeNight");
const Light = require("../model/BackGround/Light");
const ParkLane = require("../model/BackGround/ParkLane");
const Road = require("../model/BackGround/Road");
const colourStone = require("../model/BackGround/colourStone");
const emoji = require("../model/BackGround/emoji");

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

router.post("/Black", upload.single("testImage"), (req, res) => {
  const saveImage = new Black({
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

router.post("/Premium", upload.single("testImage"), (req, res) => {
  const saveImage = new Premium({
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

router.post("/Red", upload.single("testImage"), (req, res) => {
  const saveImage = new Red({
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

router.post("/Rose", upload.single("testImage"), (req, res) => {
  const saveImage = new Rose({
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

router.post("/Simple", upload.single("testImage"), (req, res) => {
  const saveImage = new Simple({
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

router.post("/Wall", upload.single("testImage"), (req, res) => {
  const saveImage = new Wall({
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

router.post("/white", upload.single("testImage"), (req, res) => {
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

router.post("/flower", upload.single("testImage"), (req, res) => {
  const saveImage = new Flower({
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

router.post("/FreeNight", upload.single("testImage"), (req, res) => {
  const saveImage = new FreeNight({
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

router.post("/Light", upload.single("testImage"), (req, res) => {
  const saveImage = new Light({
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

router.post("/ParkLane", upload.single("testImage"), (req, res) => {
  const saveImage = new ParkLane({
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

router.post("/Road", upload.single("testImage"), (req, res) => {
  const saveImage = new Road({
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

router.post("/colourStone", upload.single("testImage"), (req, res) => {
  const saveImage = new colourStone({
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

router.post("/emoji", upload.single("testImage"), (req, res) => {
  const saveImage = new emoji({
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

router.get("/flower", async (req, res) => {
  const allData = await Flower.find();
  res.status(200).json(allData);
});

router.get("/FreeNight", async (req, res) => {
  const allData = await FreeNight.find();
  res.status(200).json(allData);
});

router.get("/Light", async (req, res) => {
  const allData = await Light.find();
  res.status(200).json(allData);
});

router.get("/ParkLane", async (req, res) => {
  const allData = await ParkLane.find();
  res.status(200).json(allData);
});

router.get("/Road", async (req, res) => {
  const allData = await Road.find();
  res.status(200).json(allData);
});

router.get("/colourStone", async (req, res) => {
  const allData = await colourStone.find();
  res.status(200).json(allData);
});

router.get("/emoji", async (req, res) => {
  const allData = await emoji.find();
  res.status(200).json(allData);
});

router.get("/Black", async (req, res) => {
  const allData = await Black.find();
  res.status(200).json(allData);
});
router.get("/Premium", async (req, res) => {
  const allData = await Premium.find();
  res.status(200).json(allData);
});

router.get("/Red", async (req, res) => {
  const allData = await Red.find();
  res.status(200).json(allData);
});

router.get("/Rose", async (req, res) => {
  const allData = await Rose.find();
  res.status(200).json(allData);
});

router.get("/Simple", async (req, res) => {
  const allData = await Simple.find();
  res.status(200).json(allData);
});
router.get("/Wall", async (req, res) => {
  const allData = await Wall.find();
  res.status(200).json(allData);
});
router.get("/white", async (req, res) => {
  const allData = await white.find();
  res.status(200).json(allData);
});

module.exports = router;
