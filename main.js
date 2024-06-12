// Счетчик количества шагов
var count=0;
// Получим ячейки таблицы
var table = document.querySelectorAll('#tic td');

// Функция для проверки условий победы
function victory() {
    // массив с подмассивами из победных комбинаций ячеек
    var combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    // проход по комбинациям с помощью цикла
    for (var combination of combos){
        if (table[combination[0]].innerHTML == table[combination[1]].innerHTML && table[combination[1]].innerHTML == table[combination[2]].innerHTML 
        && table[combination[0]].innerHTML != ''){
            return true;
        }
    }
    return false;
}

// Функция на расставление значений по ячейкам (их нажатию) и обработка действий
function processGame(event){
    // если счетчик четный,то проставляется Х
    event.target.innerHTML = count % 2 === 0 ? 'X' : 'O';

    // выявление победителя и выведение результатов победы 
    if (victory()){
        for (var cell of table){
            // игра не будет продолжаться после победы кого-то из игроков
            cell.removeEventListener('click', processGame);
        }
        alert(count % 2 === 0 ? 'X is the winner!' : 'O is the winner!');
    }
    else if (count == 8){
        alert ('Draw!');
    }

    // увеличиваем счетчик после нажатия на ячейку
    count++;
    // убираем вызов функции при повторном нажатии на ячейку
    event.target.removeEventListener('click', processGame);
}

// Функция для обработки события начала игры и нажатия на ячейку
function startGame(){
    count=0;
    for (var cell of table){
        cell.innerHTML= '';
        cell.addEventListener('click', processGame);
		}
    }

startGame();