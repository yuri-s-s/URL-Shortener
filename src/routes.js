"use strict";

const express = require("express");
const router = express.Router();

const shortenerController = require("./controllers/shortener.controller");

router.get('/', (req, res) => {
    res.send(`Shortener rodando em ${process.env.BASE_URL || 3000}`);
});

router.post("/shortener", shortenerController.create)
router.get("/shortener/:shortUrl", shortenerController.getByShortUrl)


module.exports = router