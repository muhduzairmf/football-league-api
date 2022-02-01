const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// /api/player
router.get("/", async (req, res) => {
    const allPlayers = await prisma.player.findMany()

    res.json(allPlayers)
});

// /api/player/:id
router.get("/:id", async (req, res) => {
    const { id } = req.params

    const thePlayer = await prisma.player.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if (!thePlayer) {
        res.json({ message: "Not found any player" })
        return
    }

    res.json(thePlayer)
});

// /api/player
router.post("/", async (req, res) => {
    const { name, age, nationality, team_id } = req.body

    const newPlayer = await prisma.player.create({
        data: {
            name,
            age,
            nationality,
            team_id: parseInt(team_id)
        }
    })

    res.json(newPlayer)
});

// /api/player/:id/age
router.patch("/:id/age", async (req, res) => {
    const { id } = req.params
    const { age } = req.body

    const updatedPlayer = await prisma.player.update({
        where: {
            id: parseInt(id)
        },
        data: {
            age: parseInt(age)
        }
    })

    if (!updatedPlayer) {
        res.json({ message: "Not found any player" })
        return
    }

    res.json(updatedPlayer)
})

// /api/player/:id/team
router.patch("/:id/team", async (req, res) => {
    const { id } = req.params
    const { team_id } = req.body

    const validateTeam = await prisma.team.findUnique({
        where: {
            id: parseInt(team_id)
        }
    })

    if (!validateTeam) {
        res.json({ message: "Not found any team"})
        return
    }

    const updatedPlayer = await prisma.player.update({
        where: {
            id: parseInt(id)
        },
        data: {
            team_id: parseInt(team_id)
        }
    })

    if (!updatedPlayer) {
        res.json({ message: "Not found any player" })
        return
    }

    res.json(updatedPlayer)
});

// /api/player/:id
router.delete("/:id", async (req, res) => {
    const { id } = req.params

    const deletedPlayer = await prisma.player.delete({
        where: {
            id: parseInt(id)
        }
    })

    if (!deletedPlayer) {
        res.json({ message: "Not found any player"})
        return
    }

    const currentPlayers = await prisma.player.findMany()

    res.json(currentPlayers)
});

module.exports = router;
