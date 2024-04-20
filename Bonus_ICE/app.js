const express = require('express');
const app = express();
const port = 3000;

// Home route with links
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the Express App!</h1>
        <p><a href="/meme">See a funny JavaScript meme</a></p>
        <p><a href="/teapot">This will give you a 418 error</a></p>
    `);
});

// Route for the meme
app.get('/meme', (req, res) => {
    res.send(`
        <h1>Here's a funny JavaScript meme!</h1>
        <img src="https://th.bing.com/th/id/OIP.15TiGiYqHFJh4YWaJyyMZwHaJj?rs=1&pid=ImgDetMain" 
             alt="Funny JavaScript Meme" />
    `);
});

// Route that returns a 418 error
app.get('/teapot', (req, res) => {
    res.status(418).send({
        error: "I'm a teapot!",
        message: "Sorry, this link leads nowhere, but at least I'm a teapot."
        
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});
