/****************************************************************
            Declare variables for use in functions
****************************************************************/


/****************************************************************
                Fetch all tickers from BERTs Flask app
****************************************************************/

function get_tickers() 
{
    // call BERTs_Flask for ticker funtion results
    tickerUrl = '/tickers';
    console.log(d3.json(tickerUrl))
//     .then((data) => 
//     {
//         // select ticker dropdown
//         var dropdown = d3.select("#istock");
//         data.lvl1.levl2.forEach((d) => 
//         {
//             // Append a tr to the table body tag
//             var row = dropdown.append('option');
//             var row = tbody.append("tr");
//             Object.values(d).forEach((element, index) => 
//             {
//                 if (index <= 5) 
//                 {
//                     row.append("td").text(element);
//                 }
//             });
//         });
//     });
}


