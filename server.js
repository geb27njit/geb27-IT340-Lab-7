const express = require('express');
const app = express();
// Using a different port (3000) than Angular (4200)
const port = 3000;

// A simple endpoint to test the connection (for later)
app.get('/api/message', (req, res) => {
    // This response will be captured in Screenshot 8
    res.send({ message: 'Welcome to MEAN Stack' });
});

// Simple root route, can be removed later
app.get('/', (req, res) => {
    res.send('Hello MEAN Stack!');
});

app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
});

