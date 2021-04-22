// select the table data from data.js
let tableData = data;

//console.log(data);

//creating function to append data in html
function appendTable(data) {
    d3.select("tbody").html("");
    data.forEach((selection) => {
        //using D3 to select table body and append table row
        let tableRow = d3.select("tbody").append("tr"); 
        //append table 
        Object.values(selection).forEach((value) => { 
            let tableData = tableRow.append("td");
            tableData.text(value);
        });
    })
}
appendTable(tableData);

//creating the event handler
function clickEvent() {
    //prevent the page for refreshing
    d3.event.preventDefault();
    //get the value property of the input element   
    let date = d3.select("#datetime").property("value");
    //filtering the data with the input value (date)
    let filterDateTime = tableData;
    if (date) {
        filterDateTime = filterDateTime.filter((row) => row.datetime === date);
    }
    appendTable(filterDateTime);
}
d3.selectAll("#filter-btn").on("click", clickEvent);