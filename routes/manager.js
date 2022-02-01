const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// /api/manager
router.get("/", async (req, res) => {
    const allManagers = await prisma.manager.findMany()

    res.json(allManagers)
});

// api/manager/:id
router.get("/:id", async (req, res) => {
    const { id } = req.body

    const theManager = await prisma.manager.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if (!theManager) {
        res.json({ message: "Not found any manager" })
    }

    res.json(theManager)
});

// api/manager
router.post("/", async (req, res) => {
    const { name, age, nationality } = req.body

    const newManager = await prisma.manager.create({
        data: {
            name,
            age: parseInt(age),
            nationality
        }
    })

    res.json(newManager)
});

// api/manager/:id/age
router.patch("/:id/age", async (req, res) => {
    const { id } = req.params
    const { age } = req.body

    const updatedManager = await prisma.manager.update({
        where: {
            id: parseInt(id)
        },
        data: {
            age: parseInt(age)
        }
    })

    if (!updatedManager) {
        res.json({ message: "Not found any manager" })
        return
    }

    res.json(updatedManager)
});

// api/manager/:id
router.delete("/:id", async (req, res) => {
    const { id } = req.params

    const deletedManager = await prisma.manager.delete({
        where: {
            id: parseInt(id)
        }
    })

    if (!deletedManager) {
        res.json({ message: "Not found any manager" })
        return
    }

    const currentManagers = await prisma.manager.findMany()

    res.json(currentManagers)
});

module.exports = router;
