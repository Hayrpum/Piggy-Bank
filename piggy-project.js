const container = document.querySelector('.container')

let ID = 0;
function generateId() {
    ID++;
    return ID;
}

let formContent = `
        <div class="section">
            <div class="task-section">
                <div class="foot">
                    <div class="logo">
                        <img class="img-logo" src="./img/Clip1.jpg" alt="logo"></img>
                        <p id="logo-text">moneybox</p>
                    </div>
                    <div class="task">
                        <p class="title-p">new dream</p>
                    </div>
                </div>
                <div class="input-list">
                    <input id="purpose" type="text" class="input" placeholder="purpose">
                    <input id="sum" type="number" class="input" placeholder="required amount">
                    <input id="term" type="number" class="input" placeholder="term">
                    <input id="start-sum" type="number" class="input" placeholder="initial amount">
                    <input id="percent" type="number" class="input" placeholder="percent">
                </div>
                <div class="payment">
                    <p class="p-payment">monthly payment :</p>
                </div>
                <div class="result">
                    
                </div>
                <div class="btn-group">
                    <button class="btn-calculate">
                        Calculate
                    </button>
                    <button class="btn-delete">
                        Delete
                    </button>
                </div>
            </div>
        </div>
`



creatNewForm()
let dataArray = []



function creatNewForm() {
    const newElementDiv = document.createElement('div')
    newElementDiv.id = generateId()

    newElementDiv.classList.add('.form')
    newElementDiv.innerHTML = formContent
    container.append(newElementDiv)

    const deleteButton = newElementDiv.querySelector('.btn-delete')
    deleteButton.addEventListener('click', () => {
        console.log(container.childElementCount)
        if (container.childElementCount > 1) {
            console.log(deleteButton);
            newElementDiv.remove()
        }
    })

    const calc = newElementDiv.querySelector('.btn-calculate')
    const newTask = newElementDiv.querySelector('.task')

    newTask.addEventListener('click', () => {

        creatNewForm()
    })


    calc.addEventListener('click', (event) => {
        let area = newElementDiv.querySelector('.result')
        const sum_input = newElementDiv.querySelector('#sum')
        const term_input = newElementDiv.querySelector('#term')
        const startSum = newElementDiv.querySelector('#start-sum')
        const purpose = newElementDiv.querySelector('#purpose')
        const percent = newElementDiv.querySelector('#percent')

        let object = dataArray.find((el) => {
            return el.id === newElementDiv.id
        });
        if (!object) {
            object = {
                id: newElementDiv.id,
                Goal: purpose.value,
                requiredAmount: sum_input.value,
                Term: term_input.value,
                StartSum: startSum.value,
                Precent: percent.value
            }
            dataArray.push(object)
        } else {
            object.Goal = purpose.value;
            object.requiredAmount = sum_input.value
            object.Term = term_input.value
            object.StartSum = startSum.value
            object.Precent = percent.value
        }

        console.log(dataArray);

        let result = (sum_input.value - startSum.value) / term_input.value
        area.innerHTML = result
    })

}