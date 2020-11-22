// Function to display the data table on the webpage
function showData(data) {
    
    let table = d3.select("#ufo-table")

    table.selectAll("tr").remove() // Clear existing data rather than continually appending to displayed list of data
    
    let headerRow = table.append("tr")

    // Display column headers
    headerRow.append("th").text("Date")
    headerRow.append("th").text("City")
    headerRow.append("th").text("State")
    headerRow.append("th").text("Country")
    headerRow.append("th").text("Shape")
    headerRow.append("th").text("Duration")
    headerRow.append("th").text("Comments")

    // Create the body of the table
    let tableBody = table.append("tbody")

    // Append rows and assign data from the dataset to appropriate columns
    data.forEach((d) => {
        let row = tableBody.append("tr")
        row.append("td").text(d.datetime)
        row.append("td").text(d.city)
        row.append("td").text(d.state)
        row.append("td").text(d.country)
        row.append("td").text(d.shape)
        row.append("td").text(d.durationMinutes)
        row.append("td").text(d.comments)
    })
}


function handleClick() {
    
    const tableData = data
    let date = d3.select("#datetime").property("value") 
    let filteredData = tableData // When no date has been specified, display all data.

    if (date) // When a date is specified, filter to that date.
        filteredData = data.filter((d) => d.datetime === date)

    showData(filteredData)
}

d3.selectAll('#filter-btn').on('click', handleClick)