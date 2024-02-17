const express = require("express");
const multer = require("multer");

const Anime = require("../model/Anime/Anime");
const AnimeDb = require("../model/Anime/AnimeDb");
const AnimeMaster = require("../model/Anime/AnimeMaster");
const AnimeMemes = require("../model/Anime/AnimeMemes");
const AnimeReels = require("../model/Anime/AnimeReels");
const Animepdf = require("../model/Anime/Animepdf");
const CartoonAnime = require("../model/Anime/CartoonAnime");
const DarkAnime = require("../model/Anime/DarkAnime");
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

router.post("/Anime", upload.single("testImage"), (req, res) => {
  const saveImage = new Anime({
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

router.post("/AnimeDb", upload.single("testImage"), (req, res) => {
  const saveImage = new AnimeDb({
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

router.post("/AnimeMaster", upload.single("testImage"), (req, res) => {
  const saveImage = new AnimeMaster({
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

router.post("/AnimeMemes", upload.single("testImage"), (req, res) => {
  const saveImage = new AnimeMemes({
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

router.post("/AnimeReels", upload.single("testImage"), (req, res) => {
  const saveImage = new AnimeReels({
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

router.post("/Animepdf", upload.single("testImage"), (req, res) => {
  const saveImage = new Animepdf({
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
router.post("/cartoon", upload.single("testImage"), (req, res) => {
  const saveImage = new CartoonAnime({
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
router.post("/DarkAnime", upload.single("testImage"), (req, res) => {
  const saveImage = new DarkAnime({
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

router.get("/Anime", async (req, res) => {
  const allData = await Anime.find();
  res.status(200).json(allData);
});
router.get("/AnimeDb", async (req, res) => {
  const allData = await AnimeDb.find();
  res.status(200).json(allData);
});

router.get("/AnimeMaster", async (req, res) => {
  const allData = await AnimeMaster.find();
  res.status(200).json(allData);
});

router.get("/AnimeMemes", async (req, res) => {
  const allData = await AnimeMemes.find();
  res.status(200).json(allData);
});

router.get("/AnimeReels", async (req, res) => {
  const allData = await AnimeReels.find();
  res.status(200).json(allData);
});

router.get("/Animepdf", async (req, res) => {
  const allData = await Animepdf.find();
  res.status(200).json(allData);
});
router.get("/cartoon", async (req, res) => {
  const allData = await CartoonAnime.find();
  res.status(200).json(allData);
});
router.get("/DarkAnime", async (req, res) => {
  const allData = await DarkAnime.find();
  res.status(200).json(allData);
});
module.exports = router;
