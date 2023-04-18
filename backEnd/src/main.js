const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 2000;

app.use(express.json())
app.use(cors())
app.use('/',require('./router/tasksRoute'));
app.listen(PORT,()=>{console.log(`SERVER RUNNING IN PORT ${PORT}...`)})