In this exercise, we want you to build a dynamic shopping list that allows you to add items using a form input and a button. After you type an item in the input field and click the button or press the Enter key, the following should happen:

The item should appear in the list.
Each item should have a button next to it that removes the item from the list when clicked.
The input fields should be cleared and focused, ready for the next item entry.

To complete the exercise, follow the steps below, and make sure that the list behaves as described above.

To begin, download a copy of our shopping-list.html starting file and make a copy of it somewhere. You'll see that it has some minimal CSS, a form with a label, input, and button, an empty list, and a <script> element. You'll be making all your additions inside the script.
Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
Create a function that will run in response to the button being clicked.
Inside the function body, start by calling preventDefault(). Since the input is wrapped in a form element, pressing the Enter key will trigger the form to submit. The call to preventDefault() will prevent the form from refreshing the page so a new item can be added to the list instead.
Continue by storing the current value of the input in a variable.
Next, clear the input element by setting its value to an empty string ("").
Create three new elements — a list item (<li>), a <span>, and a <button> — and store them in variables.
Append the span and button as children of the list item.
Set the text content of the span to the input value you saved earlier, and set the text content of the button to Delete.
Append the list item to the list.
Attach an event handler to the Delete button so that, when clicked, it removes the entire list item (<li>...</li>).
Finally, use the focus() method to focus the input element, so it's ready for entering the next shopping list item.
