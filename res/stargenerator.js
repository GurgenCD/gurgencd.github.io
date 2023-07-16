// Written by Gurgen Gurgenyan, circion.design

const global_population = 1;
const stardistribution = [2.75, 9.6, 19.2];


function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function stargeneration()
{
    let width = window.screen.width;
    var starElementArray = document.getElementsByClassName('stars');
    var stararray = new Array();

    for(i = 0; i < 3; i++)
    {
        stararray[i] = new Array();
        for(x = 0; x < width/stardistribution[i]*global_population; x++)
        {
            stararray[i][x] = (getRandomArbitrary(i*2.75*global_population, width) + "px " +  getRandomArbitrary(1, 2000) + "px #fff");
        }
        starElementArray[i].style.setProperty(('--stars'+ Math.floor(i+1)), (stararray[i].join(", ")))
    }
}
window.addEventListener('DOMContentLoaded', () => {
    try { 
        stargeneration()
        addEventListener("resize", (event) => stargeneration());
    } catch (err) {
        console.error(err);
    }
});