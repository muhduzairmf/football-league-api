const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// /api/company
router.get("/", (req, res) => {
    res.sendStatus(200);
});

// /api/company/:id
router.get("/:id", (req, res) => {
    res.sendStatus(200);
});

// /api/company
router.post("/", (req, res) => {
    res.sendStatus(200);
});

// /api/company/:id/sponsored-team
router.patch("/:id/sponsored-team", (req, res) => {
    res.sendStatus(200);
});

// /api/company/:id
router.delete("/:id", (req, res) => {
    res.sendStatus(200);
});

module.exports = router;
