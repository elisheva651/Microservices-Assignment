const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const response = await axios.post('http://localhost:3001/validate-email', { email });
        
        if (response.status === 200) {
            console.log(`User registered: ${username} with email: ${email}`);
            return res.status(200).json({ message: 'User registered successfully' });
        }
    } catch (error) {
        if (error.response && error.response.status === 400) {
            return res.status(400).json({ message: error.response.data.message });
        }
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Microservice A listening at http://localhost:${port}`);
});