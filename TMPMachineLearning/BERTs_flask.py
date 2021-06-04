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
from flask import render_template, request, jsonify
from . import app


@app.route('/Flask_table')
def tickers():
    ########## Read in data file ##########
    path = 'TMPMachineLearning/static/resources/Flask_table.csv'
    Flask_table = pd.read_csv(path,index_col = False)
    Flask_table = Flask_table.to_json(orient='records', indent=4)
    return Flask_table

###############################################################################################

@app.route('/ticker_select', methods=['GET','POST'])
def select():

    ########### Read in data file ##########
    path = 'TMPMachineLearning/static/resources/Flask_table.csv'
    flask_data = pd.read_csv(path)
    flask_data = flask_data.drop("Unnamed: 0", axis=1)
    print(path)
    ########## Grab stock input fields ##########
    if request.method == 'GET':
        form_data = {"istock": "none",
                    "industry": "none",
                    "price": "none",
                    "low_risk": "none",
                    "moderate_risk": "none",
                    "high_risk": "none"}
        return jsonify(form_data)

    elif request.method == 'POST':
        data = request.get_json(force=True)
        print(data)

    select_stock = flask_data.loc[flask_data['Ticker'] == data['istock']]
    stock_cluster = select_stock['Clusters'].index.values.tolist()

    # Finds tickers in the same cluster as the selected stock
    cluster_data = flask_data.loc[flask_data['Clusters'] == stock_cluster[0]]

    cluster = cluster_data.to_json(orient='records',indent=4)
    print("Please work, please")
    return jsonify(cluster)


    




