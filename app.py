import matplotlib.pyplot as plt
from flask import Flask, request, render_template, redirect
from flask import send_file

import numpy as np
from matplotlib import pyplot as plt
import glob as glob
import pandas as pd
import seaborn as sns
import math
import os
import mpld3

# init app
app = Flask(__name__)
app.config["CLIENT_IMAGES"] = "/mnt/c/wsl/projects/pythonise/tutorials/flask_series/app/app/static/client/img"

# default route -- homepage
@app.route('/')
def default():
    return render_template('homepage.html')

@app.route('/<filename>', methods=['GET'])
def download(filename):
    return send_file('data/oldData/' + filename,
            mimetype='text/csv',
            attachment_filename=filename,
            as_attachment=True)

@app.route('/westPing')
def westTCP():
    return render_template('westPing.html')

if __name__ == "__main__":
    app.run(debug=True)
