const express = require("express");
const multer = require("multer");

const apple = require("../model/Wallpaper/AppleWallpaper");
const Autumn = require("../model/Wallpaper/Autumn");
const Ipad = require("../model/Wallpaper/Ipad");
const green = require("../model/Wallpaper/green");
const nature = require("../model/Wallpaper/nature");
const uniqueWallpaper = require("../model/Wallpaper/uniqueWallpaper");
const AppleWallpaper = require("../model/Wallpaper/AppleWallpaper");
const CarWallpaper = require("../model/Wallpaper/CarWallpaper");
const FallWallpaper = require("../model/Wallpaper/FallWallpaper");
const IphoneWallpaper = require("../model/Wallpaper/IphoneWallpaper");
const LaptopWallpaper = require("../model/Wallpaper/LaptopWallpaper");
const MotoWallpaper = require("../model/Wallpaper/MotoWallpaper");
const SeaWallpaper = require("../model/Wallpaper/SeaWallpaper");
const tropoicalWallpaper = require("../model/Wallpaper/tropoicalWallpaper");

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

router.post("/apple", upload.single("testImage"), (req, res) => {
  const saveImage = new apple({
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

router.post("/Autumn", upload.single("testImage"), (req, res) => {
  const saveImage = new Autumn({
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

router.post("/Ipad", upload.single("testImage"), (req, res) => {
  const saveImage = new Ipad({
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

router.post("/green", upload.single("testImage"), (req, res) => {
  const saveImage = new green({
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

router.post("/nature", upload.single("testImage"), (req, res) => {
  const saveImage = new nature({
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

router.post("/uniqueWallpaper", upload.single("testImage"), (req, res) => {
  const saveImage = new uniqueWallpaper({
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

router.post("/AppleWallpaper", upload.single("testImage"), (req, res) => {
  const saveImage = new AppleWallpaper({
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

router.post("/CarWallpaper", upload.single("testImage"), (req, res) => {
  const saveImage = new CarWallpaper({
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

router.post("/FallWallpaper", upload.single("testImage"), (req, res) => {
  const saveImage = new FallWallpaper({
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

router.post("/IphoneWallpaper", upload.single("testImage"), (req, res) => {
  const saveImage = new IphoneWallpaper({
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

router.post("/LaptopWallpaper", upload.single("testImage"), (req, res) => {
  const saveImage = new LaptopWallpaper({
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

router.post("/MotoWallpaper", upload.single("testImage"), (req, res) => {
  const saveImage = new MotoWallpaper({
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

router.post("/SeaWallpaper", upload.single("testImage"), (req, res) => {
  const saveImage = new SeaWallpaper({
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

router.post("/tropoicalWallpaper", upload.single("testImage"), (req, res) => {
  const saveImage = new tropoicalWallpaper({
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

router.get("/AppleWallpaper", async (req, res) => {
  const allData = await AppleWallpaper.find();
  res.status(200).json(allData);
});

router.get("/CarWallpaper", async (req, res) => {
  const allData = await CarWallpaper.find();
  res.status(200).json(allData);
});

router.get("/FallWallpaper", async (req, res) => {
  const allData = await FallWallpaper.find();
  res.status(200).json(allData);
});

router.get("/IphoneWallpaper", async (req, res) => {
  const allData = await IphoneWallpaper.find();
  res.status(200).json(allData);
});

router.get("/LaptopWallpaper", async (req, res) => {
  const allData = await LaptopWallpaper.find();
  res.status(200).json(allData);
});

router.get("/MotoWallpaper", async (req, res) => {
  const allData = await MotoWallpaper.find();
  res.status(200).json(allData);
});

router.get("/SeaWallpaper", async (req, res) => {
  const allData = await SeaWallpaper.find();
  res.status(200).json(allData);
});

router.get("/tropoicalWallpaper", async (req, res) => {
  const allData = await tropoicalWallpaper.find();
  res.status(200).json(allData);
});

router.get("/apple", async (req, res) => {
  const allData = await apple.find();
  res.status(200).json(allData);
});
router.get("/Autumn", async (req, res) => {
  const allData = await Autumn.find();
  res.status(200).json(allData);
});

router.get("/Ipad", async (req, res) => {
  const allData = await Ipad.find();
  res.status(200).json(allData);
});

router.get("/green", async (req, res) => {
  const allData = await green.find();
  res.status(200).json(allData);
});

router.get("/nature", async (req, res) => {
  const allData = await nature.find();
  res.status(200).json(allData);
});

router.get("/uniqueWallpaper", async (req, res) => {
  const allData = await uniqueWallpaper.find();
  res.status(200).json(allData);
});
module.exports = router;
