"""
Routes and views for the Machine flask application.
"""
# Bring in all dependencies
import pandas as pd
import requests
import numpy as np
import scipy as sp
import json
import matplotlib.pyplot as plt
from statistics import mode
from datetime import datetime
from flask import render_template
from . import app


@app.route('/tickers')
def tickers():
    ########## Read in data file ##########
    path = '../resources/Flask_table.csv'
    Flask_table = pd.read_csv(path,index_col = False)
    ########## Pull only the Ticker & Industry coulmns ##########
    Ticker = Flask_table['Ticker']
    return Ticker

@app.route('/industry')
def industry():
    ########## Read in data file ##########
    path = '../resources/Flask_table.csv'
    Flask_table = pd.read_csv(path,index_col = False)
    ########## Pull only the Ticker & Industry coulmns ##########
    Ticker = Flask_table['Industry']
    return Industry

