const sum_input = document.querySelector('#sum')
const term_input = document.querySelector('#term')
const startSum = document.querySelector('#start_sum')
const calc = document.querySelector('.calc')
const newTask = document.querySelector('.task')
const container = document.querySelector('.container')
const deleteButton = document.querySelector('.btn-remove')
let area = document.querySelector('.output')
let form = document.querySelector('.form')
let formContent = form.innerHTML


let dataArray = []

newTask.addEventListener('click', () => {
    const object = document.createElement('object')
    dataArray.push(object)
    console.log(dataArray);
    creatNewForm()
})


calc.addEventListener('click', (event) => {
    result = (sum_input.value - startSum.value) / term_input.value
    area.innerHTML = result
})

function creatNewForm() {
    const newElementDiv = document.createElement('div')
    newElementDiv.classList.add('.form')
    newElementDiv.innerHTML = formContent
    container.append(newElementDiv)
}