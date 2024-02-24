let defaultResult = 0;
let currentResult = defaultResult;
const task3Element = document.getElementById('task-3');

function add() {
    currentResult = currentResult + userInput.value;
}

addBtn.addEventListener('click', add);

outputResult(currentResult, calculationDescription);

function function1() {
    alert('hi');
}

function function2(name) {
    alert(name);
}

function function3(one='one', two='two', three='three') {
    alert('func3');
    return one + two + three;
}

function1();
function2();

task3Element.addEventListener('click', function1);
