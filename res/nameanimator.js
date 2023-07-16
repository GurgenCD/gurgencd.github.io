// Written by Gurgen Gurgenyan, circion.design
// A lot of the script was written a while ago and I slapped parametricity just a second ago.



window.addEventListener('DOMContentLoaded', () => {

    var text = document.getElementById("titleglitch0").innerText;
    var changearray = [];
    var textarray = [];
    var textarray_help = [];

    //Usage: lettermap["A"][2]
    var lettermap =
    {
        "A" : ["A", "a", "4"],
        "B" : ["B", "b"],
        "C" : ["C", "c"],
        "D" : ["D", "d"],
        "E" : ["E", "e", "3"],
        "F" : ["F", "f", "7"],
        "G" : ["G", "g"],
        "H" : ["H", "H"],
        "I" : ["I", "1", "i", "L", "!"],
        "J" : ["J", "j"],
        "K" : ["K", "k"],
        "L" : ["L", "l"],
        "M" : ["M", "m", "#"],
        "N" : ["N", "n", "#"],
        "O" : ["O", "o", "0"],
        "P" : ["P", "p"],
        "Q" : ["q", "q"],
        "R" : ["R", "r"],
        "S" : ["S", "s", "$"],
        "T" : ["T", "t"],
        "U" : ["U", "u", "%"],
        "V" : ["V", "v"],
        "W" : ["W", "w"],
        "X" : ["X", "x"],
        "Y" : ["Y", "y"],
        "Z" : ["Z", "z"]
    }



    function isLetter(str) {
        return str.length === 1 && str.match(/[a-z]/i);
    }

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    function generatePattern() {
        let lines = text.split('');
        for (var i = 0; i < text.length; i++) {
            textarray[i] = i;
        }


        for (var changecount = 0; changecount < 100; changecount++) {
            shuffle(textarray);
            for (var i = 0; i < lines.length; i++) {
                textarray_help[i] = lines[textarray[i]].toUpperCase();
            }
            //Yes I understand the security vulnerability associated with eval()
            if (isLetter(textarray_help[0]) && isLetter(textarray_help[1])) {
                var zero = lettermap[textarray_help[0]];
                var two = lettermap[textarray_help[1]];
            }

            var changethis = text;
            var which = Math.random();
            if (which == 0) {
                const changethis_arrayed = changethis.split('');
                if (isLetter(textarray_help[0]) && isLetter(textarray_help[1])) {
                    changethis_arrayed[textarray[0]] = lettermap[lines[textarray[0]].toUpperCase()][Math.floor(Math.random() * zero.length)];
                }
            }
            else {
                const changethis_arrayed = changethis.split('');
                if (isLetter(textarray_help[0]) && isLetter(textarray_help[1])) {
                    changethis_arrayed[textarray[0]] = lettermap[lines[textarray[0]].toUpperCase()][Math.floor(Math.random() * zero.length)];
                    changethis_arrayed[textarray[1]] = lettermap[lines[textarray[1]].toUpperCase()][Math.floor(Math.random() * two.length)];
                }
                var final = changethis_arrayed.join('');
            }
            changearray[changecount] = final;
        }
        for (i = 0; i < 9; i++) {
            document.getElementById("titleglitch" + i).textContent = text;
        }

    }

    function durationSlider() {
        var count = 0;
        var prevselector;
        setInterval(function () {
            var arrayselector = Math.floor(Math.random() * 99);
            var changedtext = document.getElementsByClassName("glitchtext");
            //Check to see if titleglitch0 was externally changed in order to restart pattern generation function.-
            if (changearray[prevselector] != changedtext[0].innerText) {
                text = document.getElementById("titleglitch0").innerText;
                generatePattern();
            }

            for (i = 0; i < 9; i++) {
                changedtext[i].textContent = changearray[arrayselector];
                prevselector = arrayselector;
            }

            count += 1;
            if (count >= 99) {
                count = 0;
            }
        }, 200);

    }

    generatePattern();
    durationSlider();
});