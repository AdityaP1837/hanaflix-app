from flask import Flask, render_template, redirect
from lol import lol, imagesA, watchData
app = Flask(__name__)

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/trending/<time>/<page>')
def trending(time, page):
    return render_template("trending.html", time=time, page=page)

@app.route('/browse')
def browse():
    return render_template("browse.html", datagg=lol)

@app.route('/watch/<slug>')
def watch(slug):
    return render_template("watch.html", data=watchData)
                                                        
@app.route('/images/<tag>')
def images(tag):
    return render_template("images.html", data=imagesA)

if __name__ == '__main__':
    app.run(debug=True, port=8000, host="0.0.0.0")