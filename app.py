#Team DataPhiles

"""
dataset = lottery
"""

from flask import *
import os
import json
import pprint

from util import data

app = Flask(__name__)
app.secret_key = os.urandom(32)

@app.route('/', methods=['GET','POST'])
def home():
	return render_template("index.html")

@app.route('/test', methods = ['GET', 'POST'])
def test():
	lottery_data = data.load_data()
	pprint.pprint(lottery_data)
	return render_template("test.html")

@app.route('/test2', methods = ['GET'])
def test2():
	lottery_data = data.load_data()
	pprint.pprint(lottery_data)
	return render_template("test2.html",data=json.dumps(lottery_data))

if __name__ == "__main__":
	app.debug = True
	app.run()
