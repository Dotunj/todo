window.onload = function(){

};

function get_todos(){
	var todos = new Array;
	var todos_str = localStorage.getItem('todo');
	if(todos_str != null){
		todos = JSON.parse(todos_str);
	}
   return todos;
}
 function add(){
     var d= new Date();
    d = d.toDateString(); 
 	var task = {
        time: d,
        description: document.getElementById('task').value
    }
    var todos = get_todos();
    todos.push(task.time);
    todos.push(task.description);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value='';

    show();

    return false;
 }

 function show(){
 	var todos = get_todos();
    
    var html='<ul>';
    for(var i=0; i<todos.length; i++){
    	html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML =html;
    var buttons = document.getElementsByClassName('remove');
    for(var i=0; i<buttons.length; i++){
    	buttons[i].addEventListener('click', remove);
    };
}
    var list= document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName ==='LI'){
        ev.target.classList.toggle('checked');
    }
}, false); 



 function remove(){
 	var id = this.getAttribute('id');
 	var todos = get_todos();
 	todos.splice(id, 1);
 	localStorage.setItem('todo', JSON.stringify(todos));
   
    show();

    return false;
 }
 document.getElementById('add').addEventListener('click', add);
 show();