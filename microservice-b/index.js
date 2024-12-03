// microservice-b/index.js
const express = require('express');
const app = express();

app.use(express.json());

const existingEmails = ["johndoe@example.com", "alice@example.com"];

app.post('/validate-email', (req, res) => {
    const { email } = req.body;

    if (existingEmails.includes(email)) {
        return res.status(400).json({ message: "Email already exists!" });
    }

    return res.status(200).json({ message: "Email is valid." });
});

const port = 3001;
app.listen(port, () => {
    console.log(`Microservice B listening at http://localhost:${port}`);
});
