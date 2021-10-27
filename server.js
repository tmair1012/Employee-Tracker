const express = require('express');
const db = require('./db/connection');
//const apiRoutes = require('./routes');

const PORT = process.env.PORT || 5000;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use apiRoutes
//app.use('/api', apiRoutes);

// Start server after DB
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
})