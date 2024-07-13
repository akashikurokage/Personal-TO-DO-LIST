const AddingTask = document.getElementById("addingtask");
const TaskList = document.getElementById("list-container");

function addTask(){
	if(AddingTask.value === ""){
		alert("You must write your task first Akashi");
	}

else{
		let li = document.createElement("li");
		li.innerHTML = AddingTask.value;
		TaskList.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	AddingTask.value = "";

saveData();
}

TaskList.addEventListener("click", function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveData();
	}

	else if(e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
		saveData();
	}
}, false);

function saveData(){
	localStorage.setItem("data", TaskList.innerHTML);
}

function showTask(){
	TaskList.innerHTML = localStorage.getItem("data");
}
showTask();



AddingTask.addEventListener("keypress", function(event){
	if(event.key === "Enter"){
		event.preventDefault();

		document.getElementById("taskbtn").click();
	}
});