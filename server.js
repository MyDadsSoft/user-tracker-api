const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const activeUsers = new Map(); // key: userId, value: timeout ID

const TIMEOUT = 60000; // 1 minute

app.post('/user-online', (req, res) => {
    const userId = req.body.userId;

    if (!userId) {
        return res.status(400).json({ error: 'Missing userId in request body' });
    }

    // Clear old timeout if it exists
    if (activeUsers.has(userId)) {
        clearTimeout(activeUsers.get(userId));
    }

    // Set a new timeout
    const timeout = setTimeout(() => {
        activeUsers.delete(userId);
    }, TIMEOUT);

    // Save/update the timeout
    activeUsers.set(userId, timeout);

    res.send({ status: 'ok' });
});

app.get('/online-users', (req, res) => {
    res.send({ count: activeUsers.size });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
