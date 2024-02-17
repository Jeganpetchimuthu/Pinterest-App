const express = require("express");
const multer = require("multer");
const life = require("../model/Life/Life");
const Goodvibes = require("../model/Life/GoodVibes");
const Inspiration = require("../model/Life/Inspirations");
const LifeLession = require("../model/Life/LifeLession");
const Motivation = require("../model/Life/Motivation");
const PositiveThink = require("../model/Life/PositiveThink");
const RelationshipAdvice = require("../model/Life/RelationshipAdvice");
const SchoolDayQuate = require("../model/Life/SchoolDayQuate");
const SelfLoveQuates = require("../model/Life/SelfLoveQuates");
const StressManagement = require("../model/Life/StressManagement");
const TrueQuotes = require("../model/Life/TrueQuotes");
const VisionBoard = require("../model/Life/VisionBoard");

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

router.post("/life", upload.single("testImage"), (req, res) => {
  const saveImage = new life({
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

router.post("/Goodvibes", upload.single("testImage"), (req, res) => {
  const saveImage = new Goodvibes({
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
router.post("/Inspiration", upload.single("testImage"), (req, res) => {
  const saveImage = new Inspiration({
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
router.post("/LifeLession", upload.single("testImage"), (req, res) => {
  const saveImage = new LifeLession({
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
router.post("/Motivation", upload.single("testImage"), (req, res) => {
  const saveImage = new Motivation({
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
router.post("/PositiveThink", upload.single("testImage"), (req, res) => {
  const saveImage = new PositiveThink({
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
router.post("/RelationshipAdvice", upload.single("testImage"), (req, res) => {
  const saveImage = new RelationshipAdvice({
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
router.post("/SchoolDayQuate", upload.single("testImage"), (req, res) => {
  const saveImage = new SchoolDayQuate({
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

router.post("/SelfLoveQuates", upload.single("testImage"), (req, res) => {
  const saveImage = new SelfLoveQuates({
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

router.post("/StressManagement", upload.single("testImage"), (req, res) => {
  const saveImage = new StressManagement({
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

router.post("/TrueQuotes", upload.single("testImage"), (req, res) => {
  const saveImage = new TrueQuotes({
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

router.post("/VisionBoard", upload.single("testImage"), (req, res) => {
  const saveImage = new VisionBoard({
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

router.get("/life", async (req, res) => {
  const allData = await life.find();
  res.status(200).json(allData);
});
router.get("/Goodvibes", async (req, res) => {
  const allData = await Goodvibes.find();
  res.status(200).json(allData);
});
router.get("/Inspiration", async (req, res) => {
  const allData = await Inspiration.find();
  res.status(200).json(allData);
});
router.get("/LifeLession", async (req, res) => {
  const allData = await LifeLession.find();
  res.status(200).json(allData);
});
router.get("/Motivation", async (req, res) => {
  const allData = await Motivation.find();
  res.status(200).json(allData);
});
router.get("/PositiveThink", async (req, res) => {
  const allData = await PositiveThink.find();
  res.status(200).json(allData);
});

router.get("/RelationshipAdvice", async (req, res) => {
  const allData = await RelationshipAdvice.find();
  res.status(200).json(allData);
});
router.get("/SchoolDayQuate", async (req, res) => {
  const allData = await SchoolDayQuate.find();
  res.status(200).json(allData);
});
router.get("/SelfLoveQuates", async (req, res) => {
  const allData = await SelfLoveQuates.find();
  res.status(200).json(allData);
});
router.get("/StressManagement", async (req, res) => {
  const allData = await StressManagement.find();
  res.status(200).json(allData);
});
router.get("/TrueQuotes", async (req, res) => {
  const allData = await TrueQuotes.find();
  res.status(200).json(allData);
});
router.get("/VisionBoard", async (req, res) => {
  const allData = await VisionBoard.find();
  res.status(200).json(allData);
});
module.exports = router;
