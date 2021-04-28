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



#plt.show()

# default route -- homepage
@app.route('/')
def default():
    return render_template('homepage.html')


@app.route('/westRTT')
def westRtt():
    return render_template('westRTT.html')


@app.route('/westTCP')
def westTCP():
    return render_template('westTCP.html')


@app.route('/eastRTT')
def eastRtt():
    return render_template('eastRTT.html')


@app.route('/eastTCP')
def eastTCP():
    return render_template('eastTCP.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/about/<filename>', methods=['GET'])
def download(filename):
    return send_file('data/oldData/' + filename,
            mimetype='text/csv',
            attachment_filename=filename,
            as_attachment=True)



if __name__ == "__main__":
    app.run(debug=True)
