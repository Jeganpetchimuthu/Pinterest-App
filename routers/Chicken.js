const express = require("express");
const multer = require("multer");
const BlackPepperChicken = require("../model/Chicken/BlackPepperChicken");
const ButterChicken = require("../model/Chicken/ButterChicken");
const ChickenImg = require("../model/Chicken/ChickenImg");
const ChickenMania = require("../model/Chicken/ChickenMania");
const ChickenNoodle = require("../model/Chicken/ChickenNoodle");
const ChicckenLolipop = require("../model/Chicken/ChicckenLolipop");
const Chicken65 = require("../model/Chicken/Chicken65");
const ChickenCurry = require("../model/Chicken/ChickenCurry");
const ChickenTikka = require("../model/Chicken/ChickenTikka");
const ChickenlegFry = require("../model/Chicken/ChickenlegFry");
//const ChilliChicken = require("../model/Chicken/ChilliCkicken");
const GrilChicken = require("../model/Chicken/GrilChicken");
const MasalaChicken = require("../model/Chicken/MasalaChicken");
const RoastChicken = require("../model/Chicken/RoastChicken");

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

router.post("/peper", upload.single("testImage"), (req, res) => {
  const saveImage = new BlackPepperChicken({
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

router.post("/ButterChicken", upload.single("testImage"), (req, res) => {
  const saveImage = new ButterChicken({
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

router.post("/Chicken", upload.single("testImage"), (req, res) => {
  const saveImage = new ChickenImg({
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

router.post("/ChickenMania", upload.single("testImage"), (req, res) => {
  const saveImage = new ChickenMania({
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

router.post("/noodle", upload.single("testImage"), (req, res) => {
  const saveImage = new ChickenNoodle({
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

router.post("/ChicckenLolipop", upload.single("testImage"), (req, res) => {
  const saveImage = new ChicckenLolipop({
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

router.post("/Chicken65", upload.single("testImage"), (req, res) => {
  const saveImage = new Chicken65({
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

router.post("/ChickenCurry", upload.single("testImage"), (req, res) => {
  const saveImage = new ChickenCurry({
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

router.post("/ChickenTikka", upload.single("testImage"), (req, res) => {
  const saveImage = new ChickenTikka({
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

router.post("/ChickenlegFry", upload.single("testImage"), (req, res) => {
  const saveImage = new ChickenlegFry({
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

router.post("/ChilliChicken", upload.single("testImage"), (req, res) => {
  const saveImage = new ChilliChicken({
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

router.post("/GrilChicken", upload.single("testImage"), (req, res) => {
  const saveImage = new GrilChicken({
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

router.post("/MasalaChicken", upload.single("testImage"), (req, res) => {
  const saveImage = new MasalaChicken({
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

router.post("/RoastChicken", upload.single("testImage"), (req, res) => {
  const saveImage = new RoastChicken({
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

router.get("/ChicckenLolipop", async (req, res) => {
  const allData = await ChicckenLolipop.find();
  res.status(200).json(allData);
});
router.get("/Chicken65", async (req, res) => {
  const allData = await Chicken65.find();
  res.status(200).json(allData);
});
router.get("/ChickenCurry", async (req, res) => {
  const allData = await ChickenCurry.find();
  res.status(200).json(allData);
});
router.get("/ChickenTikka", async (req, res) => {
  const allData = await ChickenTikka.find();
  res.status(200).json(allData);
});
router.get("/ChickenlegFry", async (req, res) => {
  const allData = await ChickenlegFry.find();
  res.status(200).json(allData);
});
router.get("/ChilliChicken", async (req, res) => {
  const allData = await ChilliChicken.find();
  res.status(200).json(allData);
});
router.get("/GrilChicken", async (req, res) => {
  const allData = await GrilChicken.find();
  res.status(200).json(allData);
});
router.get("/MasalaChicken", async (req, res) => {
  const allData = await MasalaChicken.find();
  res.status(200).json(allData);
});
router.get("/RoastChicken", async (req, res) => {
  const allData = await RoastChicken.find();
  res.status(200).json(allData);
});
router.get("/peper", async (req, res) => {
  const allData = await BlackPepperChicken.find();
  res.status(200).json(allData);
});
router.get("/ButterChicken", async (req, res) => {
  const allData = await ButterChicken.find();
  res.status(200).json(allData);
});

router.get("/Chicken", async (req, res) => {
  const allData = await ChickenImg.find();
  res.status(200).json(allData);
});

router.get("/ChickenMania", async (req, res) => {
  const allData = await ChickenMania.find();
  res.status(200).json(allData);
});

router.get("/noodle", async (req, res) => {
  const allData = await ChickenNoodle.find();
  res.status(200).json(allData);
});

module.exports = router;
