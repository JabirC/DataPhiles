# Team DataPhiles

from flask import *

import os
import json


app = Flask(__name__)
app.secret_key = os.urandom(32)

@app.route('/', methods=['GET'])
def home():
	return render_template("map.html")

# Below are URLs to send data files to the JS code

@app.route('/worldmapdata')
def world_map():
        return send_file("data/geodata.json")

@app.route('/earthquakesdata')
def earthquake_map():
        return send_file("data/earthquakes.tsv")

if __name__ == "__main__":
	app.debug = True
	app.run()
