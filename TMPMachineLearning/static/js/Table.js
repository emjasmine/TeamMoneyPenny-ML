/****************************************************************
            Declare variables for use in functions
****************************************************************/
// function table()
// {    
//     Url = '/ticker_select';
//     d3.json(Url).then(function(data){
//         console.log('please work please')
//         console.log(data)})
// }
// table();
d3.select("#submit").on("click", feedBert)
function feedBert()
{
    let stock = d3.select("#istock").node().value
    let industry = d3.select("#industry").node().value
    let price = d3.select("#price").node().value
    let low_risk = d3.select("#low_risk").node().value
    let moderate_risk = d3.select("#moderate_risk").node().value
    let high_risk = d3.select("#high_risk").node().value
    console.log(`form submission { istock: ${stock}, industry: ${industry},price: ${price},low_risk: ${low_risk},moderate_risk: ${moderate_risk},high_risk: ${high_risk} }`)
    d3.json('/ticker_select', 
    {
        method: 'POST',
        body: JSON.stringify(
        {
            'istock': stock,
            'industry': industry,
            'price': price,
            'low_risk': low_risk,
            'moderate_risk': moderate_risk,
            'high_risk': high_risk,
        })
    }).then(data => console.log(data))
}

/****************************************************************
                        Fetch all tickers
****************************************************************/
function table(){
    Url = '/ticker_select';
    d3.json(Url).then(function (data)
    { console.log(data) }).catch(console.log(Url))
}
table();

// function stocksTable(anyData) 
// {
//     // refrence the table body to build table in 
//     var tbody = d3.select('.stock-table');
    
//     // Use for each to create a table with ALL the data
//     anyData.map(stock => 
//     {
//         // Ticker,Company,Industry,Price,Dividends,ROI,Risk,
//         //Append a tr to the table body tag
//         var row = tbody.append('tr');
//         // Append td.text  for each info column
//         // tkr symbol col
//         row.append("td").text(stock.symbol);
//         // company name
//         row.append("td").text(stock.Name);
//         // stock price
//         row.append("td").text(price);
//         // dividend rate
//         row.append("td").text(`$${divAmount}`);
//         // rate of return
//         row.append("td").text(`${ROI(price, divAmount)}`);
//     });
// }
