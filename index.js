const express = require('express');
const taskRouts = require('./api/routes/tasks');
const app = express()
app.use(express.json());

app.use('/api',taskRouts);

const port = 3000;

app.listen(port,()=>console.log(`listening port ${port}`));
