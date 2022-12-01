let input = document.getElementById("task-input");
let btn = document.getElementById("btn");
let lists = document.getElementById('task-list');
let clearAll = document.getElementById('clear-all');



input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn").click();
    }
});
document.querySelector('#btn').onclick = function () {
    if (document.querySelector('.input-part-ourInput input').value.trim() == "") {
        alert("Please Enter a list");
    }
    else {
        document.querySelector('#task-list').innerHTML +=
            `<li class="task-list-item"><button id="done"><i class="fa-solid fa-check"></i></button>${document.querySelector('.input-part-ourInput input').value}<button id="trush"><i class="fa-solid fa-trash"></i></button></li>`;
        input.value = "";


        var trush = document.querySelectorAll("#trush");
        for (var i = 0; i < trush.length; i++) {
            trush[i].onclick = function () {
                this.parentNode.remove();
            }
        }


        // var done = document.querySelectorAll("#done");
        // for (var i = 0; i < done.length; i++) {
        //     done[i].onclick = function () {
        //         this.parentNode.remove();
        //     }
        // }
    }
}
// CLEAR ALLLLLL
clearAll.addEventListener('click', () => {
    lists.innerHTML = "";
})