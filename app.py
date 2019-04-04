#Team DataPhiles

"""
dataset = lottery
"""

from flask import *
import os
import json
from pprint import pprint

from util import data

app = Flask(__name__)
app.secret_key = os.urandom(32)

@app.route('/', methods=['GET','POST'])
def home():
	return render_template("index.html")

@app.route('/test', methods = ['GET', 'POST'])
def test():
        d = data.parse_tsv('data/signif.tsv')
        return "a"

# @app.route('/test2', methods = ['GET'])
# def test2():
        # return render_template("test2.html",data=json.dumps(lottery_data))

@app.route('/test3', methods=['GET','POST'])
def test3():
	return render_template("test3.html")

if __name__ == "__main__":
	app.debug = True
	app.run()
