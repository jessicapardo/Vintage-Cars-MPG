$(document).ready(function () {
    console.log("Page Loaded");

    $("#filter").click(function () {
        makePredictions();
    });
});


// call Flask API endpoint
function makePredictions() {
    var displacement = $("#displacement").val();
    var horsepower = $("#horsepower").val();
    var weight = $("#weight").val();
    var acceleration = $("#acceleration").val();
    var year = $("#year").val();
    var cylinders = $("#cylinders").val();
    var origin = $("#origin").val();

    // create the payload
    var payload = {
        "displacement": displacement,
        "horsepower": horsepower,
        "weight": weight,
        "acceleration": acceleration,
        "year": year,
        "cylinders": cylinders,
        "origin": origin
    }

    // Perform a POST request to the query URL
    $.ajax({
        type: "POST",
        url: "/makePredictions",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({ "data": payload }),
        success: function (returnedData) {
            // print it
            console.log(returnedData['prediction']);
            $("#output").text("Your Predicted MPG is");

                // Extract data and assign it to a variable 
                let value = returnedData['prediction'];
                console.log(value);

                // Data
                data = [
                    {
                        domain: { x: [0, 1], y: [0, 1] },
                        type: 'indicator',
                        mode: 'gauge+number+delta',
                        value: value,
                        title: { text: 'MPG', font: { size: 20 } },
                        gauge: {
                            axis: { range: [0, 50], tickwidth: 1 },
                            bar: { color: 'red', thickness: 0.1 },
                            axes: [{
                                pointers: [{
                                    value: 80,
                                    type: 'Marker',
                                    markerType: 'Circle'
                                }]
                            }],
                            steps: [
                                { range: [0, 5], color: '#f43021' },
                                { range: [5, 10], color: '#fc6114' },
                                { range: [10,15], color: '#ff8c00' },
                                { range: [15, 20], color: '#ffad00' },
                                { range: [20, 25], color: '#edbd02' },
                                { range: [25, 30], color: '#c6bf22' },
                                { range: [30, 35], color: '#92b73a' },
                                { range: [35, 40], color: '#4aa84e' },
                                { range: [40, 45], color: '#009a60' },
                                { range: [45, 50], color: '#006740' }
                            ],
                        },
                    },
                ];
                // Layout 
                let layout = {
                    width: 400,
                    height: 360,
                    margin: { t: 108, r: 20, l: 20 },
                };

                Plotly.newPlot('gauge', data, layout);
            },
    
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + textStatus);
                alert("Error: " + errorThrown);
        }
    });

}