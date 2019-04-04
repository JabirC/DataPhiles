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
    # DictReader returns OrderedDicts, but we don't need that,
    # so convert each OrderedDict to a regular dictionary
    return list(map(dict, res))
