const btn = document.querySelector('#btn');

//2. Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
const uList = document.querySelector('ul');
const input = document.querySelector('#item');
const button = document.querySelector('#btn');

//Add item button Click Listener:
function handleClickAdd(event){
    event.preventDefault();
    /* Reason for event.preventDefault(); : 4. Inside the function body, start by calling preventDefault(). Since the input is wrapped in a form element, 
    pressing the Enter key will trigger the form to submit. The call to preventDefault() will prevent the form from 
    refreshing the page so a new item can be added to the list instead.*/
    let inputValue = input.value;
    if(inputValue){
        const item = createListItem(inputValue);
        uList.appendChild(item);
        document.body.appendChild(uList);
        input.value = '';
    }

}

//Create List item:
function createListItem(inputValue){
    // 7. Create three new elements — a list item (<li>), a <span>, and a <button> — and store them in variables. 
    // <li><span>inputvalue</spann><button>Delete</button></li>
    //Appending Children to item... item handled in the handkeClick call 
    const item  = document.createElement("li");
    const span = document.createElement("span");
    span.textContent=inputValue;
    const deleteButton = document.createElement("button");
    deleteButton.textContent= "Delete";
    
    item.appendChild(span);
    item.appendChild(deleteButton);
    document.body.appendChild(item);
    
    return item;
}


btn.addEventListener('click',handleClickAdd);
