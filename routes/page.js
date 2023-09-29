const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.render("index", {
    title: "매직넘버",
  });
}); // 랜딩 페이지

module.exports = router;
