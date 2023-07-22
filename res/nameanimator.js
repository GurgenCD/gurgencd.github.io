// Written by Gurgen Gurgenyan, circion.design
// A lot of the script was written a while ago and I slapped parametricity just a second ago.

var charCount = 2;
var ignoreWhiteSpaces = true;

window.addEventListener('DOMContentLoaded', () => {

    var text = $(".glitchtext").text();

    //Since the glitch css effect requires multiple divs, this simply sets the text globally at start.
    $(".glitchtext").text(text);

    var letterMap =
    {
        "A": ["A", "a", "4"],
        "B": ["B", "b"],
        "C": ["C", "c"],
        "D": ["D", "d"],
        "E": ["E", "e", "3"],
        "F": ["F", "f", "7"],
        "G": ["G", "g"],
        "H": ["H", "H"],
        "I": ["I", "1", "i", "L", "!"],
        "J": ["J", "j"],
        "K": ["K", "k"],
        "L": ["L", "l"],
        "M": ["M", "m", "#"],
        "N": ["N", "n", "#"],
        "O": ["O", "o", "0"],
        "P": ["P", "p"],
        "Q": ["q", "q"],
        "R": ["R", "r"],
        "S": ["S", "s", "$"],
        "T": ["T", "t"],
        "U": ["U", "u", "%"],
        "V": ["V", "v"],
        "W": ["W", "w"],
        "X": ["X", "x"],
        "Y": ["Y", "y"],
        "Z": ["Z", "z"],
        //In case ignoreWhiteSpaces is true
        " ": " "
    }



    function isLetter(str) {
        return str.length === 1 && str.match(/[a-z]/i);
    }

    function shuffleArray(array) {

        let origPos = new Array;
        let shuffledArray = array.slice(0);

        //I should probably find a cleaner way to do this
        for (i = shuffledArray.length - 1; i > -1; i--) {
            origPos[i] = i;
        }

        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
            [origPos[i], origPos[j]] = [origPos[j], origPos[i]];
        }

        return {
            "shuffledArray": shuffledArray,
            "origPos": origPos
        }

    }

    function generateAnimation(glitchtext) {

        let textsplit = glitchtext.split('');

        //Can't quite think of a more efficient way to ignore whitespaces
        if(text.includes(" "))
        {
            if (ignoreWhiteSpaces) {

                var spacesMap = new Array;
                for (a = 0; a < textsplit.length; a++) {
                    if (!isLetter(textsplit[a])) {
                        spacesMap.push(a);
                    }
                }
                textsplit = textsplit.filter(char => char !== ' ')
            }
        }

        let glitcharray = [];
        for (let i = 0; i < 100; i++) {

            modifiedtext = textsplit.slice(0);
            let charRank = shuffleArray(modifiedtext);

            for (x = 0; x < charCount; x++) {
                let pickedCharmap = letterMap[charRank.shuffledArray[x].toUpperCase()]
                let random = Math.floor(Math.random() * pickedCharmap.length);
                modifiedtext[charRank.origPos[x]] = pickedCharmap[random];
            }
            if(text.includes(" "))
            {
                if (ignoreWhiteSpaces) {
                    for (b = 0; b < spacesMap.length; b++) {
                        modifiedtext.splice(spacesMap[b], 0, " ")
                    }
                }
            }

            glitcharray[i] = modifiedtext.join('');
        }
        return glitcharray
    }

    function durationSlider() {

        let glitcharray = generateAnimation(text);

        var count = 0;
        setInterval(function () {
            var arrayselector = Math.floor(Math.random() * 99);
            $(".glitchtext").text(glitcharray[arrayselector])

            count += 1;
            if (count >= 99) {
                count = 0;
            }
        }, 200);

    }

    durationSlider();
});