//renders the diagonal hexagons on the screen
import React, { useEffect, useRef } from 'react';
import './style.css';
import * as d3 from 'd3';
import firstObj from '/songSelector.js'
import axios from 'axios';
//import { profileController } from '/profileController'
//import links from songSelector
const numHexagons = 68; //about 66 visible hexagons in this row
const hexagonSize = 12;
const hexagonSpacing = 10;
const svgWidth = window.innerWidth;
const svgHeight = window.innerHeight;

const storedColors = []; //stores the 4 most recent individual colors
//if color is black, it doesn't get click option
//if number is not in between ranges, it gets blacked out
const colors = [
        '#ff3333',
        '#ff1500',
        '#ff2b00',
        '#ff4000',
        '#ff5500',
        '#ff6a00',
        '#ff8000',
        '#ff9500',
        '#ffaa00',
        '#ffbf00',
        '#ffd500',
        '#ffea00',
        '#ffff00',
        '#eaff00',
        '#d4ff00',
        '#bfff00',
        '#aaff00',
        '#95ff00',
        '#80ff00',
        '#55ff00',
        '#40ff00',
        '#2bff00',
        '#15ff00',
        '#00ff00',
        '#00ff15',
        '#00ff2b',
        '#00ff40',
        '#00ff55',
        '#00ff6a',
        '#00ff80',
        '#00ff95',
        '#00ffaa',
        '#00ffbf',
        '#00ffd5',
        '#00ffea',
        '#00ffff',
        '#00eaff',
        '#00d4ff',
        '#00bfff',
        '#00aaff',
        '#0095ff',
        '#007fff',
        '#006aff',
        '#0055ff',
        '#0040ff',
        '#002bff',
        '#0015ff',
        '#0000ff',
        '#1500ff',
        '#2a00ff',
        '#4000ff',
        '#5500ff',
        '#6a00ff',
        '#7f00ff',
        '#9500ff',
        '#aa00ff',
        '#bf00ff',
        '#d400ff',
        '#ea00ff',
        '#ff00ff',
        '#ff00ea',
        '#ff00d4',
        '#ff00bf',
        '#ff00aa',
        '#ff0095',
        '#ff0080',
        '#ff006a',
        '#ff0055',
        '#ff0040',
        '#ff002b',
        '#ff0015',
'#ff0000']// color options
const lightColors = [
'#ff8080',
'#ff8a80',
'#ff9580',
'#ff9f80',
'#ffaa80',
'#ffb580',
'#ffbf80',
'#ffca80',
'#ffd480',
'#ffdf80',
'#ffea80',
'#fff480',
'#ffff80',
'#f4ff80',
'#eaff80',
'#dfff80',
'#dfff80',
'#caff80',
'#b4ff80',
'#b5ff80',
'#aaff80',
'#9fff80',
'#95ff80',
'#8aff80',
'#80ff80',
'#80ff8a',
'#80ff95',
'#80ff9f',
'#80ffaa',
'#80ffb5',
'#80ffbf',
'#80ffca',
'#80ffdf',
'#80ffea',
'#80fff4',
'#80ffff',
'#80f4ff',
'#80eaff',
'#80dfff',
'#80d4ff',
'#80caff',
'#80bfff',
'#80b5ff',
'#80aaff',
'#809fff',
'#8095ff',
'#808aff',
'#8080ff',
'#8a80ff',
'#9580ff',
'#9f80ff',
'#aa80ff',
'#b580ff',
'#bf80ff',
'#ca80ff',
'#d580ff',
'#df80ff',
'#ea80ff',
'#f480ff',
'#ff80ff',
'#ff80f4',
'#ff80ea',
'#ff80df',
'#ff80d4',
'#ff80ca',
'#ff80bf',
'#ff80b5',
'#ff80aa',
'#ff809f',
'#ff8095',
'#ff808a',
'#ff8080'];
const darkColors = [ 
'#b30000',
'#b30f00',
'#b31e00',
'#b32d00',
'#b33b00',
'#b34a00',
'#b35900',
'#b36800',
'#b37700',
'#b38600',
'#b39500',
'#b3a400',
'#b2b300',
'#a4b300',
'#95b300',
'#86b300',
'#77b300',
'#68b300',
'#59b300',
'#4ab300',
'#3bb300',
'#2db300',
'#1eb300',
'#0fb300',
'#00b300',
'#00b30f',
'#00b31e',
'#00b32d',
'#00b33c',
'#00b34a',
'#00b359',
'#00b368',
'#00b377',
'#00b386',
'#00b395',
'#00b3a4',
'#00b2b3',
'#00a4b3',
'#0095b3',
'#0086b3',
'#0077b3',
'#0068b3',
'#0059b3',
'#004ab3',
'#003bb3',
'#002db3',
'#001eb3',
'#000fb3',
'#0000b3',
'#0f00b3',
'#1e00b3',
'#2d00b3',
'#3c00b3',
'#4a00b3',
'#5900b3',
'#6800b3',
'#7700b3',
'#8600b3',
'#9500b3',
'#a400b3',
'#b300b2',
'#b300a4',
'#b30095',
'#b30086',
'#b30077',
'#b30068',
'#b30059',
'#b3004a',
'#b3003b',
'#b3002d',
'#b3001e',
'#b3000f',
'#b30000'];
const lightRow2 = [//6-14//need to come back to.
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffbf80',
'#ffca80',
'#ffffff',
'#ffdf80',
'#ffea80',
'#fff480',
'#ffff80',
'#ffffff',
'#eaff80',
'#dfff80',
'#d4ff80',
'#caff80',
'#bfff80'

];
const lightRow3 = [
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffe0c2',
'#ffe5c2',
'#ffebc2',
'#fff0c2',
'#ffffff',
'#fffac2',
'#ffffc2',
'#faffc2',
'#f5ffc2',
'#f0ffc2',
'#ebffc2'
];
const lightRow4 = [
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#fff2e5',
'#fff4e5',
'#ffffff',
'#fff9e5',
'#fffbe5',
'#ffffff',
'#ffffe5',
'#fdffe5',
'#fbffe5',
'#f9ffe5',
'#f6ffe5'
];
const darkRow2 = [
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#004080',
'#003580',
'#1a1a1a',
'#002080',
'#001580',
'#000b80',
'#000080',
'#1a1a1a',
'#150080',
'#200080',
'#2b0080',
'#350080',
'#400080',
'#4a0080',
'#33004d'
];
const darkRow3 = [
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#003366',
'#002a66',
'#002266',
'#001966',
'#141414',
'#000866',
'#000066',
'#080066',
'#110066',
];
const darkRow4 = [
    '#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#ffffff',
'#00264d',
'#00204d',
'#0d0d0d',
'#00134d',
'#000d4d',
'#0d0d0d',
'#000033',
'#040033',
'#080033',
];

function assignClickHandler(hexagon, arr, i, individualColor) {
        hexagon.on("click", async () => {
            let numID;
            let specificColor;
            if (arr === lightColors) {
                numID = [i] + 'a';
                specificColor = individualColor;
            } else if (arr === darkColors) {
                numID = [i] + 'b';
                specificColor = individualColor;
            } else if (arr === lightRow2) {
                numID = [i] + 'c';
                specificColor = individualColor;
            } else if (arr === lightRow3) {
                numID = [i] + 'd';
                specificColor = individualColor;
            } else if (arr === lightRow4) {
                numID = [i] + 'e';
                specificColor = individualColor;
            } else if (arr === darkRow2) {
                numID = [i] + 'f';
                specificColor = individualColor;
            } else if (arr === darkRow3) {
                numID = [i] + 'g';
                specificColor = individualColor;
            } else if (arr === darkRow4) {
                numID = [i] + 'h';
                specificColor = individualColor;
            } else {
                numID = [i];
            } //don't put localhost; if proxy is set up correctly it is not necessary

            /* routing logic
            //once clicked, it creates a get request, with the passed in key, which then goes to profileController selectSong middleware
            //router.js will return path.resolve(__dirname, value with associated link)
            */
            try {
                const response = await axios.get(`/../routes/router/${numID}`)
                console.log('Server response:', response.data);
                //simple redirect logic with color array handling
                if (storedColors.length >= 4) {
                    storedColors.shift();
                    storedColors.push(individualColor); //need to create setTimeout for delay for profile image
                    console.log(storedColors);
                    console.log(numID);
                    return window.open((firstObj[numID]))
                } else {
                    storedColors.push(individualColor);
                    console.log(storedColors);
                    console.log(numID);
                    return window.open((firstObj[numID])); //opens new tab and chooses the song
                }
            } catch (error) {
                console.error('Error making GET request for color:', error);
            }
            });
    };

function HexagonComponent() {
    const svgRef = useRef(null); //each individual click event
    useEffect(() => {//creation of diagonal effect

        const svg = d3.select(svgRef.current);//stating it is a d3 component

        function renderDiagonalLine(xPlacement, colorArr, delayPresent, min, max) {//creates the diagonal line
            for (let i = 0; i < numHexagons; i++) {
                if (i >= min && i <= max) {
            let individualColor = colorArr[i]
                const xPosition = i * (hexagonSize + hexagonSpacing) + xPlacement; //placement from left to right of screen
                const yPosition = i * (hexagonSize * Math.sqrt(0.01) + hexagonSpacing); //placement from top to bottom of screen

                let hexagon = svg.append("polygon") //creation of hexagon shape
                    .attr("class", "hexagon-button")
                    .attr("points", getHexagonPoints(xPosition, yPosition, hexagonSize))
                    .style("fill", individualColor) //color coordination
                    .style("opacity", 0)
                    
            assignClickHandler(hexagon, colorArr, i, individualColor);        //once button is clicked, selectSong will get invoked
                                
/*window.location.href = firstObj[hexKey];*/ //adding links to each button
                    hexagon.transition()
                        .duration(400) // flash on
                        .delay(i * delayPresent)
                        .style("opacity", 1)

                        .transition()
                        .delay(2500) // Add additional delay here if you want to wait before flashing off
                        .duration(50) // flash off
                        .style("opacity", 0)

                        .transition()
                        .delay(100) // Add delay here to wait before flashing back on
                        .duration(50) // flash back on (flicker effect)
                        .style("opacity", 1);
                }
                        function getHexagonPoints(x, y, size) { //hexagon creation
                            const angles = d3.range(0, 2 * Math.PI, Math.PI / 3);
                            const points = angles.map(angle => [x + size * Math.cos(angle), y + size * Math.sin(angle)]);
                            return points.join(" ");
                        }
                        
                    }    
    }
//invoking the individual lines
setTimeout(() => {

    renderDiagonalLine(hexagonSize*14, lightRow4, 29, 5, 12);
    renderDiagonalLine(hexagonSize*10.5, lightRow3, 25, 6, 14);
    renderDiagonalLine(hexagonSize*7, lightRow2, 20, 7, 16);
    renderDiagonalLine(hexagonSize*3.5, lightColors, 20, 0, 68);
    renderDiagonalLine(0, colors, 21, 0, 68);
    renderDiagonalLine(hexagonSize*-3.5, darkColors, 22, 0, 68);
    renderDiagonalLine(hexagonSize*-7, darkRow2, 20, 44, 53);
    renderDiagonalLine(hexagonSize*-10.5, darkRow3, 21, 46, 54);
    renderDiagonalLine(hexagonSize*-14, darkRow4, 22, 48, 55);
},400);

    }, []);
//hexKey={hexKey}
//add logic to store id of button that was selected //svg renders the svgRef, and gives height/width properties
    return (
        <div id="hexagon-container" className="hexagon-container">
            <svg ref={svgRef} width={svgWidth} height={svgHeight} ></svg>
        </div>

    )
}


export default HexagonComponent;