let form = document.getElementById('form');
let name = document.getElementById('name');
let role = document.getElementById('role');
let reset = document.getElementById('reset');

form.addEventListener('submit', e=> {
    e.preventDefault();
    alert(`My Name is ${name.value} and my Role is ${role.value}`);
});

reset.addEventListener('click', ()=>{
    name.value = '';
    role.value = '';
})