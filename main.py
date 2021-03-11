from flask import Flask, request, render_template, redirect

# init app
app = Flask(__name__)
#app.config['SECRET_KEY'] = 'csumb-otter'

# default route -- homepage
@app.route('/')
def default():
    return render_template('homepage.html', iframe_src="/search")

if __name__ == "__main__":
    app.run(debug=True)

