var toDolist = [
    'ăn sáng'
];

var btn = document.getElementById('btn');
btn.addEventListener('click', addItem);
btn.addEventListener('click', ()=> {alert('Add?');});


function addItem(){
    var newItem = document.getElementById('new-item');
    var value = newItem.value;
    toDolist.push(value);
    render();
    newItem.value = '';
}


function render(){
    var list = document.getElementById('todo-list');
    var content = toDolist.map((item)=>
     {return'<li>' +item+ '</li>';}
     );
    list.innerHTML = content.join('')
}

render();