#Team DataPhiles

"""
dataset = lottery
"""

from flask import *
import os
import json
from pymongo import MongoClient

app = Flask(__name__)
app.secret_key = os.urandom(32)

@app.route('/', methods=['GET','POST'])
def home():
	return render_template("index.html")

if __name__ == "__main__":
	app.debug = True
	app.run()	
