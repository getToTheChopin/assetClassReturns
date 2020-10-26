/*
Toggle between real and nominal returns??
Custom asset allocation -- add to outputs
Rethink order of asset classes throughout (graph legend, drop down menu, etc...)
Add ouput to focus on one year in particular -- bar chart of all assets ranked high to low, other outputs??
*/

// Annual real returns by asset class
// https://www.seabreezecomputers.com/excel2array/
var largeCapReturns = [0.2643, 0.1678, 0.0026, 0.1130, 0.2553, -0.0889, 0.2635, 0.0440, 0.0695, -0.0146, 0.3404, 0.1893, 0.3096, 0.2658, 0.1790, -0.1202, -0.1332, -0.2391, 0.2622, 0.0733, 0.0141, 0.1288, 0.0133, -0.3703, 0.2327, 0.1335, -0.0085, 0.1398, 0.3038, 0.1279, 0.0063, 0.0965, 0.1927, -0.0622, 0.2852, 0.0429];
var smallCapReturns = [0.2619, 0.0448, -0.1272, 0.1967, 0.1104, -0.2284, 0.4094, 0.1487, 0.1553, -0.0310, 0.2555, 0.1432, 0.2250, -0.0416, 0.1991, -0.0583, 0.0159, -0.2181, 0.4307, 0.1623, 0.0394, 0.1292, -0.0273, -0.3606, 0.3272, 0.2600, -0.0549, 0.1622, 0.3578, 0.0669, -0.0434, 0.1590, 0.1384, -0.1101, 0.2452, -0.0740];
var REITReturns = [0.1460, 0.1772, -0.0784, 0.0855, 0.0388, -0.2032, 0.3150, 0.1123, 0.1631, 0.0036, 0.0998, 0.3137, 0.1678, -0.1765, -0.0655, 0.2221, 0.1069, 0.0132, 0.3327, 0.2669, 0.0831, 0.3181, -0.1966, -0.3704, 0.2632, 0.2659, 0.0549, 0.1567, 0.0090, 0.2934, 0.0165, 0.0629, 0.0277, -0.0771, 0.2606, -0.1377];
var intlDevReturns = [0.5034, 0.6748, 0.1926, 0.2275, 0.0555, -0.2790, 0.0872, -0.1471, 0.2892, 0.0490, 0.0838, 0.0257, 0.0000, 0.1801, 0.2356, -0.1710, -0.2313, -0.1757, 0.3611, 0.1646, 0.0985, 0.2314, 0.0680, -0.4133, 0.2487, 0.0676, -0.1503, 0.1653, 0.2026, -0.0637, -0.0091, 0.0037, 0.2379, -0.1606, 0.1932, -0.0682];
var emergingReturns = [0.2292, 0.1037, 0.0934, 0.3389, 0.5694, -0.1607, 0.5448, 0.0779, 0.6941, -0.1013, -0.0193, 0.1210, -0.1822, -0.1942, 0.5735, -0.2993, -0.0436, -0.0958, 0.5474, 0.2214, 0.2769, 0.2627, 0.3364, -0.5280, 0.7152, 0.1724, -0.2101, 0.1682, -0.0643, -0.0015, -0.1596, 0.0946, 0.2867, -0.1618, 0.1762, -0.0258];
var USBondReturns = [0.1755, 0.1393, -0.0278, 0.0281, 0.0860, 0.0240, 0.1182, 0.0412, 0.0675, -0.0519, 0.1526, 0.0025, 0.0761, 0.0686, -0.0335, 0.0774, 0.0678, 0.0580, 0.0212, 0.0104, -0.0090, 0.0178, 0.0282, 0.0505, 0.0323, 0.0497, 0.0459, 0.0237, -0.0359, 0.0510, -0.0033, 0.0051, 0.0142, -0.0190, 0.0629, 0.0574];
var cashReturns = [0.0378, 0.0499, 0.0131, 0.0215, 0.0371, 0.0162, 0.0252, 0.0061, 0.0024, 0.0128, 0.0306, 0.0187, 0.0353, 0.0349, 0.0200, 0.0251, 0.0257, -0.0068, -0.0087, -0.0201, -0.0046, 0.0211, 0.0067, 0.0201, -0.0241, -0.0146, -0.0286, -0.0170, -0.0147, -0.0074, -0.0070, -0.0178, -0.0129, -0.0011, -0.0015, -0.0074];
var goldReturns = [0.0170, 0.1795, 0.1902, -0.1956, -0.0681, -0.0833, -0.1252, -0.0868, 0.1392, -0.0487, -0.0165, -0.0774, -0.2324, -0.0243, -0.0171, -0.0955, -0.0039, 0.2078, 0.1919, 0.0141, 0.1297, 0.1930, 0.2582, 0.0536, 0.2018, 0.2605, 0.0553, 0.0652, -0.2903, -0.0119, -0.1229, 0.0663, 0.0927, -0.0324, 0.1589, 0.2260];
var hiYieldBondReturns = [0.1753, 0.1559, -0.0171, 0.0875, -0.0263, -0.1126, 0.2517, 0.1102, 0.1508, -0.0427, 0.1620, 0.0602, 0.1003, 0.0394, -0.0019, -0.0412, 0.0133, -0.0058, 0.1510, 0.0519, -0.0049, 0.0569, -0.0183, -0.2126, 0.3558, 0.1087, 0.0416, 0.1251, 0.0309, 0.0390, -0.0201, 0.0904, 0.0492, -0.0469, 0.1332, -0.0046];
var intlBondReturns = [0.0695, 0.1007, 0.0452, 0.0438, -0.0062, -0.0273, 0.0747, 0.0331, 0.1065, -0.0729, 0.1429, 0.0835, 0.0890, 0.1017, -0.0064, 0.0544, 0.0456, 0.0425, 0.0042, 0.0183, 0.0182, 0.0053, 0.0007, 0.0553, 0.0155, 0.0165, 0.0084, 0.0453, -0.0035, 0.0801, 0.0033, 0.0253, 0.0028, 0.0100, 0.0547, 0.0224];

var years = ["1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020 YTD"];
var yearsReverse = years.slice().reverse();

var assetClassLabels = ["US Large Cap Stocks", "US Small Cap Stocks", "REIT", "Int'l Dev Stocks", "Emerging Stocks", "All US Bonds", "Cash (T-Bill)", "Gold", "Hi-Yield US Bonds", "Int'l Bonds"];

var numYears = Number(years.length);
var numAssets = assetClassLabels.length;

// http://vrl.cs.brown.edu/color
var colourArray = ["#56ebd3", "#e5196a", "#39f27a", "#A476FF", "#218841", "#feafda", "#148fae", "#ffd700", "#B8B8B8", "#af641d"];
// Oct 21 colour palette - var colourArray = ["#56ebd3", "#e5196a", "#39f27a", "#fffeb3", "#218841", "#feafda", "#148fae", "#ffd700", "#aedddd", "#af641d"];
//alternative for colour 4 -- #fffeb3
// alternative for colour 9 -- #aedddd

var rankArray = [];
var rankedLabelArray = [];
var rankedReturnsArray = [];

var periodicTableDiv = document.getElementById("periodicTableDiv");

var singleYearSelection = document.getElementById("yearSelection");
var singlYearReturns = [];
var yearSelectionValue = "";

var singleAssetSelection = document.getElementById("assetSelection");
var annualReturns = [];
var assetSelectionValue = 0;

var chart;
var chart2;
var chart3;
var annualTickSpacing = 2;

var annualReturnBackgroundColours = [];

var averageCell = document.getElementById("averageCell");
var medianCell = document.getElementById("medianCell");
var CAGRCell = document.getElementById("CAGRCell");
var maxCell = document.getElementById("maxCell");
var minCell = document.getElementById("minCell");
var stdDevCell = document.getElementById("stdDevCell");


//main method

//add year labels to drop-down menu for year in focus


for(i=0;i<yearsReverse.length;i++) {
    var opt = yearsReverse[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    singleYearSelection.appendChild(el);
}

getUserInputs();
addInputEventListeners();
runSingleYearOutput();
runSingleAssetOutput();


function getUserInputs(){
    yearSelectionValue = singleYearSelection.value;
    assetSelectionValue = singleAssetSelection.value;
}

function addInputEventListeners() {
    var inputsArray = document.getElementsByClassName("userInput");
    console.log("# of event listeners: "+inputsArray.length);

    for(i=0;i<inputsArray.length;i++) {
        inputsArray[i].addEventListener('change',refreshAnalysis, false);
    }
}

function refreshAnalysis(){
    console.log("refresh analysis");
    chart2.destroy();
    chart3.destroy();
    getUserInputs();
    runSingleYearOutput();
    runSingleAssetOutput();
}


//Return sorted arrays for ranks/labels/returns, based on high to low returns
for(i=0; i<numYears; i++){
    var currentYearReturnsArray = [];
    var currentYearLabelArray = [];

    currentYearReturnsArray[0] = largeCapReturns[i];
    currentYearReturnsArray[1] = smallCapReturns[i]; 
    currentYearReturnsArray[2] = REITReturns[i]; 
    currentYearReturnsArray[3] = intlDevReturns[i]; 
    currentYearReturnsArray[4] = emergingReturns[i]; 
    currentYearReturnsArray[5] = USBondReturns[i]; 
    currentYearReturnsArray[6] = cashReturns[i]; 
    currentYearReturnsArray[7] = goldReturns[i]; 
    currentYearReturnsArray[8] = hiYieldBondReturns[i]; 
    currentYearReturnsArray[9] = intlBondReturns[i];

    var sortedReturns = currentYearReturnsArray.slice().sort(function(a,b){return b-a})
    rankedReturnsArray[i] = sortedReturns;

    var currentRanks = currentYearReturnsArray.map(function(v){ return sortedReturns.indexOf(v)+1 });

    rankArray[i] = currentRanks;

    for(j=0; j<numAssets; j++){
        currentYearLabelArray[j] = assetClassLabels[currentYearReturnsArray.indexOf(sortedReturns[j])];
    }
    rankedLabelArray[i] = currentYearLabelArray;

}

console.log(rankArray);
console.log(rankedLabelArray);
console.log(rankedReturnsArray);


//Generate periodic table

var periodicTable = document.createElement('table');
periodicTable.setAttribute('id',"periodicTable");        
var r1 = document.createElement('tr');

//create header row showing years
for(i=0; i<numYears; i++){
    var yearHeader = document.createElement('th');
    yearHeader.setAttribute('id','row0col'+(i+1));       
    yearHeader.textContent = years[i];
    periodicTable.appendChild(yearHeader);
}
periodicTable.appendChild(r1);

//fill table with ranked values (pair of label + return)
for(i=0; i<numAssets; i++){
    var tableRow = document.createElement('tr');
    tableRow.classList.add("tableRow");
    tableRow.setAttribute('id','row'+(i+1));        
    periodicTable.appendChild(tableRow);

    for(j=0; j<numYears; j++){

        var tableCell = document.createElement('td');
        tableCell.classList.add("periodicTableCell");
        tableCell.setAttribute('id','row'+(i+1)+'col'+(j+1));        
        
        currentLabel = rankedLabelArray[j][i];
        currentReturn = Math.round(rankedReturnsArray[j][i]*100*10)/10+"%";

        tableCell.innerHTML = currentLabel+"\n"+currentReturn;
        
        if(currentLabel == assetClassLabels[0]){
            tableCell.classList.add("cellColour0");
        } else if(currentLabel == assetClassLabels[1]){
            tableCell.classList.add("cellColour1");
        } else if(currentLabel == assetClassLabels[2]){
            tableCell.classList.add("cellColour2");
        } else if(currentLabel == assetClassLabels[3]){
            tableCell.classList.add("cellColour3");
        } else if(currentLabel == assetClassLabels[4]){
            tableCell.classList.add("cellColour4");
        } else if(currentLabel == assetClassLabels[5]){
            tableCell.classList.add("cellColour5");
        } else if(currentLabel == assetClassLabels[6]){
            tableCell.classList.add("cellColour6");
        } else if(currentLabel == assetClassLabels[7]){
            tableCell.classList.add("cellColour7");
        } else if(currentLabel == assetClassLabels[8]){
            tableCell.classList.add("cellColour8");
        } else if(currentLabel == assetClassLabels[9]){
            tableCell.classList.add("cellColour9");
        }
        tableRow.appendChild(tableCell);

    }

}
periodicTableDiv.appendChild(periodicTable);

//scroll the last year into view
var lastCellID = "row0col"+numYears;
var elmnt = document.getElementById(lastCellID);
elmnt.scrollIntoView();

//apply formatting to all periodic table cells
var periodicTableCells = document.getElementsByClassName("periodicTableCell");
for(i=0;i<periodicTableCells.length;i++) {
    
    //add on hover and mouseout function to all periodic table cells
    periodicTableCells[i].addEventListener("mouseover",periodicTableCellHighlight,false);
    periodicTableCells[i].addEventListener("mouseout",periodicTableCellMouseOut,false);

    var currentClassList = String(periodicTableCells[i].classList);

    //add default colour to cells
    if(currentClassList.includes("cellColour0")){
        periodicTableCells[i].style.backgroundColor = colourArray[0];
    } else if(currentClassList.includes("cellColour1")){
        periodicTableCells[i].style.backgroundColor = colourArray[1];
    } else if(currentClassList.includes("cellColour2")){
        periodicTableCells[i].style.backgroundColor = colourArray[2];
    } else if(currentClassList.includes("cellColour3")){
        periodicTableCells[i].style.backgroundColor = colourArray[3];
    } else if(currentClassList.includes("cellColour4")){
        periodicTableCells[i].style.backgroundColor = colourArray[4];
    } else if(currentClassList.includes("cellColour5")){
        periodicTableCells[i].style.backgroundColor = colourArray[5];
    } else if(currentClassList.includes("cellColour6")){
        periodicTableCells[i].style.backgroundColor = colourArray[6];
    } else if(currentClassList.includes("cellColour7")){
        periodicTableCells[i].style.backgroundColor = colourArray[7];
    } else if(currentClassList.includes("cellColour8")){
        periodicTableCells[i].style.backgroundColor = colourArray[8];
    } else if(currentClassList.includes("cellColour9")){
        periodicTableCells[i].style.backgroundColor = colourArray[9];
    }

}

//action taken when user hovers over a cell
function periodicTableCellHighlight(){
    var classList = String(this.classList);
    var highlightClass = classList.slice(classList.length-11,classList.length);
    console.log("highlightClass: "+highlightClass);

    for(j=0;j<periodicTableCells.length;j++){
        
        var currentClassList = String(periodicTableCells[j].classList);
        if(currentClassList.includes(highlightClass)){
            //do nothing
        } else{
            periodicTableCells[j].classList.add("fadeColour");
        }
    }
}

//action taken when user's mouse leaves a cell
function periodicTableCellMouseOut(){
    for(j=0;j<periodicTableCells.length;j++){
        periodicTableCells[j].classList.remove("fadeColour");
    }
}

//line chart for all annual returns
var ctx = document.getElementById('allReturnsLineChart').getContext('2d');

chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: years,
        datasets: [
            {
                label: "US Large Cap Stocks",
                data: largeCapReturns,
                fill: false,
                borderColor: colourArray[0],
                borderWidth: 1,
                pointBorderColor: colourArray[0],
                pointBackgroundColor: colourArray[0],
                backgroundColor: colourArray[0],
                pointBorderWidth: 1,
                pointHoverRadius: 7,
                pointRadius: 6,
                pointHitRadius: 8,
            },
            {
                label: "US Small Cap Stocks",
                data: smallCapReturns,
                fill: false,
                borderColor: colourArray[1],
                borderWidth: 1,
                pointBorderColor: colourArray[1],
                pointBackgroundColor: colourArray[1],
                backgroundColor: colourArray[1],
                pointBorderWidth: 1,
                pointHoverRadius: 7,
                pointRadius: 6,
                pointHitRadius: 8,
            },
            {
                label: "REIT",
                data: REITReturns,
                fill: false,
                borderColor: colourArray[2],
                borderWidth: 1,
                pointBorderColor: colourArray[2],
                pointBackgroundColor: colourArray[2],
                backgroundColor: colourArray[2],
                pointBorderWidth: 1,
                pointHoverRadius: 7,
                pointRadius: 6,
                pointHitRadius: 8,
            },
            {
                label: "International Developed Stocks",
                data: intlDevReturns,
                fill: false,
                borderColor: colourArray[3],
                borderWidth: 1,
                pointBorderColor: colourArray[3],
                pointBackgroundColor: colourArray[3],
                backgroundColor: colourArray[3],
                pointBorderWidth: 1,
                pointHoverRadius: 7,
                pointRadius: 6,
                pointHitRadius: 8,
            },
            {
                label: "Emerging Market Stocks",
                data: emergingReturns,
                fill: false,
                borderColor: colourArray[4],
                borderWidth: 1,
                pointBorderColor: colourArray[4],
                pointBackgroundColor: colourArray[4],
                backgroundColor: colourArray[4],
                pointBorderWidth: 1,
                pointHoverRadius: 7,
                pointRadius: 6,
                pointHitRadius: 8,
            },
            {
                label: "All US Bonds",
                data: USBondReturns,
                fill: false,
                borderColor: colourArray[5],
                borderWidth: 1,
                pointBorderColor: colourArray[5],
                pointBackgroundColor: colourArray[5],
                backgroundColor: colourArray[5],
                pointBorderWidth: 1,
                pointHoverRadius: 7,
                pointRadius: 6,
                pointHitRadius: 8,
            },
            {
                label: "Cash (T-Bill)",
                data: cashReturns,
                fill: false,
                borderColor: colourArray[6],
                borderWidth: 1,
                pointBorderColor: colourArray[6],
                pointBackgroundColor: colourArray[6],
                backgroundColor: colourArray[6],
                pointBorderWidth: 1,
                pointHoverRadius: 7,
                pointRadius: 6,
                pointHitRadius: 8,
            },
            {
                label: "Gold",
                data: goldReturns,
                fill: false,
                borderColor: colourArray[7],
                borderWidth: 1,
                pointBorderColor: colourArray[7],
                pointBackgroundColor: colourArray[7],
                backgroundColor: colourArray[7],
                pointBorderWidth: 1,
                pointHoverRadius: 7,
                pointRadius: 6,
                pointHitRadius: 8,
            },
            {
                label: "High-Yield Bonds",
                data: hiYieldBondReturns,
                fill: false,
                borderColor: colourArray[8],
                borderWidth: 1,
                pointBorderColor: colourArray[8],
                pointBackgroundColor: colourArray[8],
                backgroundColor: colourArray[8],
                pointBorderWidth: 1,
                pointHoverRadius: 7,
                pointRadius: 6,
                pointHitRadius: 8,
            },
            {
                label: "International Bonds",
                data: intlBondReturns,
                fill: false,
                borderColor: colourArray[9],
                borderWidth: 1,
                pointBorderColor: colourArray[9],
                pointBackgroundColor: colourArray[9],
                backgroundColor: colourArray[9],
                pointBorderWidth: 1,
                pointHoverRadius: 7,
                pointRadius: 6,
                pointHitRadius: 8,
            },
        ]
    },

    // Configuration options go here
    options: {

        maintainAspectRatio: false,
    
        tooltips: {
            
            // Include a dollar sign in the ticks and add comma formatting
            callbacks: {
                label: function(tooltipItem, data) {
                    var label = data.datasets[tooltipItem.datasetIndex].label || '';

                    if (label) {
                        label += ': ';
                    }
                    label += Math.round(tooltipItem.yLabel*1000)/10+"%";
                    return label;
                }
            },
        },

        scales: {
            yAxes: [{
                ticks: {
                    // Include a dollar sign in the ticks and add comma formatting
                    callback: function(value, index, values) {
                        return (Math.round(value*100)).toLocaleString()+"% ";
                    },

                    fontColor: "rgb(56,56,56)",
                },

                scaleLabel: {
                    display: true,
                    labelString: "Real Annual Return (%)",
                    fontColor: "rgb(56,56,56)",
                    fontStyle: "bold",
                    fontSize: 15,
                },

                gridLines: {
                    drawTicks: false,
                    zeroLineColor: "rgb(56,56,56)",
                    zeroLineWidth: 2,
                },
            }],

            xAxes: [{
                ticks: {
                    userCallback: function(item, index) {
                        if (!(index % annualTickSpacing)) return item+" ";
                    },
                    autoSkip: false,
                    fontColor: "rgb(56,56,56)",

                    maxRotation: 90,
                    minRotation: 90, 
                },

                scaleLabel: {
                    display: true,
                    labelString: "Year",
                    fontColor: "rgb(56,56,56)",
                    fontStyle: "bold",
                    fontSize: 15,
                },

                gridLines: {
                    drawTicks: false,
                    zeroLineColor: "rgb(56,56,56)",
                    zeroLineWidth: 2,
                },
            }],    
        },

        legend: {
            labels: {
                fontColor: "rgb(56,56,56)",
                boxWidth: 13,
                padding: 10,
            },
        },

        title: {
            display: true,
            text: "Real Annual Returns by Asset Class",
            fontSize: 18,
            fontColor: "rgb(56,56,56)",
            padding: 2,
        },

    }
});


function runSingleYearOutput(){

    var selectedYearIndex = years.indexOf(String(yearSelectionValue));
    console.log("year seletion value: "+yearSelectionValue);
    console.log("selected year index: "+selectedYearIndex);

    singlYearReturns[0] = largeCapReturns[selectedYearIndex];
    singlYearReturns[1] = smallCapReturns[selectedYearIndex];
    singlYearReturns[2] = REITReturns[selectedYearIndex];
    singlYearReturns[3] = intlDevReturns[selectedYearIndex];
    singlYearReturns[4] = emergingReturns[selectedYearIndex];
    singlYearReturns[5] = USBondReturns[selectedYearIndex];
    singlYearReturns[6] = cashReturns[selectedYearIndex];
    singlYearReturns[7] = goldReturns[selectedYearIndex];
    singlYearReturns[8] = hiYieldBondReturns[selectedYearIndex];
    singlYearReturns[9] = intlBondReturns[selectedYearIndex];

    var singlYearReturnsSorted = singlYearReturns.slice().sort(function(a,b){return b-a})
    var assetLabelsSorted = [];
    var coloursSorted = []

    for(i=0; i<numAssets; i++){
        assetLabelsSorted[i] = assetClassLabels[singlYearReturns.indexOf(singlYearReturnsSorted[i])];
        coloursSorted[i] = colourArray[singlYearReturns.indexOf(singlYearReturnsSorted[i])];
    }

    console.log("Single year returns sorted: "+singlYearReturnsSorted);
    console.log("Asset labels sorted: "+assetLabelsSorted);

    var chartTitleString = String(yearSelectionValue)+" Returns by Asset Class";

    var ctx2 = document.getElementById('singleYearChart').getContext('2d');

        //single index annual returns bar chart 
        chart2 = new Chart(ctx2, {
            // The type of chart we want to create
            type: 'bar',
    
            // The data for our dataset
            data: {
                labels: assetLabelsSorted,
                datasets: [
                    {
                        label: "Return (%)",
                        data: singlYearReturnsSorted,
                        backgroundColor: coloursSorted, 
                    },                
                ]
            },
    
            //options for annual returns chart.js bar chart
            options: annualReturnsBarChartOptions = {
    
                plugin_one_attribute: 1,
                maintainAspectRatio: false,
    
                tooltips: {
                    // Include a dollar sign in the ticks and add comma formatting
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var label = data.datasets[tooltipItem.datasetIndex].label || '';
    
                            if (label) {
                                label += ': ';
                            }
                            label += (tooltipItem.yLabel*100).toFixed(1) + "%";
                            return label;
                        }
                    },
                },
                
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: "Return (%)",
                            fontColor: "rgb(56,56,56)",
                            fontStyle: "bold",
                            fontSize: 15,
                        },
    
                        ticks: {
                            callback: function(value, index, values) {
                                return (value*100).toFixed(1)+"%";
                            },
    
                            fontColor: "rgb(56,56,56)",
    
                            //suggestedMin: -0.6,
                            //suggestedMax: 0.6,
                        },
    
                        gridLines: {
                            zeroLineColor: "rgb(56,56,56)",
                            zeroLineWidth: 2,
                        },
                    }],
    
                    xAxes: [{
                        
                        ticks: {
                            autoSkip: false,
    
                            maxRotation:90,
                            minRotation:90,
                        },
    
                        scaleLabel: {
                            display: true,
                            labelString: "Asset Class",
                            fontColor: "rgb(56,56,56)",
                            fontStyle: "bold",
                            fontSize: 15,
                        },
    
                        gridLines: {
                            zeroLineColor: "rgb(56,56,56)",
                            zeroLineWidth: 2,
                        },
                    }],    
                },
    
                legend: {
                    labels: {
                        fontColor: "rgb(56,56,56)",
                        boxWidth: 13,
                        padding: 10,
                    },
                },
    
                title: {
                    display: true,
                    text: chartTitleString,
                    fontSize: 18,
                    fontColor: "rgb(56,56,56)",
                    padding: 2,
                },
    
                plugins: {
    
                },
            }
        });

}


function runSingleAssetOutput(){
    //draw annual return chart with chart.js
    var ctx3 = document.getElementById('annualReturnsChart').getContext('2d');

    //need to make this a drop down menu to choose asset class

    if(assetSelectionValue == 0){
        annualReturns = largeCapReturns;
        chartTitleString = "US Large Cap Stocks";
    } else if(assetSelectionValue == 1){
        annualReturns = smallCapReturns;
        chartTitleString = "US Small Cap Stocks";
    } else if(assetSelectionValue == 2){
        annualReturns = REITReturns;
        chartTitleString = "REIT";
    } else if(assetSelectionValue == 3){
        annualReturns = intlDevReturns;
        chartTitleString = "International Developed Stocks";
    } else if(assetSelectionValue == 4){
        annualReturns = emergingReturns;
        chartTitleString = "Emerging Market Stocks";
    } else if(assetSelectionValue == 5){
        annualReturns = USBondReturns;
        chartTitleString = "All US Bonds";
    } else if(assetSelectionValue == 6){
        annualReturns = cashReturns;
        chartTitleString = "Cash (T-Bill)";
    } else if(assetSelectionValue == 7){
        annualReturns = goldReturns;
        chartTitleString = "Gold";
    } else if(assetSelectionValue == 8){
        annualReturns = hiYieldBondReturns;
        chartTitleString = "High-Yield Bonds";
    } else if(assetSelectionValue == 9){
        annualReturns = intlBondReturns;
        chartTitleString = "International Bonds";
    }

    var upYearCount = 0;
    var downYearCount = 0;
    var cumIndexCAGR = 1;
    var returnSum = 0;
    var indexAverage = 0;
    var indexMedian = 0;
    var indexCAGR = 0;
    var indexMax = 0;
    var indexMin = 0;
    var indexStdDev = 0;

    for(i=0; i<annualReturns.length; i++){
        var currentYearReturn = Number(annualReturns[i]);
        returnSum += currentYearReturn;
        cumIndexCAGR = cumIndexCAGR * (1+currentYearReturn);

        if(i==0){
            indexMax = currentYearReturn;
            indexMin = currentYearReturn;
        } else{
            if(currentYearReturn>indexMax){
                indexMax = currentYearReturn;
            }

            if(currentYearReturn<indexMin){
                indexMin = currentYearReturn;
            }
        }

        if(currentYearReturn >=0){
            annualReturnBackgroundColours[i] = "#00b457";
            upYearCount++;
        } else{
            annualReturnBackgroundColours[i] = "#C20000";
            downYearCount++;
        }
    }

    console.log("cumulative CAGR index: "+cumIndexCAGR);

    //calculate summary metrics (averages, min/max, etc...)
    indexAverage = returnSum / annualReturns.length;

    var arrSort = annualReturns.slice().sort();
    var len = arrSort.length;
    var mid = Math.ceil(len / 2);
    indexMedian = len % 2 == 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];

    indexCAGR = Math.pow(cumIndexCAGR,(1/numYears))-1;

    indexStdDev = getStandardDeviation(annualReturns);

    //fill table cells with formatted metrics
    averageCell.innerHTML = Math.round(indexAverage*1000)/10+"%";
    medianCell.innerHTML = Math.round(indexMedian*1000)/10+"%";
    CAGRCell.innerHTML = Math.round(indexCAGR*1000)/10+"%";
    maxCell.innerHTML = Math.round(indexMax*1000)/10+"%";
    minCell.innerHTML = Math.round(indexMin*1000)/10+"%";
    stdDevCell.innerHTML = Math.round(indexStdDev*1000)/10+"%";

    //format metrics as green or red font
    if(indexAverage>0){
        averageCell.style.color = "#00b457";
    } else if(indexAverage<0){
        averageCell.style.color = "#C20000";
    }

    if(indexMedian>0){
        medianCell.style.color = "#00b457";
    } else if(indexMedian<0){
        medianCell.style.color = "#C20000";
    }

    if(indexCAGR>0){
        CAGRCell.style.color = "#00b457";
    } else if(indexCAGR<0){
        CAGRCell.style.color = "#C20000";
    }

    if(indexMax>0){
        maxCell.style.color = "#00b457";
    } else if(indexMax<0){
        maxCell.style.color = "#C20000";
    }

    if(indexMin>0){
        minCell.style.color = "#00b457";
    } else if(indexMin<0){
        minCell.style.color = "#C20000";
    }


    //single index annual returns bar chart 
    chart3 = new Chart(ctx3, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: years,
            datasets: [
                {
                    label: "Annual Return (%)",
                    data: annualReturns,
                    backgroundColor: annualReturnBackgroundColours, 
                },                
            ]
        },

        //options for annual returns chart.js bar chart
        options: annualReturnsBarChartOptions = {

            plugin_one_attribute: 1,
            maintainAspectRatio: false,

            tooltips: {
                // Include a dollar sign in the ticks and add comma formatting
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = data.datasets[tooltipItem.datasetIndex].label || '';

                        if (label) {
                            label += ': ';
                        }
                        label += (tooltipItem.yLabel*100).toFixed(1) + "%";
                        return label;
                    }
                },
            },
            
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Annual Return (%)",
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                        fontSize: 15,
                    },

                    ticks: {
                        callback: function(value, index, values) {
                            return (value*100).toFixed(1)+"%";
                        },

                        fontColor: "rgb(56,56,56)",

                        suggestedMin: -0.6,
                        suggestedMax: 0.6,
                    },

                    gridLines: {
                        zeroLineColor: "rgb(56,56,56)",
                        zeroLineWidth: 2,
                    },
                }],

                xAxes: [{
                    
                    ticks: {

                        userCallback: function(item, index) {
                            if (!(index % annualTickSpacing)) return item;
                        },
                        autoSkip: false,

                        maxRotation:90,
                        minRotation:90,
                    },

                    scaleLabel: {
                        display: true,
                        labelString: "Year",
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                        fontSize: 15,
                    },

                    gridLines: {
                        zeroLineColor: "rgb(56,56,56)",
                        zeroLineWidth: 2,
                    },
                }],    
            },

            legend: {
                labels: {
                    fontColor: "rgb(56,56,56)",
                    boxWidth: 13,
                    padding: 10,
                },
            },

            title: {
                display: true,
                text: chartTitleString,
                fontSize: 18,
                fontColor: "rgb(56,56,56)",
                padding: 2,
            },

            plugins: {

                    /*
                datalabels: {


                    formatter: function(value, context) {
                        return Math.round(value*100) + '%';
                    },

                    anchor: function(value){
                        if(value >= 0){
                            return 'end';
                        } else{
                            return 'center';
                        }
                    },
    
                }
                */
            },
        }
    });
}

function getStandardDeviation (array) {
    const n = array.length
    const mean = array.reduce((a, b) => a + b) / n
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
  }
