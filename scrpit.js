
function formatAMPM() {
    var date = new Date();
    var hours = date.getHours();
    var days = date.getDay(); 
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = date + ' ' + hours + ':' + minutes + ' ' + ampm;
    return strTime;
}


var header = document.getElementById('myHeader');
header.style.fontFamily='Segoe UI Light';
var todo = document.getElementById('myText').value;
var btnadd = document.getElementById('submit');

//add eventlistener
btnadd.addEventListener('click', addTodo);

//addtodo function
function addTodo(e){
    e.preventDefault();

    //create new task
    var todo = document.getElementById('myText').value;
   
    
    //create li element
    var newItem = document.createElement('li');
    newItem.className = 'task fadeIn';
    newItem.textContent=todo;
    newItem.classList.add("posts");
   

    list.appendChild(newItem);

}

function removeTask (e){
    if(confirm('Are you sure?')){
    var li = e.target.parentElement;
    li.className = 'fadeOut'

        setTimeout(function() {
        list.removeChild(li);
        }, 500);
    }
}

function displayTask (e){
    var li = e.target.parentElement;
    li.className = 'line'
}







    
   //create delete button
    // var btnDelete = document.createElement('button');
    // btnDelete.textContent = 'X';
    // btnDelete.addEventListener('click', removeTask);

    // newItem.appendChild(btnDelete); 

    //create done button
    // var btnDone = document.createElement('button');
    // btnDone.textContent = "Done";
    // btnDone.addEventListener('click' ,displayTask);

    // newItem.appendChild(btnDone);

    //append to-do list