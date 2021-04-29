$(document).ready(function() {
    console.log("Page Loaded");

    $("#filter").click(function() {
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
        success: function(returnedData) {
            // print it
            console.log(returnedData['prediction']);
            $("#output").text("Your Predicted MPG is " + returnedData['prediction']);
            

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });

}