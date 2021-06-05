/****************************************************************
            listen on page for submit button click
****************************************************************/

d3.select("#submit").on("click", feedBert)

/****************************************************************
            feed BERT the vlaues from form on page
****************************************************************/

function feedBert()
{
    let stock = d3.select("#istock").node().value
    let industry = d3.select("#industry").node().value
    let price = d3.select("#price").node().value

    // Check the radio button value
    var riskTolerance = $('input[name=riskTolerance]:checked').val();

    console.log(`form submission { 
        istock: ${stock},
        industry: ${industry},
        price: ${price},
        risk_tolerance: ${riskTolerance} }`)
    
    d3.json('/ticker_select', 
    {
        method: 'POST',
        body: JSON.stringify(
        {
            'istock': stock,
            'industry': industry,
            'price': price,
            'risk_tolerance': riskTolerance,
        })
    }).then(data => 
        {
            console.log(data)
            stocksTable(data)
        })
}

/****************************************************************
        Create table with data returned from BERT's flask
****************************************************************/
function stocksTable(anyData)
{
    console.log('function stocksTable')
    // refrence the table body to build table in 
    var tbody = d3.select('.stock-table-body');
    // clear all data rows
    tbody.html('');

    //convert anyData to array type
    var BERT_returns = Array.from(anyData)
    // Use for each to create a table with ALL the data
    BERT_returns.map(object =>
    {
        //Append a tr to the table body tag
        var row = tbody.append('tr');
        // Append td.text  for each info column
        // tkr symbol col
        row.append("td").text(object.Ticker);
        // company name
        row.append("td").text(object.Company);
        // industry
        row.append("td").text(object.Industry);
        // stock price
        row.append("td").text(object.Price);
        // dividend rate
        row.append("td").text(object.Dividends);
        // rate of return
        row.append("td").text(object.ROI);
        // risk level
        row.append("td").text(object.Risk)
    });
}


