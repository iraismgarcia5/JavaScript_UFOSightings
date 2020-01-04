// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Function to read each row in the data and append to the table in html
function ufoReport(data) {

    data.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
  });
})
};

// Filter button
var button = d3.select("#filter-btn");

button.on("click",function(){
    // Prevent page refresh
    d3.event.preventDefault();

    // Select input field
    var inputElement = d3.select("#datetime");

    // Select input date value
    var inputValue = inputElement.property("value");

    // Match input with value in dataset
    var filteredData = tableData.filter(sight => sight.datetime === inputValue);
    
    console.log(filteredData);

    tbody.html("");
    ufoReport(filteredData);

})

ufoReport(tableData);