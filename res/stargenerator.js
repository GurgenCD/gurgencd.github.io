// Written by Gurgen Gurgenyan, circion.design

const global_population = 1;
const stardistribution = [2.75, 9.6, 19.2];

const starscolors = ["--stars1-color","--stars2-color","--stars3-color"]

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function stargeneration() {
    var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var screenWidth = window.screen.width;
    var viewportScale = screenWidth / viewportWidth;
    var finalcalwidth = screenWidth / viewportScale;

    var starElementArray = document.getElementsByClassName('stars');
    var stararray = new Array();

    for (i = 0; i < 3; i++) {
        stararray[i] = new Array();
        for (x = 0; x < finalcalwidth / stardistribution[i] * global_population; x++) {
            stararray[i][x] = getRandomArbitrary(1 * 2.75 * global_population, finalcalwidth) + "px " + getRandomArbitrary(1, 2000) + "px var(--stars"+Math.floor(i+1)+"-color)";
        }
        
        starElementArray[i].style.setProperty(('--stars' + Math.floor(i + 1)), (stararray[i].join(", ")))
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