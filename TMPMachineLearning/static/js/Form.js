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
        console.log('Function: getTickers')  
        let tickerList = ''
        tickerList = anyData.map(data => 
            {
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
        // empty the list  
        let industryList = ''
        // get list from data
        industryList = anyData.map(data => data.Industry )
        let uniqueIndustry = industryList.filter(function(v, i, self)
        {
            // It returns the index of the first instance of each value
            return i == self.indexOf(v);
        });
        uniqueIndustry = uniqueIndustry.forEach(element => 
        {
            console.log(element)
            d3.select('#industry')
            .append('option')
            .text(element)
        });
    }
    /****************************************************************
                    Call Form Tag Functions
    ****************************************************************/
})