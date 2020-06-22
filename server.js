const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(express.json({ extended: false }));

//routes
app.use('/api/users', require('./routes/api/user'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is up on port ${PORT}`));