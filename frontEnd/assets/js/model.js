const url = "http://localhost:2000/tasks";

function read(){
  axios.get(url)
  .then(response=>{
   const data =response.data
   listTasks(data)

  })
  .catch(error=>console.log(error))
}

function create(tasks){
  axios.post(url,{
    name:tasks.name,
    hour:tasks.hour
  })
  .then(response=>{
    console.log(JSON.stringify(response.data))
  })
  .catch()
}

function deleted(id){
  axios.delete(`${url}/${id}`)
  .then(response=>{
   console.log(JSON.stringify(response.data))
  })
  .catch(error=>console.log(error))
}
  


