#Team DataPhiles

"""
dataset = lottery
"""

from flask import *
import os
import json
from pymongo import MongoClient

from util import data

app = Flask(__name__)
app.secret_key = os.urandom(32)

@app.route('/', methods=['GET','POST'])
def home():
	return render_template("index.html")

@app.route('/test', methods = ['GET', 'POST'])
def test():
	lottery_data = data.load_data()
	print(lottery_data)
	return render_template("test.html")

if __name__ == "__main__":
	app.debug = True
	app.run()
