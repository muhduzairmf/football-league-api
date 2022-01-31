const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// /api/player
router.get("/", (req, res) => {
    res.sendStatus(200);
});

// /api/player/:id
router.get("/:id", (req, res) => {
    res.sendStatus(200);
});

// /api/player
router.post("/", (req, res) => {
    res.sendStatus(200);
});

// /api/player/:id/team
router.patch("/:id/team", (req, res) => {
    res.sendStatus(200);
});

// /api/player/:id
router.delete("/:id", (req, res) => {
    res.sendStatus(200);
});

module.exports = router;
