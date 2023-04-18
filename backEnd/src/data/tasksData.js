const fs = require('fs')
const contentFilePath = './src/infra/data.json';

function save(content){
  const contentString = JSON.stringify(content)
  return fs.writeFile(contentFilePath,contentString,(err)=>{
    if(err){
      console.log(err)
    }else{
      console.log('success!')
    }
  })
}

function load(){
  return fs.readFile(contentFilePath,"utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }else{
       return JSON.parse(data);
    }})
}

module.exports ={
  save,
  load
}