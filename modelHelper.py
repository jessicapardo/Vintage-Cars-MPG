import pandas as pd
import datetime
import time
import pickle
import numpy as np

class ModelHelper():
    def __init__(self):
        pass

    def makePredictions(self, displacement, horsepower, weight, acceleration, year, cylinders, origin):
        cylinders_3 = 0
        cylinders_4 = 0
        cylinders_5 = 0
        cylinders_6 = 0
        cylinders_8 = 0

        origin_1 = 0
        origin_2 = 0
        origin_3 = 0

        # parse cylinders
        if (cylinders == 3):
            cylinders_3 = 1
        elif (cylinders == 4):
            cylinders_4 = 1
        elif (cylinders == 5):
            cylinders_5 = 1
        elif (cylinders == 6):
            cylinders_6 = 1
        elif (cylinders == 8):
            cylinders_8 = 1
        else:
            pass

        # parse origin
        if (origin == 1):
            origin_1 = 1
        elif (origin == 2):
            origin_2 = 1
        elif (origin == 3):
            origin_3 = 1
        else:
            pass

        input_pred = [[displacement, horsepower, weight, acceleration, year, cylinders_3, cylinders_4, cylinders_5, cylinders_6, cylinders_8, origin_1, origin_2, origin_3]]


        filename = 'finalized_model.sav'
        ada_load = pickle.load(open(filename, 'rb'))

        X = np.array(input_pred)
        #preds = ada_load.predict_proba(X)
        preds_singular = ada_load.predict(X)
        final = round(preds_singular[0], 2)
        return final

        #return preds_singular[0]