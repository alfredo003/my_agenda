 read();
 let ul = document.querySelector('ul')

function listTasks(data){
  data.reverse().map((item,index)=>{  
    let li = document.querySelector('li').cloneNode(true);
    li.style.display = 'flex';
    li.setAttribute('data-key',index);
    li.querySelector('.hour').textContent=item.hour;
    li.querySelector('.name').textContent=item.name;
    li.querySelector('.delete').addEventListener('click',(e)=>{
      const id =li.getAttribute('data-key');
      deleted(id);
      li.remove();  
      message('error','deleted with success!');
      })
    ul.appendChild(li)
 })
}

function createTasks(){  
  let li = document.querySelector('li').cloneNode(true);
  let tasks = document.querySelector('.tasks');
  if(tasks.value=="") return message('empty','input empty') 
  const [name,hour] = tasks.value.split('/');
  if(hour == null) return message('empty','Fill out the hour of task');
  li.style.display = 'flex';
  li.querySelector('.hour').textContent=hour;
  li.querySelector('.name').textContent=name;
  create({hour,name});
  tasks.value = null;
  message('success','Created with success!');  
  li.querySelector('.delete').addEventListener('click',(e)=>{
    const id =li.getAttribute('data-key');
    deleted(id);
    li.remove();  
    message('error','deleted with success!');
 
    })
  ul.appendChild(li)
  }

