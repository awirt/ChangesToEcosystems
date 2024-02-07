// 🧠Define Global Variables for Each Interactive HTML Element
var squares = [
  "A1", "A2", "A3", "A4", "A5", "A6", "A7",
  "B1", "B2", "B3", "B4", "B5", "B6", "B7",
  "C1", "C2", "C3", "C4", "C5", "C6", "C7",
  "D1", "D2", "D3", "D4", "D5", "D6", "D7",
  "E1", "E2", "E3", "E4", "E5", "E6", "E7",
  "F1", "F2", "F3", "F4", "F5", "F6", "F7"  
]

var typeOfChange = ["house", "road"];

var changeToEco = {
  house: "/house.png",
  road: "/road.png"
}

var button = $('.button');
var container = $('.container');
button.on("click", append);

// Event Listeners
function append(){
  var houseOrRoad = randomNum(1);
  var squareNum = squares[randomNum(squares.length-1)];

  console.log(container);
  container.html("");
  container.append(`
  <div class="pic">
    <img src="` + changeToEco[typeOfChange[houseOrRoad]] + `">
  </div>
  
  <div class="results">
    <h3>` + squareNum + " - " + typeOfChange[houseOrRoad] + `</h3> <br>
    <p>A ${typeOfChange[houseOrRoad]} has been built on acre ${squareNum}. Make sure to use the marker provided to mark the square accordingly. R = 'road' and H = 'house'</p> <br>
    <p>Was your organism on acre ${squareNum}? If your organism can't adapt to survive near a ${typeOfChange[houseOrRoad]}, then your organism must <strong>MOVE</strong>... or else it will <strong>PERISH!</strong></p>
  </div>
  `);
}

function randomNum(scale){
  var randNum = Math.random()*scale;
  return Math.round(randNum);
}

// Event Handlers & Other Functions
