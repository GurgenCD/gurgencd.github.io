    // Written by Gurgen Gurgenyan, circion.design

    try {
        var text = "Gurgen Gurgenyan";
        var textarray = [];
        var textarray_help = [];
        var A = ["A", "a", "4"],
            B = ["B", "b"],
            C = ["C", "c"],
            D = ["D", "d"]
            E = ["E", "e", "%", "3"],
            F = ["F", "f", "7"],
            G = ["G", "g"],
            H = ["H", "H"],
            I = ["I", "1", "i", "L", "!"],
            J = ["J", "j"],
            K = ["K", "k"],
            L = ["L", "l"],
            M = ["M", "m", "#"],
            N = ["N", "n"],
            O = ["O", "o", "0"],
            P = ["P", "p"],
            Q = ["q", "q"],
            R = ["R", "r"],
            S = ["S", "s"],
            T = ["T", "t"],
            U = ["U", "u"],
            V = ["V", "v"],
            W = ["W", "w"],
            X = ["X", "x"],
            Y = ["Y", "y"],
            Z = ["Z", "z"];



        	const lines = text.split('');

    	function isLetter(str) {
      		return str.length === 1 && str.match(/[a-z]/i);
    	}
        
        function shuffle(array) {
            let currentIndex = array.length,  randomIndex;
        
            // While there remain elements to shuffle...
                while (currentIndex != 0) {
                
                //   Pick a remaining element...
                  randomIndex = Math.floor(Math.random() * currentIndex);
                  currentIndex--;
                
                //   And swap it with the current element.
                  [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
                }
            return array;
        }
        
        for (var i = 0; i < text.length; i++)
        {
            textarray[i] = i;
        }

        var changearray = [];
        for(var changecount = 0; changecount < 100; changecount++)
        {
            shuffle(textarray);
            for(var i = 0; i < lines.length; i++)
            {
                textarray_help[i] = lines[textarray[i]].toUpperCase();
            }
            if(isLetter(textarray_help[0]) && isLetter(textarray_help[1]))
    	    {
            	var zero = eval(textarray_help[0]);
            	var two = eval(textarray_help[1]);
            }

            var changethis = text;
            var which = Math.random();
            if(which==0)
            {
                const changethis_arrayed = changethis.split('');
    	    if(isLetter(textarray_help[0])	 && isLetter(textarray_help[1]))
        	    {
                	changethis_arrayed[textarray[0]] = eval(lines[textarray[0]].toUpperCase())[Math.floor(Math.random() * eval(zero).length)];
    	    }
            }
            else
            {
                const changethis_arrayed = changethis.split('');
                if(isLetter(textarray_help[0])	 && isLetter(textarray_help[1]))
        	    {
                    changethis_arrayed[textarray[0]] = eval(lines[textarray[0]].toUpperCase())[Math.floor(Math.random() * eval(zero).length)];
                    changethis_arrayed[textarray[1]] = eval(lines[textarray[1]].toUpperCase())[Math.floor(Math.random() * eval(two).length)];
    	    }
                var final = changethis_arrayed.join('');
            }
            changearray[changecount] = final;
        }
    } catch (err) {
        console.error(err);
    }