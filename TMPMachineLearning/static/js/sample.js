/****************************************************************
            Declare variables for use in functions
****************************************************************/


/****************************************************************
                Fetch all tickers from BERTs Flask app
****************************************************************/

// call BERTs_Flask for ticker funtion results
console.log("Starting BERT")

function tickerTable(){
    tickerUrl = '/tickers';
    d3.json(tickerUrl).then(function (data)
    { console.log(data) })
}
tickerTable();