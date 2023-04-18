const express = require('express');
const tasksData = require('./../data/tasksData.js');
const {randomUUID} = require('crypto')
const router = express.Router();
let dataTasks = [];

dataTasks = tasksData.load();
router.get('/tasks',(req,res)=>{
res.json(dataTasks)
});

router.post('/tasks',(req,res)=>{
  const {name,hour} = req.body;
  const  task = {
   id:randomUUID(),
   name,
   hour
  }
   dataTasks.push(task);
   tasksData.save(dataTasks)
  res.json({message:"Tasks created with success!"})
});

router.delete('/tasks/:id',(req,res)=>{
  const {id} = req.params;
  const taskId = dataTasks.findIndex(tasks=>tasks.id == id);
  dataTasks.splice(taskId,1);
  writeFile(dataTasks);
  res.json({message:'Deleted with success!'})
});

function writeFile(dataTasks){
 
}
module.exports = router;