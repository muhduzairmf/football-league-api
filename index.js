const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        status: "200",
        message: "This is a root",
    });
});

app.use("/api/company", require("./routes/company"));
app.use("/api/league", require("./routes/league"));
app.use("/api/manager", require("./routes/manager"));
app.use("/api/player", require("./routes/player"));
app.use("/api/team", require("./routes/team"));

app.get("/*", (req, res) => {
    res.status(404).json({ message: "Not Found any API routes" });
});

app.listen(3405, () => {
    console.log("Listening on port http://localhost:3405");
});
