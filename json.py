import json
import pandas as pd
import numpy as np

file2 = open('new.json','a')


with open('airlines.json','r') as f:
	for line in f:
		tweet = json.loads(line)
		try:
			year = tweet['time']['year']
			if (year == 2015):
				file2.write(line)
		except:
			pass
