const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// /api/team
router.get("/", (req, res) => {
    res.sendStatus(200);
});

// /api/team/:id
router.get("/:id", (req, res) => {
    res.sendStatus(200);
});

// /api/team
router.post("/", (req, res) => {
    res.sendStatus(200);
});

// /api/team/:id/name
router.patch("/:id/name", (req, res) => {
    res.sendStatus(200);
});

// /api/team/:id
router.delete("/:id", (req, res) => {
    res.sendStatus(200);
});

module.exports = router;
