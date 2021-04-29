let tbody = d3.select("tbody");

// Check that data is being called
console.log(data);

// Append the records of data.js to table
data.forEach((record) => {
    let row = tbody.append("tr");
    Object.entries(record).forEach(([key, value]) => {
        let cell = row.append("td");
        cell.text(value);
    });
});

// ***********************************************************************
// Select the filter button for the table
let button = d3.select("#filter-btn");
button.on("click", function () {

    tbody.html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Declare variables for date, state, and shape
    let inputElement = d3.select("#datetime");
    let inputElement4 = d3.select("#city");
    let inputElement2 = d3.select("#state");
    let inputElement5 = d3.select("#country");
    let inputElement3 = d3.select("#shape");

    // Get the value property of the input date, state, and shape
    let inputValue = inputElement.property("value").toLowerCase();
    let inputValue2 = inputElement2.property("value").toLowerCase();
    let inputValue3 = inputElement3.property("value").toLowerCase();
    let inputValue4 = inputElement4.property("value").toLowerCase();
    let inputValue5 = inputElement5.property("value").toLowerCase();

    // console.log input value
    console.log(inputValue);

    // Filter Data with datetime equal to input value and then filter by state and shape, if input
    let filteredData = data.filter(sighting => {
    return (sighting.datetime === inputValue  || !inputValue) &&
    (sighting.city === inputValue4 || !inputValue4) &&
    (sighting.state === inputValue2 || !inputValue2) &&
    (sighting.country === inputValue5 || !inputValue5) &&
    (sighting.shape === inputValue3 || !inputValue3)
    });

    // Display filtered values
    filteredData.forEach(function (selections) {

        // Append one table row `tr` for each UFO Sighting object
        let row = tbody.append("tr");

        // Use `Object.entries` to console.log each UFO Sighting value
        Object.entries(selections).forEach(function ([key, value]) {
            console.log(key, value); // This line of code can be deleted

            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });
});