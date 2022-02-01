const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// /api/team
router.get("/", async (req, res) => {
    const allTeam = await prisma.team.findMany({
        include: {
            players: true,
            company: true
        }
    })

    res.json(allTeam)
});

// /api/team/:id
router.get("/:id", async (req, res) => {
    const { id } = req.params

    const theTeam = await prisma.team.findUnique({
        where: {
            id: parseInt(id),
        },
        include: {
            players: true,
            company: true,
        }
    })

    if (!theTeam) {
        res.json({ message: "Not found any team" })
        return
    }

    res.json(theTeam)
});

// /api/team
router.post("/", async (req, res) => {
    const { name, stadium, league_id, manager_id } = req.body

    const newLeague = await prisma.team.create({
        data: {
            name,
            stadium,
            league_id: parseInt(league_id),
            manager_id: parseInt(manager_id)
        }
    })

    res.json(newLeague)
});

// /api/team/:id/name
router.patch("/:id/name", async (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const updatedTeam = await prisma.team.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name
        }
    })

    if (!updatedTeam) {
        res.json({ message: "Not found any team" })
        return
    }

    res.json(updatedTeam)
});

// /api/team/:id/stadium
router.patch("/:id/stadium", async (req, res) => {
    const { id } = req.params
    const { stadium } = req.body

    const updatedTeam = await prisma.team.update({
        where: {
            id: parseInt(id)
        },
        data: {
            stadium
        }
    })

    if (!updatedTeam) {
        res.json({ message: "Not found any team" })
        return
    }

    res.json(updatedTeam)
})

// /api/team/:id/manager
router.patch("/:id/manager", async (req, res) => {
    const { id } = req.params
    const { manager_id } = req.body

    const validateManager = await prisma.team.findUnique({
        where: {
            id: parseInt(manager_id)
        }
    })

    if (!validateManager) {
        res.json({ message: "Not found any manager" })
        return
    }

    const updatedTeam = await prisma.team.update({
        where: {
            id: parseInt(id)
        },
        data: {
            manager_id: parseInt(manager_id)
        }
    })

    if (!updatedTeam) {
        res.json({ message: "Not found any team" })
        return
    }

    res.json(updatedTeam)
})

// /api/team/:id
router.delete("/:id", async (req, res) => {
    const { id } = req.params

    const deletedTeam = await prisma.team.delete({
        where: {
            id: parseInt(id)
        }
    })

    if (!deletedTeam) {
        res.json({ message: "Not found any team" })
        return
    }

    const currentTeam = await prisma.team.findMany()

    res.json(currentTeam)
});

module.exports = router;
