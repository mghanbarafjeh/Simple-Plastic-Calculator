/************************************  Functions  ****************************************************/
function weightCalc(elem) {return elem.value * elem.dataset.weight}
function maximum(e) {if (weightCalc(e)>= max){max = weightCalc(e);maxindex=e}}
/*Comment#: To calculate the MAX value and find its category. */

function totalmax() {max = 0;maxindex=null; for (let i=0; i<array.length; i++){maximum(array[i])}}
/*Comment#: To find the most biggest waste plastic source.  */

function footcalc() {footprint = (b0+b1+b2+b3+b4+b5+b6+b7+b8+b9+b10)/numberOfHouseholds}
/*Comment#: To calculate the total plastic waste. */

function updateHousehold() {return numberOfHouseholds=selectHousehold.value,footcalc(),updateFootprint()}
/*Comment#: When number of househoulds changes,footprint value should be recalculated. */

function updateFootprint(){totalPerYear.innerHTML=Number(footprint).toFixed(4)};
/*Comment#: To display the footprint amount into the paragraph with no more 4 decimal*/

function returnLabelText(){for (let i=0; i<lables.length; i++){if (maxindex == lables[i].control){return lables[i].innerText}}}
/*Comment#: To retrive the full name of the category. */

function updateBiggestCategory() {biggestCategory.innerHTML=returnLabelText(),biggestCategory.style.color="red",biggestCategory.style.textTransform="uppercase";}
function returnTip(first,second) {if(first.name==second.id.slice(4)) {return second,tipid = second} else {return false}}
/*Comment#: To compare the id of the waste source with the id of tips, and then linking the waste category to the appropriate tip. */

function tipIndex(tiparray) {if (footprint != 0 ){for (let i=0; i<tiparray.length; i++){returnTip(maxindex,tiparray[i])};showtip()}}
function showtip() {tipid.style.display="inline",tipid.style.color="blue"}
function hidetip() {tipParagraphs.forEach(function(elem) {elem.style.display="none",elem.style.color="black"})}
function allFunctions() {totalmax(),footcalc(),updateHousehold(),hidetip(),updateFootprint(),resetMaxIndex(),updateBiggestCategory(),tipIndex(tiparray),resetBig()}
/*Comment#: To run multiple functions with a particular trigger. */

/*************** Reset Functions **************/
function resetVariables(){max=0;footprint=null;maxindex=null;tipid=null;b0=0;b1=0;b2=0;b3=0;b4=0;b5=0;b6=0;b7=0;b8=0;b9=0;b10=0;}
function resetSelect() {selectHousehold.value="1";}
function resetInputs(array) {for (let i=0; i<array.length; i++){array[i].value="0"}}
/*Comment#: To change all input values to 0. */

function resetBig() {if (footprint == 0) {biggestCategory.innerHTML="Unknown Source",biggestCategory.style.color="black",biggestCategory.style.textTransform="lowercase"}}
function resetMaxIndex(){if (footprint==0){max=0;maxindex = null,tipid=null,resetFootprint()};}
function resetFootprint() {totalPerYear.innerHTML="0";footprint =0;}
function resetAll() {resetInputs(array),resetFootprint(),resetMaxIndex(),hidetip(),resetBig(),resetSelect(),resetVariables()}
/*Comment#: To reset all variables , inputs, calculated values and selector value to use for the reset button.*/


/****************************************/
document.addEventListener("DOMContentLoaded",function(){
/*Comment#: To define all behaviors and variables when the HTML page loads. */    
/****************************************/



/************************************  Variables  ****************************************************/
 inputBottles = document.getElementById("in_bottles");
 inputBags = document.getElementById("in_bags");
 inputWrapping = document.getElementById("in_wrapping");
 inputYogurt = document.getElementById("in_yogurt");
 inputTakeout = document.getElementById("in_takeout");
 inputCups = document.getElementById("in_cups");
 inputPackaging = document.getElementById("in_packaging");
 inputDetergent = document.getElementById("in_detergent");
 inputShampoo = document.getElementById("in_shampoo");
 inputToothbrushes = document.getElementById("in_toothbrushes");
 inputToothpaste = document.getElementById("in_toothpaste");
 selectHousehold = document.getElementById("in_household");
 totalPerYear = document.getElementById("total_per_year");
 biggestCategory = document.getElementById("biggest-category")
 tipParagraphs = document.querySelectorAll("p.tip")
 array = document.querySelectorAll("input");
 tiparray = document.querySelectorAll(".tip")
 lables = document.querySelectorAll("label");
 resetButton = document.getElementById("reset");
 tipParagraphs.forEach(function(elem){elem.style.display="none"});
 /*Comment#: To hide all tip paragraphs. */

 b0=0;  b1=0;  b2=0;  b3=0;  b4=0;  b5=0;  b6=0;  b7=0;  b8=0;  b9=0;  b10=0;
 max = 0;
 maxindex=null;
 footprint=null;
 numberOfHouseholds=1;
 tipid=null;

/************************************  Event Listeners & Behaviors  ****************************************************/
addEventListener("input",function(){b0 = weightCalc(inputBottles);allFunctions()})
addEventListener("input",function(){ b1 = weightCalc(inputBags);allFunctions()})
addEventListener("input",function(){ b2 = weightCalc(inputWrapping);allFunctions()});
addEventListener("input",function(){  b3 = weightCalc(inputYogurt);allFunctions()});
addEventListener("input",function(){  b4 = weightCalc(inputTakeout);allFunctions()});
addEventListener("input",function(){  b5 = weightCalc(inputCups);allFunctions()})
addEventListener("input",function(){ b6 = weightCalc(inputPackaging);allFunctions()})
addEventListener("input",function(){ b7 = weightCalc(inputDetergent);allFunctions()})
addEventListener("input",function(){ b8 = weightCalc(inputShampoo);allFunctions()});
addEventListener("input",function(){ b9 = weightCalc(inputToothbrushes);allFunctions()});
addEventListener("input",function(){ b10 = weightCalc(inputToothpaste);allFunctions()});
resetButton.addEventListener("click",function(){resetAll()})
/*Comment#: To attach all reset functions to the Button. */

})