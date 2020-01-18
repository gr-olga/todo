const input = document.getElementById("add_input")
input.addEventListener("keypress", (keyPressed) => {
    const keyEnter = 13;
    const isEnter = keyPressed.which === keyEnter
    const isEmpty = input.value.length === 0

    if (isEnter && !isEmpty) attachBoxToParent(input.value)
});

input.addEventListener("input", (value) => {
    if (input.value.length > 0) {
        document.getElementById("button").disabled = '';
    } else {
        document.getElementById("button").disabled = 'disabled';
    }
})

function addText() {
    const text = document.getElementById("add_input").value;
    attachBoxToParent(text)
}

function attachBoxToParent(text) {
    const newBox = createBox(text);
    const list = document.getElementById("list");
    list.appendChild(newBox);

}

function createBox(text) {

    const taskList = document.createElement("li")
    taskList.className = "list-item";

    const taskCheckbox = document.createElement("input")
    taskCheckbox.className = "list-item-checkbox";
    taskCheckbox.type = 'checkbox'
    taskCheckbox.onclick = clickYes;
    // <input type="checkbox" class="list-item-checkbox"/>

    const taskText = document.createElement("span")
    taskText.className = "list-item-text";
    taskText.innerText = text;
    //<span class="list-item-text"> change button </span>

    taskList.appendChild(taskCheckbox)
    taskList.appendChild(taskText)


    return taskList;
}

function clickYes(event) {
    // if(event.target.checked) {
    //     event.target.parentElement.className = 'list item stroked-text'
    // } else {
    //     event.target.parentElement.className = 'list item'
    // }

    event.target.parentElement.className = (event.target.checked) ? 'list item stroked-text' : 'list item'
}

