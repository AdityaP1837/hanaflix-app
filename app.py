from flask import Flask
from brain import getBrowse

app = Flask(__name__)

@app.route('/')
def home():
    return {"msg": "Hello There!"}

@app.route('/browse')
def browse():
    data = getBrowse()
    return data

if __name__ == '__main__':
    app.run(debug=True, port=8000, host="0.0.0.0")