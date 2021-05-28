

import pandas as pd
import sys
import yfinance as yf
import time 
from datetime import date
from datetime import timedelta

start = int(sys.argv[1])
stop = int(sys.argv[2])

# Establish link to the FINRA OATS list of End of Day List of Stocks
stock_list_US = pd.read_csv('nyse_list.csv')

stock_list_US = stock_list_US[['Symbol','Name']]

for i,row in stock_list_US.iterrows():
    if '^' in row['Symbol']:
        stock_list_US.drop(i,inplace=True)
        

stock_list_US = stock_list_US.iloc[start:stop]

# Initialize list to hold information from yfinance
y_info_dict = []
error_log = open("errors.log","a")

startTime = time.time()

# Loops through list of companies on stock_list_US
for _,row in stock_list_US.iterrows():

    # Selects ticker from current row
    ticker = yf.Ticker(row['Symbol'])

    # Establishes of current and previous days
    today = date.today()
    yesterday = today - timedelta(days = 1) 
    todays_date = today.strftime("%Y-%m-%d")
    yesterdays_date = yesterday.strftime("%Y-%m-%d")

    # Grabs last opening price, closing price, and dividend amount from the previous day
    # Note: this was done for consistency purposes, to make sure data from the same time and
    # date were being used to create the related K-means clustering model
    try:
        ticker_current = ticker.history(start=yesterdays_date,end=todays_date,interval="1m")[-1:]
        sector = ticker.info['sector']

        # Creates new dictionary to add to y_info_df
        ticker_dict = {'Date':yesterdays_date,
                       'Symbol':row['Symbol'],
                       'Name':row['Name'],
                       'Open':ticker_current['Open'].values[0],
                       'Close':ticker_current['Close'].values[0],
                       'Dividends':ticker_current['Dividends'].values[0]}

        y_info_dict.append(ticker_dict)
    except Exception as e:
        error_log.write(row['Symbol'])
        error_log.write(str(e))
        print(f"On {row['Symbol']}, error trying to call")
        print(str(e))
        # Appends dictionary to y_info_df

y_info_df = pd.DataFrame(y_info_dict)
print(y_info_df)


y_info_df.to_csv(f'Data_Sources/{start}-{stop}_stock_info.csv')

