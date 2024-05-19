const express = require('express');
const path = require('path');
const useragent = require('express-useragent');

const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Use useragent middleware
app.use(useragent.express());

// Define routes
app.get('/', (req, res) => {
    if (req.useragent.isMobile) {
        res.render('index_m', {isMobile: true });
    } else {
        res.render('index', { isMobile: false });
    }
});

app.get('/overview', (req, res) => {
    res.render('overview');
});

app.get('/details', (req, res) => {
    if (req.useragent.isMobile) {
        res.render('details_m');
    } else {
        res.render('details');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
