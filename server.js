const express = require('express');

const app = express();

app.use(express.static('./dist/personal-portfoli-angular'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/personal-portfoli-angular/'}),
);

app.listen(process.env.PORT || 8080);
