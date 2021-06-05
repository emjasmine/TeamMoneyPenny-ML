/****************************************************************
            Declare variables for use in functions
****************************************************************/
Url = '/Flask_table';
d3.json(Url).then(stockdata => 
{ 
    getTickers(stockdata);
    getIndustry(stockdata);
    /****************************************************************
                            Fetch all tickers
    ****************************************************************/
    function getTickers(anyData)
    {
         
        let tickerList = anyData.map(data => 
            {
                console.log(data);
                d3.select('#istock')
                .append('option')
                .text(data.Ticker);
            })
        
    }
    /****************************************************************
                Fetch all industries from BERTs Flask app
    ****************************************************************/
    function getIndustry(anyData)
    {
        console.log('Function: getIndustry')  
        let tickerList = anyData.map(data => 
            d3.select('#industry')
            .append('option')
            .text(data.Industry))
    }
    /****************************************************************
                    Call Form Tag Functions
    ****************************************************************/
})