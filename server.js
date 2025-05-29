const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

let usersOnline = 0;

app.post('/user-online', (req, res) => {
    usersOnline++;
    setTimeout(() => usersOnline--, 60000); // User times out after 60s
    res.send({ status: 'ok' });
});

app.get('/online-users', (req, res) => {
    res.send({ count: usersOnline });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));