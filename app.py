import matplotlib.pyplot as plt
from flask import Flask, request, render_template, redirect

import numpy as np
from matplotlib import pyplot as plt
import glob as glob
import pandas as pd
import seaborn as sns
import math

import mpld3


# init app
app = Flask(__name__)
#app.config['SECRET_KEY'] = 'csumb-otter'

df = pd.read_csv('data/MainDataFrame.csv')

# replaces rows where TCP has no connection with 0
df = df.replace(['Quit by User', 'no effective service', ' no effective service', 'bad_output', 'connect_error1',
                 ' connect_error1', 'connect_error2', ' connect_error2', ' timeout', 'timeout',
                 ' NA'], 0)
# replaces rows where RTT has no connection with NaN
df['wRttAvg'] = df['wRttAvg'].replace(0, np.nan)

# change object type of 'Date' to datetime64
df['Date'] = df['Date'].astype('datetime64[ns]')
# only keep year
df['Date'] = df['Date'].dt.to_period('Y')

# drop unnamed column
df.drop('Unnamed: 0', axis=1, inplace=True)

# change object types to float
df['wTCPUp1'] = df['wTCPUp1'].astype('float')
df['wTCPUp2'] = df['wTCPUp2'].astype('float')
df['wTCPDown1'] = df['wTCPDown1'].astype('float')
df['wTCPDown2'] = df['wTCPDown2'].astype('float')
df['wRttAvg'] = df['wRttAvg'].astype('float')

# remove rows containing "Tablet" as device
df = df[~df['DeviceType'].str.contains('Netbook')]

# statistics for TCP mean()
df.groupby(['Date', 'Provider'])['wTCPUp1'].mean()
df.groupby(['Date', 'Provider'])['wTCPUp2'].mean()
df.groupby(['Date', 'Provider'])['wTCPDown1'].mean()
df.groupby(['Date', 'Provider'])['wTCPDown2'].mean()
df.groupby(['Date', 'Provider'])['wRttAvg'].mean()

# barplot with year and provider
df.groupby(['Provider', 'Date'])['wRttAvg'].mean().sort_values().plot.bar()

# new df with 10%
df10 = df.loc[(df['wRttAvg'] != 0)].nsmallest(math.floor((len(df)*.10)), 'wRttAvg')
df20 = df.loc[(df['wRttAvg'] != 0)].nsmallest(math.floor((len(df)*.20)), 'wRttAvg')
df30 = df.loc[(df['wRttAvg'] != 0)].nsmallest(math.floor((len(df)*.30)), 'wRttAvg')
df40 = df.loc[(df['wRttAvg'] != 0)].nsmallest(math.floor((len(df)*.40)), 'wRttAvg')
df50 = df.loc[(df['wRttAvg'] != 0)].nsmallest(math.floor((len(df)*.50)), 'wRttAvg')

# df10.groupby(['Provider', 'Date'])['wRttAvg'].mean().sort_values().plot.bar()
# df20.groupby(['Provider','Date'])['wRttAvg'].mean().sort_values().plot.bar()
# df30.groupby(['Provider','Date'])['wRttAvg'].mean().sort_values().plot.bar()
df40.groupby(['Provider','Date'])['wRttAvg'].mean().sort_values().plot.bar()
# df50.groupby(['Provider','Date'])['wRttAvg'].mean().sort_values().plot.bar()
plt.title('40%')

#fig, ax = plt.subplots(figsize=(15, 6))

df['Date'] = df.Date.astype(np.int64)
df['Date'] += 1970

plt.savefig('static/images/fortyPercentGraph.png')

# plt.show()

# time plot
fig, ax = plt.subplots(figsize=(15, 6))
# sns.lineplot(df['Date'], df['wRttAvg'])
sns.lineplot(data=df, x='Date', y='wRttAvg')

ax.set_title('Avg RTT over Time', fontsize=20, loc='center', fontdict=dict(weight='bold'))
ax.set_xlabel('Year', fontsize=16, fontdict=dict(weight='bold'))
ax.set_ylabel('RTT', fontsize=16, fontdict=dict(weight='bold'))
plt.tick_params(axis='y', which='major', labelsize=16)
plt.tick_params(axis='x', which='major', labelsize=16)

plt.savefig('static/images/timePlotAvgRTT-2012-2020.png')

# scatter plot
sns.scatterplot(data=df, x="wTCPUp1", y="wRttAvg")
sns.scatterplot(data=df, x="wTCPUp2", y="wRttAvg")
sns.scatterplot(data=df, x="wTCPDown1", y="wRttAvg")

plt.savefig('static/images/scatterPlotAvgRTT.png')

# multiple line plots
df_line = df.loc[(df['wRttAvg'] != 0) & (df['Date'] > 2014)].groupby(['Date', 'Provider']).wRttAvg.mean()
df_line = df_line.unstack(level='Provider')
df_line.columns.name = 'Provider'
plt.tight_layout()
df_line.plot()
plt.xlabel('Year')
plt.ylabel('Avg RTT')
plt.title('Avg RTT from 2015-2020')

plt.savefig('static/images/linearPlotAvgRTT-2015-2020.png')

'''
html_str = mpld3.fig_to_html(fig)
Html_file = open("templates/old.html", "w")
Html_file.write(html_str)
Html_file.close()
'''

plt.show()

# default route -- homepage
@app.route('/')
def default():
    return render_template('old.html')

if __name__ == "__main__":
    app.run(debug=True)
