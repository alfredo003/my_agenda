const btn_open = document.querySelector('.open-modal');
const btn_close =document.querySelector('dialog span');
const modal =document.querySelector('dialog');
const btn_send = document.querySelector('.btn-send');

btn_open.addEventListener('click',(e)=>{
  e.preventDefault();
  modal.showModal();
})

btn_close.addEventListener('click',(e)=>{
  e.preventDefault();
  modal.close();
})

btn_send.addEventListener('click',(e)=>{
 e.preventDefault();
 createTasks();
})