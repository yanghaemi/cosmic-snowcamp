from typing import Union

import os

from fastapi import FastAPI
from pydantic import BaseModel
from starlette.responses import JSONResponse
import requests
import uuid

app = FastAPI()

dir_path = "./database/"


class Food(BaseModel):
    food_name: str
    food_desc: str


@app.get("/showfood")
def show_food():
    file_list = os.listdir(dir_path)
    file_list_txt = [file for file in file_list if file.endswith(".txt")]

    return {"file_list_txt: {}".format(file_list_txt)}


@app.post("/addfood/")
async def add_food(food: Food):

    f = open(f".\database\{food.food_name}.txt", 'w')
    f.write(food.food_desc)

    f.close()

    return {"저장 성공"}


@app.get("/foodcnt")
def count_food():
    file_list = os.listdir(dir_path)
    size = len(file_list)
    return {size}


@app.post("/deletefood")
async def del_food(food: Food):
    file_path = f'./database/{food.food_name}.txt'
    os.remove(file_path)

    return {"msg": "삭제 성공"}
