const inputEl = document.getElementById('to-do-input')
const buttonEl = document.getElementById('submit-button')
const ulEl = document.getElementById('todo-list')

buttonEl.addEventListener('click', function(evt) {
    while (inputEl.value !== ''){
    const li = document.createElement('li')
    li.textContent = inputEl.value
    ulEl.appendChild(li)
    inputEl.value = ''
    }
});
