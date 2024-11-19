var input = document.getElementById("input");

var listContainer = document.getElementById("list-container");

function addTask() {
    if (input.value === "") {
        alert("You must write something")
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
} 

listContainer.onclick = (e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("active");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); 
    }
}