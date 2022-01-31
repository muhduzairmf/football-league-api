const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// /api/manager
router.get("/", (req, res) => {
    res.sendStatus(200);
});

// api/manager/:id
router.get("/:id", (req, res) => {
    res.sendStatus(200);
});

// api/manager
router.post("/", (req, res) => {
    res.sendStatus(200);
});

// api/manager/:id/team
router.patch("/:id/team", (req, res) => {
    res.sendStatus(200);
});

// api/manager/:id
router.delete("/:id", (req, res) => {
    res.sendStatus(200);
});

module.exports = router;
