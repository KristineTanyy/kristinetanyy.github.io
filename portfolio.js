const filters=document.querySelectorAll('[data-filter]');
filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(x=>{const active=x===button;x.classList.toggle('active',active);x.setAttribute('aria-pressed',String(active));});document.querySelectorAll('[data-category]').forEach(project=>project.hidden=button.dataset.filter!=='all'&&project.dataset.category!==button.dataset.filter);}));
const dialog=document.querySelector('dialog');
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{dialog.querySelector('img').src=button.dataset.image;dialog.querySelector('img').alt=button.querySelector('img').alt;dialog.showModal();}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
