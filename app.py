from flask import Flask, render_template, redirect
app = Flask(__name__)

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/trending/<time>/<page>')
def trending(time, page):
    return render_template("trending.html", time=time, page=page)

@app.route('/browse')
def browse():
    return render_template("browse.html")

@app.route('/watch/<slug>')
def watch(slug):
    return render_template("watch.html")

if __name__ == '__main__':
    app.run(debug=True, port=8000)