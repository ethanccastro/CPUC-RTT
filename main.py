from flask import Flask, request, render_template, redirect

import numpy as np
from matplotlib import pyplot as plt
import glob as glob
# import plotly
# import plotly.graph_objects as go
import pandas as pd
import seaborn as sns
import math

# from sklearn.datasets import make_hastie_10_2
# from sklearn.model_selection import GridSearchCV
# from sklearn.metrics import make_scorer
# from sklearn.metrics import accuracy_score
# from sklearn.tree import DecisionTreeClassifier

# init app
app = Flask(__name__)
#app.config['SECRET_KEY'] = 'csumb-otter'

'''
excel_file = "data/mainDataFrame.csv"
df = pd.read_csv(excel_file)
#print(df)

data = [go.Scatter(x=df['ID'], y=df['wRttAvg'])]
# print("----------------------")
# print(data[0][""]])
# print("----------------------")
# newData = data[]

fig = go.Figure(data)
#fig.show()

#fig.write_image(file='static/images/staff_plot.png', format='.png')

plotly.offline.plot(fig, filename="templates/homepage.html")
# 

df = pd.read_csv('data/MainDataFrame.csv')

df = df.replace(['Quit by User', 'no effective service', 'bad_output', 'connect_error1', 'connect_error2', 'timeout'], 0)

# change object type of 'Date' to datetime64
df['Date'] = df['Date'].astype('datetime64[ns]')
# only keep year
df['Date'] = df['Date'].dt.to_period('Y')

# drop unnamed column
df.drop('Unnamed: 0', axis=1, inplace=True)

print(df['wTCPUp2'][0])

# change object types to float
df['wTCPUp1'] = df['wTCPUp1'].astype('float')
df['wTCPUp2'] = df['wTCPUp2'].astype(float)
df['wTCPDown1'] = df['wTCPDown1'].astype(float)
df['wTCPDown2'] = df['wTCPDown2'].astype(float)
df['wRttAvg'] = df['wRttAvg'].astype(float)

# remove rows containing "tablet"
df = df[~df['DeviceType'].str.contains('Tablet')]

providers = ['Sprint', 'T-Mobile', 'AT&T', 'Verizon', 'FirstNet']
years = ['2015', '2016', '2017', '2020']

for year in years:
    for provider in providers:
        temp = df[(df['Date'] == year) & (df['Provider'] == provider)]
        not0 = temp['wRttAvg'] != 0.0
        mean = temp.loc[not0, 'wRttAvg'].mean()
        print(f'{mean} of the {year} & {provider}')
        df.loc[(df.wRttAvg == 0) & (df.Date == year) & (df.Provider == provider), 'wRttAvg'] = mean

#statistics for TCP mean()
df.groupby(['Date', 'Provider'])['wTCPUp1'].mean()
df.groupby(['Date', 'Provider'])['wTCPUp2'].mean()
df.groupby(['Date', 'Provider'])['wTCPDown1'].mean()
df.groupby(['Date', 'Provider'])['wTCPDown2'].mean()
df.groupby(['Date', 'Provider'])['wRttAvg'].mean()

df.groupby(['Provider', 'Date'])['wRttAvg'].mean().sort_values().plot.bar()
'''

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
df10 = df.loc[(df['wRttAvg'] != 0)].nsmallest(
    math.floor((len(df)*.10)), 'wRttAvg')
df20 = df.loc[(df['wRttAvg'] != 0)].nsmallest(
    math.floor((len(df)*.20)), 'wRttAvg')
df30 = df.loc[(df['wRttAvg'] != 0)].nsmallest(
    math.floor((len(df)*.30)), 'wRttAvg')
df40 = df.loc[(df['wRttAvg'] != 0)].nsmallest(
    math.floor((len(df)*.40)), 'wRttAvg')
df50 = df.loc[(df['wRttAvg'] != 0)].nsmallest(
    math.floor((len(df)*.50)), 'wRttAvg')
df10.groupby(['Provider', 'Date'])['wRttAvg'].mean().sort_values().plot.bar()
# df20.groupby(['Provider','Date'])['wRttAvg'].mean().sort_values().plot.bar()
# df30.groupby(['Provider','Date'])['wRttAvg'].mean().sort_values().plot.bar()
# df40.groupby(['Provider','Date'])['wRttAvg'].mean().sort_values().plot.bar()
# df50.groupby(['Provider','Date'])['wRttAvg'].mean().sort_values().plot.bar()
plt.title('10%')

df['Date'] = df.Date.astype(np.int64)
df['Date'] += 1970
# time plot
fig, ax = plt.subplots(figsize=(15, 6))
sns.lineplot(df['Date'], df['wRttAvg'])

ax.set_title('Avg RTT over Time', fontsize=20,
             loc='center', fontdict=dict(weight='bold'))
ax.set_xlabel('Year', fontsize=16, fontdict=dict(weight='bold'))
ax.set_ylabel('RTT', fontsize=16, fontdict=dict(weight='bold'))
plt.tick_params(axis='y', which='major', labelsize=16)
plt.tick_params(axis='x', which='major', labelsize=16)

# scatter plot
sns.scatterplot(data=df, x="wTCPUp1", y="wRttAvg")
sns.scatterplot(data=df, x="wTCPUp2", y="wRttAvg")
sns.scatterplot(data=df, x="wTCPDown1", y="wRttAvg")

# default route -- homepage
@app.route('/')
def default():
    return render_template('homepage.html')

if __name__ == "__main__":
    app.run(debug=True)
