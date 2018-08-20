from sanic import Sanic
from sanic.response import json
from sanic import response
import os
from sanic_jinja2 import SanicJinja2
from sanic.exceptions import NotFound

app = Sanic()
jinja = SanicJinja2(app)

app.static('/bundle.js', './static/bundle.js')

@app.route("/")
@jinja.template('index.html')
async def go_to_mainpage(request):
    return

@app.route("/api/v1/get_domains")
async def get_domains(request):
    domain = {'domains': ['domain1', 'domain2', 'domain3', 'domain4', 'domain5', 'domain6']}
    return json(domain)

@app.exception(NotFound)
def ignore_404s(request, exception):
    return response.file('./templates/index.html')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)