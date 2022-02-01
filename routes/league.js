const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// /api/league
router.get("/", async (req, res) => {
    const allLeague = await prisma.league.findMany({
        include: {
            teams: true
        }
    })

    res.json(allLeague)
});

// /api/league/:id
router.get("/:id", async (req, res) => {
    let { id } = req.params

    const theLeague = await prisma.league.findUnique({
        where: {
            id: parseInt(id)
        },
        include: {
            teams: true
        }
    })

    if (!theLeague) {
        res.json({ message: "Not Found any league" })
        return
    }

    res.json(theLeague)
});

// /api/league
router.post("/", async (req, res) => {
    const { name, country } = req.body

    const newLeague = await prisma.league.create({
        data: {
            name,
            country
        }
    })

    res.json(newLeague)
});

// /api/league/:id/name
router.patch("/:id/name", async (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const updatedLeague = await prisma.league.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name
        }
    })

    if (!updatedLeague) {
        res.json({ message: "Not found any league" })
        return
    }

    res.json(updatedLeague)
});

// /api/league/:id
router.delete("/:id", async (req, res) => {
    const { id } = req.params

    const deletedLeague = await prisma.league.delete({
        where: {
            id: parseInt(id)
        }
    })

    if (!deletedLeague) {
        res.json({ message: "Not found any league" })
        return
    }

    const currentLeague = await prisma.league.findMany()

    res.json(currentLeague)
});

module.exports = router;
