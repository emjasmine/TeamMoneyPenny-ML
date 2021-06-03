/****************************************************************
            Declare variables for use in functions
****************************************************************/


/****************************************************************
                Fetch all tickers from BERTs Flask app
****************************************************************/

// call BERTs_Flask for ticker funtion results
tickerUrl = '/tickers';
d3.json(tickerUrl).then(function (data)
{ console.log(data) })

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


