function showData(data) {
    
    let table = d3.select("#ufo-table")

    table.selectAll("tr").remove()
    
    let headerRow = table.append("tr")

    headerRow.append("th").text("Date")
    headerRow.append("th").text("City")
    headerRow.append("th").text("State")
    headerRow.append("th").text("Country")
    headerRow.append("th").text("Shape")
    headerRow.append("th").text("Duration")
    headerRow.append("th").text("Comments")

    let tableBody = table.append("tbody")

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
    // d3.event.preventDefault()

    let date = d3.select("#datetime").property("value")
    const tableData = data
    let filteredData = tableData
    
    if (date)
        filteredData = data.filter((d) => d.datetime === date)

    showData(filteredData)
}

d3.selectAll('#filter-btn').on('click', handleClick)