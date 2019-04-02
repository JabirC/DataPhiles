#Team DataPhiles

"""
dataset = lottery
"""

from flask import *
import os
import json

from util import data

app = Flask(__name__)
app.secret_key = os.urandom(32)

@app.route('/', methods=['GET','POST'])
def home():
	return render_template("index.html")

@app.route('/test', methods = ['GET', 'POST'])
def test():
	lottery_data = data.load_data()
	return render_template("test.html")

@app.route('/test2', methods = ['GET'])
def test2():
	lottery_data = data.load_data()
	return render_template("test2.html")

if __name__ == "__main__":
	app.debug = True
	app.run()
