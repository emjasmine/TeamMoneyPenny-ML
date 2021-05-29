"""
Routes and views for the flask application.
"""

from datetime import datetime
from flask import render_template
from . import app


@app.route('/')
@app.route('/home')
def home():
    """Renders the home page."""
    return render_template(
        'index.html',
        title='Home Page',
        year=datetime.now().year,
    )


@app.route('/calculator')
def calculator():
    """Renders the calcultor page."""
    return render_template(
        'calculator.html',
        title='Calculator',
        year=datetime.now().year,
        message='Grow your wealth!'
    )


@app.route('/recommender')
def recommender():
    """Renders the recommender page."""
    return render_template(
        'recommender.html',
        title='Recommender',
        year=datetime.now().year,
        message='Find similar stocks!'
    )

