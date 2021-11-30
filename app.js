const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();
app.get("/", (req, res) =>
  res.send("Hello from Basheer's docker container!! + test watchtower")
);

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${used} MB !!!!!!!!!!!!!!!`);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
