const express = require("express");
const multer = require("multer");
const gardenPlant = require("../model/Plant/Gardenplant");
const hangingPlant = require("../model/Plant/HangingPlant");
const hangingGarden = require("../model/Plant/HnagingGarden");
const housePlant = require("../model/Plant/Houseplant");
const indoor = require("../model/Plant/IndoorGarden");
const plant1 = require("../model/Plant/plant1");
const plant2 = require("../model/Plant/plant2");
const plant3 = require("../model/Plant/plant3");
const plant4 = require("../model/Plant/plant4");
const plant5 = require("../model/Plant/plant5");
const plant6 = require("../model/Plant/plant6");
const plant7 = require("../model/Plant/plant7");
const plant8 = require("../model/Plant/plant8");
const plant9 = require("../model/Plant/plant9");
const plant10 = require("../model/Plant/plant10");
const plant11 = require("../model/Plant/plant11");
const plant12 = require("../model/Plant/plant12");

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

router.post("/plants", upload.single("testImage"), (req, res) => {
  const saveImage = new gardenPlant({
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

router.post("/hangingPlant", upload.single("testImage"), (req, res) => {
  const saveImage = new hangingPlant({
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
router.post("/hangingGarden", upload.single("testImage"), (req, res) => {
  const saveImage = new hangingGarden({
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
router.post("/housePlant", upload.single("testImage"), (req, res) => {
  const saveImage = new housePlant({
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
router.post("/indoor", upload.single("testImage"), (req, res) => {
  const saveImage = new indoor({
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
router.post("/plant1", upload.single("testImage"), (req, res) => {
  const saveImage = new plant1({
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
router.post("/plant2", upload.single("testImage"), (req, res) => {
  const saveImage = new plant2({
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
router.post("/plant3", upload.single("testImage"), (req, res) => {
  const saveImage = new plant3({
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

router.post("/plant4", upload.single("testImage"), (req, res) => {
  const saveImage = new plant4({
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

router.post("/plant5", upload.single("testImage"), (req, res) => {
  const saveImage = new plant5({
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

router.post("/plant6", upload.single("testImage"), (req, res) => {
  const saveImage = new plant6({
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

router.post("/plant7", upload.single("testImage"), (req, res) => {
  const saveImage = new plant7({
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

router.post("/plant8", upload.single("testImage"), (req, res) => {
  const saveImage = new plant8({
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

router.post("/plant9", upload.single("testImage"), (req, res) => {
  const saveImage = new plant9({
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

router.post("/plant10", upload.single("testImage"), (req, res) => {
  const saveImage = new plant10({
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

router.post("/plant11", upload.single("testImage"), (req, res) => {
  const saveImage = new plant11({
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

router.post("/plant12", upload.single("testImage"), (req, res) => {
  const saveImage = new plant12({
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

router.get("/plants", async (req, res) => {
  const allData = await gardenPlant.find();
  res.status(200).json(allData);
});
router.get("/hangingPlant", async (req, res) => {
  const allData = await hangingPlant.find();
  res.status(200).json(allData);
});
router.get("/hangingGarden", async (req, res) => {
  const allData = await hangingGarden.find();
  res.status(200).json(allData);
});
router.get("/housePlant", async (req, res) => {
  const allData = await housePlant.find();
  res.status(200).json(allData);
});
router.get("/indoor", async (req, res) => {
  const allData = await indoor.find();
  res.status(200).json(allData);
});
router.get("/plant1", async (req, res) => {
  const allData = await plant1.find();
  res.status(200).json(allData);
});

router.get("/plant2", async (req, res) => {
  const allData = await plant2.find();
  res.status(200).json(allData);
});
router.get("/plant3", async (req, res) => {
  const allData = await plant3.find();
  res.status(200).json(allData);
});
router.get("/plant4", async (req, res) => {
  const allData = await plant4.find();
  res.status(200).json(allData);
});
router.get("/plant5", async (req, res) => {
  const allData = await plant5.find();
  res.status(200).json(allData);
});
router.get("/plant6", async (req, res) => {
  const allData = await plant6.find();
  res.status(200).json(allData);
});
router.get("/plant7", async (req, res) => {
  const allData = await plant7.find();
  res.status(200).json(allData);
});
router.get("/plant8", async (req, res) => {
  const allData = await plant8.find();
  res.status(200).json(allData);
});
router.get("/plant9", async (req, res) => {
  const allData = await plant9.find();
  res.status(200).json(allData);
});
router.get("/plant10", async (req, res) => {
  const allData = await plant10.find();
  res.status(200).json(allData);
});
router.get("/plant11", async (req, res) => {
  const allData = await plant11.find();
  res.status(200).json(allData);
});
router.get("/plant12", async (req, res) => {
  const allData = await plant12.find();
  res.status(200).json(allData);
});

module.exports = router;
