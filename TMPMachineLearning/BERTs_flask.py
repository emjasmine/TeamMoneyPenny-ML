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
from flask import render_template, jsonify
from . import app


@app.route('/Flask_table')
def tickers():
    ########## Read in data file ##########
    path = 'TMPMachineLearning/static/resources/Flask_table.csv'
    Flask_table = pd.read_csv(path,index_col = False)
    # ########## Pull only the Ticker coulmns ##########
    # Ticker = Flask_table['Ticker']
    Flask_table = Flask_table.to_json(orient='records', indent=4)
    return Flask_table

# @app.route('/industry')
# def industry():
#     ########## Read in data file ##########
#     path = 'TMPMachineLearning/static/resources/Flask_table.csv'
#     Flask_table = pd.read_csv(path,index_col = False)
#     ########## Pull only the Industry coulmns ##########
#     Industry = Flask_table['Industry']
#     Industry = Industry.to_json(orient='records', indent=4)
#     return jsonify(Industry)


