var game;
var lst = "common";
var eng = document.getElementById('engWord');
var heb = document.getElementById('hbWord');
var points = 0;


function redirectToGame(){
    var g = document.getElementById("chooseGame");
    game = g.options[g.selectedIndex].value;
    var l = document.getElementById("chooseList");
    var choose_game = function() {
        if (game === "recall-words") {
            window.location.assign("random_pair.html")
        }
        else if (game === "memory-game") {
            window.location.assign("memory_game.html")
        }
    }
    document.getElementById('choices').addEventListener('click', choose_game);
    lst = l.options[l.selectedIndex].value;
}

function checkList(){
    alert(lst);
}

function fetchList(){
    var jsn;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'common_words_hebrew.json', true);
    xhr.onload = function(){
        if(this.status == 200){ // this stands for xhr. since the function is inside xhr.onload, the object cn be refered to as this.
            // status of 200 means 'ok'
            jsn = JSON.parse(this.responseText)
            var rnd_int = Math.floor(Math.random() * jsn.common.length);
            var show_heb = function(){
                heb.style.display = "block";
            };
            if (lst == "common"){
                heb.style.display = "none";
                eng.innerHTML = jsn.common[rnd_int].english;
                heb.innerHTML = jsn.lst[rnd_int].hebrew;
                eng.addEventListener('click', show_heb);
            } else {
                heb.style.display = "none";
                eng.innerHTML = jsn.verbs[rnd_int].english;
                heb.innerHTML = jsn.verbs[rnd_int].infinitive;
                eng.addEventListener('click', show_heb);
            }
        } else if(this.status = 404){
            alert('not found')
            document.getElementById('text').innerHTML = 'not found';
        }
    }
    xhr.send();
}
    document.getElementById('fetch_word').addEventListener('click', fetchList);


