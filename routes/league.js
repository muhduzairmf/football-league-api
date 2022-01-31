const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// /api/league
router.get("/", (req, res) => {
    res.sendStatus(200);
});

// /api/league/:id
router.get("/:id", (req, res) => {
    res.sendStatus(200);
});

// /api/league
router.post("/", (req, res) => {
    res.sendStatus(200);
});

// /api/league/:id/name
router.patch("/:id/name", (req, res) => {
    res.sendStatus(200);
});

// /api/league/:id
router.delete("/:id", (req, res) => {
    res.sendStatus(200);
});

module.exports = router;
