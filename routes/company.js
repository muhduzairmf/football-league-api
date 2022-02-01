const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// /api/company
router.get("/", async (req, res) => {
    const allCompany = await prisma.company.findMany({
        include: {
            team: true
        }
    })

    res.json(allCompany)
});

// /api/company/:id
router.get("/:id", async (req, res) => {
    const { id } = req.params

    const theCompany = await prisma.company.findUnique({
        where: {
            id: parseInt(id)
        },
        include: {
            team: true
        }
    })

    if (!theCompany) {
        res.json({ message: "Not found any company" })
        return
    }

    res.json(theCompany)
});

// /api/company
router.post("/", async (req, res) => {
    const { name, headquarters } = req.body

    const newCompany = await prisma.company.create({
        data: {
            name,
            headquarters
        }
    })

    res.json(newCompany)
});

// /api/company/:id/name
router.patch("/:id/name", async (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const updatedCompany = await prisma.company.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name
        }
    })

    if (!updatedCompany) {
        res.json({ message: "Not found any company" })
        return
    }

    res.json(updatedCompany)
});

router.patch("/:id/headquarters", async (req, res) => {
    const { id } = req.params
    const { headquarters } = req.body

    const updatedCompany = await prisma.company.update({
        where: {
            id: parseInt(id)
        },
        data: {
            headquarters
        }
    })

    if (!updatedCompany) {
        res.json({ message: "Not found any company"})
    }

    res.json(updatedCompany)
});

// /api/company/:id/sponsored-team
router.patch("/:id/sponsored-team", async (req, res) => {
    const { id } = req.params
    const { sponsoredTeam } = req.body

    const updatedCompany = await prisma.company.update({
        where: {
            id: parseInt(id)
        },
        data: {
            team: sponsoredTeam
        },
        include: {
            team:true
        }
    })

    if (!updatedCompany) {
        res.json({ message: "Not found any company" })
        return
    }

    res.json(updatedCompany)
});

// /api/company/:id
router.delete("/:id", async (req, res) => {
    const { id } = req.params

    const deletedCompany = await prisma.company.delete({
        where: {
            id: parseInt(id)
        }
    })

    if (!deletedCompany) {
        res.json({ message: "Not found any company"})
        return
    }

    const currentCompany = await prisma.company.findMany()

    res.json(currentCompany)
});

module.exports = router;
