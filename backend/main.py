from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse, JSONResponse
import generic_helper

app = FastAPI()

# uvicorn main:app --reload 
# Adjust the path to the 'frontend' folder
app.mount("/static", StaticFiles(directory="../frontend"), name="static")

# Serve the home.html file on the root URL
@app.get("/", response_class=HTMLResponse)
async def home():
    with open("../frontend/pages/home.html") as f:
        return f.read()
    

@app.get("/categories.html", response_class=HTMLResponse)
async def read_categories():
    with open("../frontend/pages/categories.html", "r", encoding="utf-8") as file:
        return HTMLResponse(content=file.read())
    

@app.get("/brands.html", response_class=HTMLResponse)
async def read_categories():
    with open("../frontend/pages/brands.html", "r", encoding="utf-8") as file:
        return HTMLResponse(content=file.read())


@app.get("/systems.html", response_class=HTMLResponse)
async def read_categories():
    with open("../frontend/pages/systems.html", "r", encoding="utf-8") as file:
        return HTMLResponse(content=file.read())


@app.get("/services.html", response_class=HTMLResponse)
async def read_categories():
    with open("../frontend/pages/services.html", "r", encoding="utf-8") as file:
        return HTMLResponse(content=file.read())

