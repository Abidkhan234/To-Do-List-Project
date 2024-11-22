var listContainer = document.getElementById("list-container");

var input = document.getElementById("input-box");

var inputBtn = document.getElementById("input-btn");

var ind = null;

var arr = [];

var renderList = () => {
    listContainer.innerHTML = "";
    arr.forEach((value, index) => {
        listContainer.innerHTML += `<li><p id='li'>${value}</p> <button id = 'delete' onclick = 'remove(${index})'>Remove</button> <button id = 'edit'  onclick = 'edit(${index})'>Edit</button></li>`;
    });
}

var addTask = () => {
    arr.unshift(input.value);
    input.value = "";
    renderList();
}


var remove = (i) => {

    arr.splice(i, 1);

    renderList();
}

var edit = (i) => {
    input.value = arr[i];
    document.getElementById("input-btn2").style.display = "inline";
    inputBtn.style.display = "none";
    ind = i;
}

var UpdateToDoItem = () => {
    if (!input.value) return;
    arr[ind] = input.value;
    input.value = "";
    inputBtn.style.display = "inline";
    document.getElementById("input-btn2").style.display = "none";
    renderList();
};
