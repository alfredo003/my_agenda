function message (type,message){
  setInterval(()=>{
    alert.style.display ='none';
  },2000)
  var alert = document.querySelector('.message');
  alert.style.display ='flex';
  alert.textContent = message;
  switch(type){
    case 'empty':
     alert.style.backgroundColor='#e7be05';
    break;
    case 'error':
     alert.style.backgroundColor='red';
    break;
    case 'success':
      alert.style.backgroundColor='#00ff55';
    break;
    default:
      alert.style.backgroundColor='#333';
  }

}