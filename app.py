# Team DataPhiles

from flask import *
import os
import json
from pprint import pprint

app = Flask(__name__)
app.secret_key = os.urandom(32)

@app.route('/', methods=['GET'])
def home():
	return render_template("index.html")

@app.route('/test', methods = ['GET'])
def test():
        return render_template("map.html")

@app.route('/test2', methods = ['GET'])
def test2():
        return render_template("test2.html",data=json.dumps(lottery_data))

@app.route('/test3', methods=['GET'])
def test3():
	return render_template("slider.html")

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
