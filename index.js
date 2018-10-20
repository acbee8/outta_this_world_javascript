// Table
var $tbody = document.querySelector("tbody");

// Column names
var datetime = document.querySelector("#datetime");
var city = document.querySelector("#city");
var state = document.querySelector("#state");
var country = document.querySelector("#country");
var shape = document.querySelector("#shape");
var duration = document.querySelector("#duration");

// Search bar and buttons
var $searchInput = document.querySelector("#search");
var $searchButton = document.querySelector("#searchButton");
var $reloadButton = document.querySelector("#reloadButton");

// Filter names
var $dateFilter = document.querySelector("#filterDate")
var $cityFilter = document.querySelector("#filterCity")
var $stateFilter = document.querySelector("#filterState")
var $countryFilter = document.querySelector("#filterCountry")
var $shapeFilter = document.querySelector("#filterShape")
var $durationFilter = document.querySelector("#filterDuration")


// Listen for buttons being clicked
$searchButton.addEventListener("click", searchButtonClicked);
$reloadButton.addEventListener("click", reloadButtonClicked);

// set filter listeners
var filter = 1
$dateFilter.addEventListener(click.bs.dropdown,
    selectFilter);
$cityFilter.addEventListener("mousedown",
    selectFilter);
$stateFilter.addEventListener("mousedown",
    selectFilter);
$countryFilter.addEventListener("mousedown",
    selectFilter);
$shapeFilter.addEventListener("mousedown",
    selectFilter);
$durationFilter.addEventListener("mousedown",
    selectFilter);

// Dataset variable
var dataset = data;

// Define a function to create the table from the data file
function createTable() {
    $tbody.innerHTML = "";

    //iterate through dataset
    for (var i = 0; i < 350; i++) {
        var sighting = dataset[i];

        // pull out the sightings
        var fields = Object.keys(sighting);

        // create a new row
        var $row = $tbody.insertRow(i);

        // iterate through individual data values and put them into cells
        for (var j = 0; j < fields.length; j++) {
            var field = fields[j];

            var $cell = $row.insertCell(j);
            $cell.innerHTML = sighting[field];
        }
    }
}

function selectFilter() {
    console.log("success");
}

// function for the button 
function searchButtonClicked() {
    dataset = data

    try {
        var searchInput = $searchInput.value;

        // filter on date
        dataset = dataset.filter(function (row) {
            return row.datetime == searchInput;
        });
    } catch {
        console.log(Error)
    } finally {
        createTable();
    }

}

function reloadButtonClicked() {
    dataset = data
    createTable();
}

function createTable();
