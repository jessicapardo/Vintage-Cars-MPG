var tbody = d3.select("tbody");

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

//changing table to datatable object
$('#mpgTable').DataTable();

// ***********************************************************************
// Select the filter button for the table
var button = d3.select("#filter-btn");
button.on("click", function () {

    //tbody.html("");
    
    $('#mpgTable').DataTable().clear().destroy();

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Declare variables for date, make, and country
    let inputElement = d3.select("#Model_Year");
    let inputElement2 = d3.select("#Make");
    let inputElement3 = d3.select("#Country");

    
    // Get the value property of the input date, make, and country
    let inputValue = inputElement.property("value")
    let inputValue2 = inputElement2.property("value")
    let inputValue3 = inputElement3.property("value")

    // console.log input value
    console.log(inputValue);

    // Filter Data with datetime equal to input value and then filter make and country, if input
    let filteredData = data.filter(sighting => {
        return (sighting.Model_Year === inputValue || !inputValue) &&
            (sighting.Make === inputValue2 || !inputValue2) &&
            (sighting.Country === inputValue3 || !inputValue3)
    });

    console.log(filteredData);

    // Display filtered values
    filteredData.forEach(function (selections) {

        // Append one table row `tr` for each car object
        let row = tbody.append("tr");

        // Use `Object.entries` to console.log each car value
        Object.entries(selections).forEach(function ([key, value]) {
            console.log(key, value); // This line of code can be deleted

            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });
    $('#mpgTable').DataTable();
});