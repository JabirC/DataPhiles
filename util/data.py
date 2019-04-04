import json
import csv

def parse_tsv(filename):
    '''
    Given a tsv file, returns a list of dictionaries
    '''
    res = []
    with open(filename) as tsv:
        reader = csv.DictReader(tsv, dialect='excel-tab')
        for row in reader:
            res.append(row)
    return res
