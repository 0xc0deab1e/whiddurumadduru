const express = require('express');
const path = require('path');
const useragent = require('express-useragent');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(useragent.express());

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
