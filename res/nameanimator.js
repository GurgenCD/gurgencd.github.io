// Written by Gurgen Gurgenyan, circion.design
// A lot of the script was written a while ago and I slapped parametricity just a second ago.

window.addEventListener('DOMContentLoaded', () => {
    const maxReplacementCount = 2;
    const divs = window.document.getElementsByClassName("glitchtext");

    const letterMap = {
        "A": ["4"],
        "E": ["3"],
        "F": ["7"],
        "I": ["i", "L", "!"],
        "M": ["#"],
        "N": ["#"],
        "O": ["0"],
        "S": ["$"],
        "U": ["%"]
    };

    function leetifyChar(c) {
        const possibleReplacements = letterMap[c.toUpperCase()];
      	// if undefined: could still be a ASCII letter to lower/uppercase randomly
      	// else: must also consider the lower/uppercase change
        if (possibleReplacements !== undefined) {
            let i = Math.floor(Math.random() * (possibleReplacements.length + 2));
          	if (i == possibleReplacements.length) {
            	return c.toLowerCase(); 
            } else if (i > possibleReplacements.length) {
              	return c.toUpperCase();
            } else {
            	return possibleReplacements[i];
            }
        } else {
          if (Math.random() >= 0.5) {
          	return c.toLowerCase();
          } else {
            return c.toUpperCase();
          }
        }
    }

    function randomlyLeetifyChars(s, n) {
        let r = s.split("");
      
        for (; n > 0; n--) {
            let i = Math.floor(Math.random() * r.length); // utf16 indexing! whatchout.
            r[i] = leetifyChar(r[i]);
        }
      	r = r.join("");
        return r;
    }

    function setTextAll(divs, s) {
        for (let i = 0; i < divs.length; i++) {
            divs[i].textContent = s;
        }
    }

  	const s = divs[0].textContent; // Initial text must be in the first div.
    setTextAll(divs, s); // Replicate among us all the divs.
    let handle = setTimeout(function () {
    let handle = setInterval(function () {
        setTextAll(divs, randomlyLeetifyChars(s, maxReplacementCount));

    }, 200);
    }, 1000);
});