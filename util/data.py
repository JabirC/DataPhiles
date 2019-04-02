import json

def load_data():
    with open("data/lottery.json") as f:
        d = json.load(f)['data']
    L = []
    for row in d:
        data = row[8]
        data = data[:data.find('T')]
        numbers = row[9] + " " + row[10]
        L.append((data, numbers.split()))
    return L
